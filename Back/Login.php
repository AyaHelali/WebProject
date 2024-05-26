<?php
$servername = "127.0.0.1";
$port = "3307";
$username = "root";
$password = "";
$dbname = "dynamic_web_project";

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupération des données de l'utilisateur depuis la requête POST
$username = $_POST['username'];
$password = $_POST['password'];

// Recherche de l'utilisateur dans la base de données
$sql = "SELECT id, password FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Utilisateur trouvé, vérification du mot de passe
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        // Mot de passe correct, authentification réussie
        $user_id = $row['id'];
        echo json_encode(['status' => 'success', 'user_id' => $user_id]);
    } else {
        // Mot de passe incorrect
        echo json_encode(['status' => 'error', 'message' => 'Invalid password']);
    }
} else {
    // Utilisateur non trouvé
    echo json_encode(['status' => 'error', 'message' => 'User not found']);
}

// Fermeture de la connexion
$conn->close();
?>
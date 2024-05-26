<?php
$servername = "127.0.0.1";
$port = "3307";
$username = "root";
$password = "";
$dbname = "dynamic_web_project";

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname,$port);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupération des données du formulaire
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hachage du mot de passe

// Insertion des données dans la base de données
$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true, 'message' => 'User registered successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $sql . '<br>' . $conn->error]);
}

// Fermeture de la connexion
$conn->close();
?>
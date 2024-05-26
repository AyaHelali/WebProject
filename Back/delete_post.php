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

// Récupération de l'ID du post depuis la requête POST
$post_id = $_POST['post_id'];

// Suppression du post de la base de données
$sql = "DELETE FROM posts WHERE id='$post_id'";

if ($conn->query($sql) === TRUE) {
    echo "Post deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Fermeture de la connexion
$conn->close();
?>
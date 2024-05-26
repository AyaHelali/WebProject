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

// Récupération des données du post
$title = $_POST['title'];
$content = $_POST['content'];
$category = $_POST['category'];
$user_id = $_POST['user_id']; // Assurez-vous de passer l'ID utilisateur

// Insertion des données dans la base de données
$sql = "INSERT INTO posts (title, content, category, user_id) VALUES ('$title', '$content', '$category', '$user_id')";

if ($conn->query($sql) === TRUE) {
    echo "New post created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Fermeture de la connexion
$conn->close();
?>
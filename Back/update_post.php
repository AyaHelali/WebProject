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

// Récupération des données du post depuis la requête POST
$post_id = $_POST['post_id'];
$title = $_POST['title'];
$content = $_POST['content'];
$category = $_POST['category'];

// Échappement des chaînes de caractères pour éviter les injections SQL
$title = $conn->real_escape_string($title);
$content = $conn->real_escape_string($content);
$category = $conn->real_escape_string($category);

// Mise à jour des données du post dans la base de données
$sql = "UPDATE posts SET title='$title', content='$content', category='$category' WHERE id='$post_id'";

if ($conn->query($sql) === TRUE) {
    echo "Post updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Fermeture de la connexion
$conn->close();
?>
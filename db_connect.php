<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "db_coffeeshop"; 

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// echo "Conexão bem-sucedida!";
?>

<?php

$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];

$conn = new mysqli('localhost','root','','lemonwares');

$sql = "INSERT INTO users(username, email, password)
        VALUES ('$username', '$email', '$password')";

if($conn->query($sql) === TRUE) {
  echo "Datele au fost transmise!";
}

else {
  echo "Error: ".$sql. "<br>".$conn->error;
}

?>
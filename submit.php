<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Connect to the database
$host = 'localhost';
$username = 'your_username';
$password = 'your_password';
$dbname = 'your_database';
$conn = new mysqli($host, $username, $password, $dbname);

// Check for errors
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Prepare and execute the SQL query
$stmt = $conn->prepare("INSERT INTO users (name, email, message, timestamp) VALUES (?, ?, ?, NOW())");
$stmt->bind_param("sss", $name, $email, $message);
$stmt->execute();

// Close the database connection
$stmt->close();
$conn->close();

// Redirect back to the homepage
header('Location: index.html');
exit();
?>

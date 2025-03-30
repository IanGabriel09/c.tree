<?php
// Database connection
require_once './db_conn.php'; // Make sure you have a valid DB connection

$userID = 'uid456';
$username = 'HR2'; // Example username
$plainPassword = 'Zaq1Xsw2++'; // The password to be hashed
$hashedPassword = password_hash($plainPassword, PASSWORD_DEFAULT); // Hash the password

// Prepare an SQL statement to insert the user into the database
$stmt = $conn->prepare("INSERT INTO hr_admin (uuid, username, password) VALUES (? ,?, ?)");
$stmt->bind_param("sss", $userID, $username, $hashedPassword); // Bind the username and hashed password
$stmt->execute(); // Execute the statement

echo "User registered successfully with hashed password.";

$stmt->close();
$conn->close();

?>

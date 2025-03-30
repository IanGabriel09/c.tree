<?php
require_once '../../db_conn.php';

// Initialize response array
$response = array();

// Get the posted data
$username = $_POST['uname'];
$password = $_POST['pass'];

// Create a prepared statement
$stmt = $conn->prepare("SELECT password FROM hr_admin WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    // Fetch the user's hashed password
    $row = $result->fetch_assoc();
    $stored_password = $row['password'];

    // Check if the provided password matches the stored hashed password
    if (password_verify($password, $stored_password)) {
        $response['status'] = 'success';
    } else {
        $response['status'] = 'failed'; // Wrong password
    }
} else {
    $response['status'] = 'failed'; // User not found
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);

// Close the statement and connection
$stmt->close();
$conn->close();
?>

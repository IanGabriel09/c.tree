<?php

require_once '../../../db_conn.php';

// Set the default timezone to Manila
date_default_timezone_set('Asia/Manila');

// Get the tokenID and uuid from the query string
$tokenID = isset($_GET['tokenID']) ? $_GET['tokenID'] : null;
$uuid = isset($_GET['uuid']) ? $_GET['uuid'] : null;

if ($tokenID && $uuid) {
    // Debug: Output the UUID for verification
    echo 'UUID: ' . htmlspecialchars($uuid) . '<br>';

    // Prepare the UPDATE query to remove tk_id
    $stmt = $conn->prepare("UPDATE hiring_applications SET tk_id = NULL WHERE uuid = ?");
    
    // Check if the UPDATE statement was prepared correctly
    if ($stmt === false) {
        echo 'Error preparing UPDATE statement: ' . $conn->error;
        exit;
    }

    // Bind the parameter and execute the query
    $stmt->bind_param("s", $uuid);
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            header("Location: ./sentSuccess.html");
        } else {
            echo 'No record found for the provided uuid.';
            header("Location: ./sentFailed.html");
        }
    } else {
        echo 'Failed to delete tk_id: ' . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    echo 'No tokenID or uuid provided.';
}

// Close the connection
$conn->close();
?>

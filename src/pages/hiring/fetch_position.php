<?php
header('Content-Type: application/json');

// Include the database connection
require_once '../../../db_conn.php';

// Prepare the SQL query to fetch all records from the hiring_positions table
$sql = "SELECT * FROM hiring_positions";

// Execute the query and get the result
$result = $conn->query($sql);

// Check if the query was successful
if ($result->num_rows > 0) {
    // Fetch all results as an associative array
    $positions = $result->fetch_all(MYSQLI_ASSOC);
} else {
    $positions = [];
}

// Return the result as JSON
echo json_encode($positions);
$conn->close();
?>

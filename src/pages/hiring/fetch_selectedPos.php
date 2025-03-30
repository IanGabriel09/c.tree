<?php
header('Content-Type: application/json');

// Include the database connection
require_once '../../../db_conn.php';

if(isset($_POST['posID'])) {
    $posID = $_POST['posID'];

    $stmt = $conn->prepare("SELECT * FROM hiring_positions WHERE UID = ?");
    $stmt->bind_param('s', $posID);

    $stmt->execute();   
    $result = $stmt->get_result();

    if($result->num_rows > 0) {
        $response = $result->fetch_assoc();
        echo json_encode($response);
    } else {
        echo json_encode(["message" => "No data found for the provided position ID."]);
    }

    $stmt->close();
} else {
    echo json_encode(["error" => "No position ID provided."]);
}

$conn->close();
?>
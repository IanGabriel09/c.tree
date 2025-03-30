<?php
header('Content-Type: application/json');

// Include the database connection
require_once '../../../db_conn.php';

// Function to generate the custom UUID
function generateCustomUUID() {
    $randomNumber = mt_rand(100000, 999999); // Ensure it's a 6-digit number
    return "appl" . $randomNumber;
}

function generateTokenID() {
    $randomNumber = mt_rand(100000, 999999); // Ensure it's a 6-digit number
    return "TK" . $randomNumber;
}

// Set timezone to Asia/Manila
date_default_timezone_set('Asia/Manila');

// Get the current timestamp in the required format
function generateDateUploaded() {
    return date('Y-m-d H:i:s'); // This will give you the timestamp format: YYYY-MM-DD HH:MM:SS
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uuid = generateCustomUUID();
    $token = generateTokenID();
    $date_uploaded = generateDateUploaded(); // Get the current timestamp
    $fields = [
        'appliedPosition', 'lName', 'fName', 'mName', 'permAddress', 'permContact', 'presAddress', 'presContact', 
        'email', 'bday', 'age', 'nationality', 'birthPlace', 'religion', 'status', 'childCount', 'tin', 'sss', 'phHealth', 'hdmf',
        'fatherName', 'fatherOccupation', 'fatherAge', 'motherName', 'motherOccupation', 
        'motherAge', 'spouseName', 'spouseOccupation', 'spouseAge', 'elem', 'elemAddress', 'elemStartYr', 
        'elemEndYr', 'elemAwards', 'hs', 'hsAddress', 'hsStartYr', 'hsEndYr', 'hsAwards', 'vocational', 
        'vocationalAddress', 'vocationalStartYr', 'vocationalEndYr', 'vocationalAwards', 'college', 'collegeAddress', 
        'collegeStartYr', 'collegeEndYr', 'collegeAwards', 'collegeCourse', 'fieldStudy', 'height', 'weight', 'dominantHand', 'confirmOperation',
        'operationData', 'confirmMedicine', 'confirmPregnant', 'pregnantMonths',  'salaryExpect', 'transport', 'language', 'hobbies', 'cTreeDiscover', 
        'workedBefore', 'hasRelatives', 'shiftWork', 'physicalExam', 'convicted', 'emergency', 'history', 'reference' // 72 fields
    ]; 
    
    // Ensure all fields are set or null if not
    foreach ($fields as $field) {
        $_POST[$field] = isset($_POST[$field]) && $_POST[$field] !== '' ? $_POST[$field] : null;
    }

    // JSON-encode the 'emergency', 'history', 'reference' fields if they are set
    if (isset($_POST['emergency']) && $_POST['emergency'] !== '') {
        $_POST['emergency'] = json_encode($_POST['emergency']);
    }

    if (isset($_POST['history']) && $_POST['history'] !== '') {
        $_POST['history'] = json_encode($_POST['history']);
    }

    if (isset($_POST['reference']) && $_POST['reference'] !== '') {
        $_POST['reference'] = json_encode($_POST['reference']);
    }


    // Prepare the SQL insert statement with placeholders
    // Generate placeholders dynamically
    $placeholders = implode(', ', array_fill(0, count($fields), '?'));
    
    // Add Token, date_uploaded, and UUID field manually since they are generated separately
    $query = "INSERT INTO hiring_applications (
        tk_id, date_uploaded, uuid, " . implode(', ', $fields) . "
    ) VALUES (?, ?, ?," . $placeholders . ")";
    
    // Prepare the SQL statement
    if ($stmt = $conn->prepare($query)) {
        // Bind the parameters dynamically
        // Bind the Token first, then date_uploaded, then UUID, and then the rest of the fields
        $types = 'sss' . str_repeat('s', count($fields)); // 's' for each field
        $params = array_merge([$token, $date_uploaded, $uuid], array_map(function($field) {
            return $_POST[$field];
        }, $fields));
        
        // Bind the parameters to the prepared statement
        $stmt->bind_param($types, ...$params);

        // Execute the statement
        if ($stmt->execute()) {
            // Return success response
            echo json_encode([
                'status' => 'success',
                'message' => 'Data inserted successfully',
                'uuid' => $uuid,
                'token' => $token,
                'date_uploaded' => $date_uploaded,
                'email' => $_POST['email'],
                'fName' => $_POST['fName'],
                'lName' => $_POST['lName']
            ]);
        } else {
            // Return error response if insertion fails
            echo json_encode([
                'status' => 'error',
                'message' => 'Failed to insert data',
                'error_details' => $conn->error
            ]);
        }

        // Close the statement
        $stmt->close();
    } else {
        // Return error response if statement preparation fails
        echo json_encode([
            'status' => 'error',
            'message' => 'Failed to prepare SQL statement',
            'error_details' => $conn->error
        ]);
    }
    
} else {
    // If the request method is not POST, return an error response
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid request method'
    ]);
}
?>

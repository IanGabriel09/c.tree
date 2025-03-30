<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../../../assets/lib/PHPMailer-master/src/Exception.php';
require '../../../assets/lib/PHPMailer-master/src/PHPMailer.php';
require '../../../assets/lib/PHPMailer-master/src/SMTP.php';

// Include the database connection
require_once '../../../db_conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tk = $_POST['tk'];
    $uuid = $_POST['uuid'];
    $emailAdd = $_POST['emailAdd'];
    $fullName = $_POST['firstName'] . ' ' . $_POST['lastName']; // Correct string concatenation

    // Construct the verification link
    $verificationLink = "http://localhost/c.tree/src/pages/hiring/send_application.php?tokenID=$tk&uuid=$uuid";

    // Setup PHPMailer
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Set the SMTP server to send through
        $mail->SMTPAuth = true;
        $mail->Username = 'koufusmtp@gmail.com'; // SMTP username
        $mail->Password = 'wffk srnk kdyx gupa'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; // TCP port to connect to

        // Recipients
        $mail->setFrom('koufusmtp@gmail.com', 'Colortree Mailer');
        $mail->addAddress($emailAdd, $fullName); // Add recipient's email and full name

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Email Verification';

        // Email body with the verification link
        $mailContent = "<p>Greetings $fullName,</p>
                        <p>Thank you for your taking the time to apply in Colortree Label Corporation. To proceed with your application, please click the link below.</p>
                        <p><a href='$verificationLink'>Verify your email</a></p>
                        <p>If you did not request this verification, please ignore this email.</p>
                        <p>Best regards,<br>Colortree Team</p>";

        $mail->Body = $mailContent; // Set the email body content

        // Send the email
        $mail->send();
        echo json_encode([
            'statusMail' => 'success',
            'message' => 'Verification email sent successfully.'
        ]);

    } catch (Exception $e) {
        // Delete the record from the database when email fails
        $sql = "DELETE FROM hiring_applications WHERE uuid = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $uuid); // Bind the uuid parameter
        $stmt->execute(); // Execute the query

        echo json_encode([
            'statusMail' => 'error',
            'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}. The application has been removed from the database."
        ]);
    }
} else {
    // If the request method is not POST, return an error response and delete from database
    $sql = "DELETE FROM hiring_applications WHERE uuid = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $uuid); // Bind the uuid parameter
    $stmt->execute(); // Execute the query

    echo json_encode([
        'statusMail' => 'error',
        'message' => 'Invalid request method. The application has been removed from the database.'
    ]);
}
?>

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

// Include the jeep_connection class
include 'jeep_connection.php';

$data = json_decode(file_get_contents("php://input"));
if (isset($data->username) && isset($data->password)) {
    $ojbDb = new jeep_connection;
    $con = $ojbDb->connect();

    // Check if the connection is successful
    if (!$con) {
        echo json_encode(["success" => false, "message" => "Database connection failed"]);
        exit;
    }

    // Sanitize user input to prevent SQL injection
    $username = htmlspecialchars(strip_tags($data->username));
    $password = htmlspecialchars(strip_tags($data->password));

    // Prepare and execute the query
    $query = "SELECT * FROM `admin` WHERE `username` = :username AND `password` = :password";
    $stmt = $con->prepare($query);
    $stmt->bindParam(":username", $username);
    $stmt->bindParam(":password", $password);

    try {
        $stmt->execute();
    } catch (PDOException $e) {
        echo json_encode(["success" => false, "message" => "Query execution failed: " . $e->getMessage()]);
        exit;
    }

    // Check if the user exists
    if ($stmt->rowCount() == 1) {
        // Authentication successful
        echo json_encode(["success" => true]);
    } else {
        // Authentication failed
        echo json_encode(["success" => false, "message" => "Incorrect Username/Password. Please try again!"]);
    }
} else {
    // Username or password not provided
    echo json_encode(["success" => false, "message" => "Username and password are required"]);
}
?>

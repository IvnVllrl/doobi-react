<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

include 'jeep_connection.php';

$ojbDb = new jeep_connection;
$con = $ojbDb->connect();

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET' && isset($_GET['terminal'])) {
    $terminal = $_GET['terminal'];

    if ($con) {
        // Fetch data from the database based on the selected terminal
        $query = "SELECT jc.*, ji.* FROM `jeepney-counter` jc
        JOIN `jeepney-info` ji ON jc.jeepney_name = ji.jeepney_name
        WHERE jc.terminal = :terminal";

        $stmt = $con->prepare($query);
        $stmt->bindParam(':terminal', $terminal);
        $stmt->execute();

        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($data);
    } else {
        echo json_encode(["error" => "Database connection error"]);
    }
} else {
    echo json_encode(["error" => "Invalid request method or missing terminal parameter"]);
}
?>

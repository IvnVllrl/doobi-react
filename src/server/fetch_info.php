<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$con = mysqli_connect('localhost', 'root', '', 'jeepney-counter');

if (mysqli_connect_error()) {
    echo "Cannot Connect";
    exit();
}

$sql = "SELECT * FROM `jeepney-info`";
$result = mysqli_query($con, $sql);

$data = [];

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

mysqli_close($con);

echo json_encode($data);
?>

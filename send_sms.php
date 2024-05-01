<?php
$phoneNumber = $_GET['phoneNumber'];
$apiUrl = 'https://api.torob.com/v4/user/phone/send-pin/?phone_number=' . urlencode($phoneNumber);

$response = file_get_contents($apiUrl);

echo $response;
?>

<?php
	

include("conn.php");
session_start();

$user = $_POST['user'];
$pass = $_POST['pass'];

$sql = "SELECT id, user FROM users WHERE user= '$user' AND pass = MD5('$pass')";
$result = mysqli_query($db, $sql);

$count = mysqli_num_rows($result);

if($count == 1){
	$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
	echo(json_encode(array($row, "found")));
} else{
	echo("noFOUND");
}
			?>
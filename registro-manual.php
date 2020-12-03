<?php

include("conn.php");

$id = $_POST['id'];
$name = $_POST['name'];
$type = $_POST['type'];

$sql1 = "SELECT id FROM products WHERE id= '$id'";
$result1 = mysqli_query($db, $sql1);

$count = mysqli_num_rows($result1);

if($count == 1){
	echo("repetido");
} else{
	$sql2 = "INSERT INTO products (id, name, type) VALUES ('$id', '$name', '$type')";
	if (!mysqli_query($db, $sql2)) {
		echo("QUERY ERROR");		
		}
}
			







?>
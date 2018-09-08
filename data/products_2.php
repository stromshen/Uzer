<?php
$conn = mysqli_connect('127.0.0.1','root','','uzer',3306);
mysqli_query($conn,"set names UTF8");
$sid=$_REQUEST["sid"];
$sql="select * from room where sid='$sid'";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>

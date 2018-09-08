<?php
header("Content-Type:application/json;charset=utf-8");
@$hotel_name=$_REQUEST["hotel_name"];
$conn = mysqli_connect('127.0.0.1','root','','uzer',3306);
mysqli_query($conn,"set names UTF8");
$sql="select * from hotel where hotel_name LIKE '%$hotel_name%'";
$result=mysqli_query($conn,$sql);
$res=mysqli_fetch_all($result,1);
echo json_encode($res);





?>

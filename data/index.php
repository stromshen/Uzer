<?php
$conn = mysqli_connect('127.0.0.1','root','','uzer',3306);
mysqli_query($conn,"set names UTF8");
$sql="select * from hotel where hotel_type>0";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>

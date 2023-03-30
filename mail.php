<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail_header = "From:".$name."<".$email.">\r\n";

$receiver = "mohac5662@gmail.com";

mail($receiver,"From my webpage",$message)
or die("Error!");

echo"message send"; 

?>
<?php
$userInfo = $_POST;
//把获取的用户信息数组编码成json字符串
$json = json_encode($userInfo);
echo  $json ; 
?>
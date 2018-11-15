<?php

$status = false;

if (($_POST["name"] == 'admin') && ($_POST["password"] == '123456')) {
    
    $ans = "<p>Вы вошли, ".$_POST["name"]."</p>";
    $status = true;
    
} else {
    $ans = "<p>Неверные данные</p>";
}

$result = array(
    'status' => $status,
    'ans' => $ans
); 

echo json_encode($result); 


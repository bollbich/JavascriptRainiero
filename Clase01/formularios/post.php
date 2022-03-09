<?php

$nombre = $_POST['nombre'];
$edad = $_POST['age'];

if($nombre ===''|| $edad === '')
{
    echo json_encode('error');
}
else
{
    echo json_encode("Correcto: <br>Nombre: ".$nombre."<br>Edad: ".$edad);
}
?>
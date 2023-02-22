<?php
// header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = "j.geraldo.romero@gmail.com";
    $subject = "[WS001] - Contacto Web";
    $name = $_POST['nombre'];
    $lname = $_POST['apellido']
    $email = $_POST['correo'];
    $asunto = $_POST['asunto'];
    $message = $_POST['mensaje'];

    $body = "Asunto: " . $asunto . "\n" .
            "Nombre: " . $name . "\n" .
            "Email: " . $email . "\n" .
            "Mensaje: " . $message;

    $headers = "From: " . $email;

    if (mail($to, $subject, $body, $headers)) {
        echo "¡Gracias! Su mensaje ha sido enviado con éxito.";
    } else {
        http_response_code(500);
        echo "¡Lo siento! Ha ocurrido un error al enviar el mensaje.";
    }
} else {
    http_response_code(405);
    echo "Método no permitido";
}
?>
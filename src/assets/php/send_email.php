$to = "j.geraldo.romero@gmail.com";
$subject = "[WS001] - Contacto Web";
$name = $_POST['nombre'];
$lname = $_POST['apellido']
$email = $_POST['correo'];
$asunto = $_POST['asunto'];
$message = $_POST['menasje'];

$body = "Asunto: " . $asunto . "\n" .
        "\n" .
        "Nombre: " . $name . "\n" .
        "Email: " . $email . "\n" .
        "Mensaje: " . $message;

$headers = "From: " . $email;

mail($to, $subject, $body, $headers);
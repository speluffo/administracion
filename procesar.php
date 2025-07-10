<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $captcha = $_POST['captcha'];
    $recibir = isset($_POST['recibir_mails']) ? 'Sí' : 'No';

    // Validar captcha
    if (trim($captcha) != '27') {
        die("Captcha incorrecto.");
    }

    // Enviar o guardar (aquí solo muestra los datos para prueba)
    echo "<h3>Gracias por contactarte, $nombre</h3>";
    echo "<p>Email: $email</p>";
    echo "<p>Mensaje: $mensaje</p>";
    echo "<p>¿Desea recibir correos?: $recibir</p>";
} else {
    echo "Acceso no permitido.";
}
?>

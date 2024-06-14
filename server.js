const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Configuración del middleware para analizar datos de formularios
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para manejar el envío del formulario
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Configurar el transporter para enviar correos electrónicos
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'speluffo23@gmail.com', // Aquí tu dirección de correo Gmail
            pass: '14151602elias' // Aquí tu contraseña
        }
        res.send('¡El mensaje ha sido enviado!');
    });// Iniciar el servidor
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en el puerto ${PORT}`);
    });


    // Configurar el correo electrónico
    const mailOptions = {
        from: email,
        to: 'speluffo23@gmail.com', // Aquí la dirección de correo a la que quieres enviar los mensajes
        subject: `Nuevo mensaje de contacto de ${name}`,
        text: message
    };

    // Enviar correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Hubo un error al enviar el mensaje.');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('¡El mensaje ha sido enviado!');
        }
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

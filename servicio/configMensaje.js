const nodemailer = require('nodemailer');


module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({

        host: "smtp.gmail.com",
        // secureConnection: false,
        port: 465,
        secure: true,


        auth: {
            user: 'britodany12@gmail.com',
            pass: 'D19942344',

        },

        tls: {
            rejectUnauthorized: false
        }
    });
    const mailOptions = {
        // from: `"${formulario.nombre} " <${formulario.email}>`,
        from: '"ZigbMax ATMSense" <Zigbmax@example.com>',
        to: 'prueba@hotmail.com', //Cambia esta parte por el destinatario
        subject: `"Notificación de ${formulario.event}"`,
        html: `
       <h1 style="text-align:center;text-transform:uppercase;color:#006d00;font-weight:bold">Estimado usuari@ ATMSense</h1>

<h2 style="color:#000;text-align:center;font-weight:400">
Por este medio se le informa que hubo un <span style="font-weight:bold">evento de ${formulario.typenotifi}</span>
del <span style="font-weight:bold">sensor ${formulario.deviceid}</span> 
ocasionado por <span style="font-weight:bold">${formulario.event}</span> 
en la ubicación <span style="font-weight:bold">${formulario.account}</span> 
con la fecha de <span style="font-weight:bold">${formulario.fecha}</span>
</h2>
<br>

<h3  style="color:#0a6e0b;text-align:center;font-weight:bold" >Para cualquier duda o aclaración favor de comunicarse al siguiente número 9988443547 <br>
Gracias por su atención. </h3>

<footer >
<img style="max-width: 100%;" src="cid:nyan@example.com" alt="banner">
</footer>
             `,
        attachments: [{
            filename: 'Zigbmax.webp',
            path: __dirname + '/assets/banner_zigbmax.webp',
            cid: 'nyan@example.com' // should be as unique as possible
        }]

    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
        console.log("Correo enviado correctamente");
    });
}

{
    /* <p>Por este medio se le notifica que hubo un evento de ${formulario.typenotifi} 
    del sensor ${formulario.deviceid} ocasionado por ${formulario.event} en la ubicación
    ${formulario.account} <br> en la fecha de ${formulario.fecha}</p> <br>

    <p>Gracias por su atención</p> */
}
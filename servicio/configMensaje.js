const nodemailer = require('nodemailer');


module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({

        host: "smtp.ethereal.email",
        // secureConnection: false,
        port: 587,
        secure: false,


        auth: {
            user: 'issac.parker27@ethereal.email',
            pass: 'rB9GfJnmbcnC7fKZ2a',

        },

        tls: {
            rejectUnauthorized: false
        }
    });
    const mailOptions = {
        from: `"${formulario.nombre} " <${formulario.email}>`,
        to: 'webmaster@sisec.com.mx', //Cambia esta parte por el destinatario
        subject: "Sisec",
        html: `
             <strong>Nombre:</strong> ATMSense<br/>
             <strong>Telefono:</strong> 1234 <br/>
             <strong>E-mail:</strong> issac.parker27@ethereal.email <br/>
             
             `
            //         html: `
            //  <strong>Nombre:</strong> ${formulario.fullname}<br/>
            //  <strong>Telefono:</strong> ${formulario.phone} <br/>
            //  <strong>E-mail:</strong> ${formulario.email} <br/>

        //  `
    };
    //     const mailOptions = {
    //         from: "Remitente",
    //         to: 'britodany12@gmail.com', //Cambia esta parte por el destinatario
    //         subject: "Enviado desde nodemailer",
    //         html: `
    //  <strong>Nombre:</strong> ATMSense<br/>
    //  <strong>Telefono:</strong> 1234 <br/>
    //  <strong>E-mail:</strong> shemar.russel0@ethereal.email <br/>

    //  `
    //     };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
        console.log("Correo enviado correctamente");
    });
}

{ /* <strong>Mensaje:</strong> ${formulario.message} */ }
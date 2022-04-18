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
        from: `"${formulario.nombre} " <${formulario.email}>`,
        to: 'webmaster@sisec.com.mx', //Cambia esta parte por el destinatario
        subject: "Sisec",
        html: `
             <strong>Nombre:</strong> ATMSense<br/>
             <strong>Telefono:</strong> 1234 <br/>
             <strong>E-mail:</strong> issac.parker27@ethereal.email <br/>
             <img src="https://cldup.com/D5Cj_C1Vw3.png"/>
             
             
             `

    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
        console.log("Correo enviado correctamente");
    });
}

{ /* <strong>Mensaje:</strong> ${formulario.message} */ }
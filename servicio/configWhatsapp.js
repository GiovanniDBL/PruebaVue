module.exports = (formulario) => {
    const TWILIO_ID = "AC14db6c53c1d43f65e3a3aad2d7ce1432";
    const TWILIO_SK = "df09e10274f56a4d4e8f2e0463d128bc";

    const client = require('twilio')(TWILIO_ID, TWILIO_SK)

    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: `🚩 Evento de *${formulario.typenotifi}* del sensor *${formulario.deviceid}* ocasionado por *${formulario.event}* en la ubicación *${formulario.account}* con la fecha de *${formulario.fecha}*. 🚩`,
            to: 'whatsapp:+5219988443544'
        })
        .then(message => console.log(message.sid, ));
}

// to: `whatsapp:${formulario.numero}`
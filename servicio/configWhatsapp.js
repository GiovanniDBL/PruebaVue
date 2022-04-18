module.exports = () => {
    const TWILIO_ID = "AC14db6c53c1d43f65e3a3aad2d7ce1432";
    const TWILIO_SK = "48787659a5b4cc7ae5468851274a5255";

    const client = require('twilio')(TWILIO_ID, TWILIO_SK)

    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: 'Mensaje ATMSense',
            to: 'whatsapp:+5219988443544'
        })
        .then(message => console.log(message.sid, ));
}
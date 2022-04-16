const express = require('express');
const cors = require('cors');
const configMensaje = require('./configMensaje');
const fs = require("fs")
const https = require('https')

// *Invocamos express
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var cert = fs.readFileSync('certs/cert.pem')
var key = fs.readFileSync('certs/key.pem')

//** Envíar correo desde el formulario contacto ZigbMax */
app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})

// *Start Server
app.listen(3000, () => {
    console.log("Servicio SISEC corriendo");
    console.log("*****************************************");
});

// https.createServer({
//     cert: cert,
//     key: key
// }, app).listen(3000, () => {
//     console.log("Servicio ZigbMax Corriendo");
//     console.log("*****************************************");
// })
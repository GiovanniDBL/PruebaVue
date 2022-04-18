<template>
<div class="animated fadeIn">
    <!-- <p style="color:red">{{$store.getters.title}}</p> -->
    <!-- <p style="color:red">{{title}}</p> -->
    <!-- <p style="color:red">hola {{name}}</p> -->
    <nav class="navbar sticky-top navbar-expand-lg ">
        <div class="container-fluid">
            <span class="navbar-brand">Central de <span class="span-brand" id="brandf">monitoreo</span></span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <!-- <li class="nav-item">
          <span>{{idConexion}}</span>
        </li> -->
                    <li class="nav-item">

                        <span class="tooltipp">
                            <i v-bind:style="{color:EstadoServidor(flagRegistro)}" class="fad fa-satellite-dish"></i>
                            Conexión:
                            <span v-if="flagRegistro == '1'" style="color:#1abb97">Activa</span>
                            <span v-if="flagRegistro != '1'" style="color:#ff0000">Desactivada</span>
                            <span class="tooltiptext"> <span>ID_Conexión:</span> {{idConexion}}</span>
                        </span>
                    </li>
                    <li class="nav-item">
                        <span v-if="fechaConexion != '0'"> Última conexión: <span class="span-señal">{{fechaConexion}}</span></span>
                        <span v-if="fechaConexion == '0'"> Última conexión: <span class="span-señal">{{fechaConexionStorage}}</span></span>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

    <section class="home">
        <!-- ********************** ALARMAS********************************************** -->
        <!-- <img src="@/assets/logo.webp" alt=""> -->
        <!-- <button type="button" class="btn btn-primary" @click.prevent="playSound(require('@/assets/audioDemo.mp3'))">audio</button> -->
        <!-- <button type="button" class="btn btn-primary" @click="clickprueba()">toast</button> -->
        <div class="row">
            <!-- *PRIMER COLUMNA ALARMAS -->
            <div class="col">
                <!-- <div class="card bg-light" style="width: 38rem;"> -->
                <div class="card bg-light card2">
                    <div class="card-header ">
                        <span class="position-relative" style="padding-right:5px;">
                            Alarmas
                            <span class="position-absolute top-0 start-100 translate-middl badge rounded-pill bg-danger">{{totalAlarmas}}</span>
                        </span>

                        <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
                    </div>
                    <div class="card-body">
                        <div class="scrollable">
                            <!-- table-bordered -->
                            <!-- <table cellspacing="1" cellpadding="1" class="table  table-sm table-hover  table-striped table-borderless table-tamaño" > -->
                            <table cellspacing="1" cellpadding="1" class="table  table-sm table-hover  table-borderless table-tamaño">
                                <thead class="" style="background:#41464b; color:#fff">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Cuenta</th>
                                        <th scope="col">Dispositivo</th>
                                        <th scope="col">Evento</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Estado de alarma</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in itemsAlerts" :key="item.idAlarmas">
                                    <!-- style="background:#c71527;" -->
                                    <!-- id="{{'device-' + item.idDeviceZona}}" -->
                                    <!-- :id="'device-'+ item.idAlarmas" -->
                                    <!-- status_restablecimiento -->
                                    <!-- <tr class="color-alarmas"  v-bind:style="{backgroundColor:ChangeColor(asd)}" v-bind:class="item.clasificacion==1? 'text-light':'text-dark'"  -->
                                    <tr class="color-alarmas" v-bind:style="{backgroundColor:ChangeColor(item.clasificacion)}" v-bind:class="item.clasificacion==1? 'text-light':'text-dark'" :id="'device-'+ item.idAlarmas" @click="popup(item.idAlarmas, item.account, item.deviceid, item.event, item.fecha, item.estado_alarma)">
                                        <th scope="row">{{item.idAlarmas}}</th>
                                        <td>{{item.account}}</td>
                                        <td>{{item.deviceid}}</td>
                                        <td>{{item.event}}</td>
                                        <td>{{item.fecha}}</td>
                                        <td>{{item.estado_alarma}} <span :id="'icono-'+ item.idAlarmas"></span></td>
                                        <!-- <td >{{item.estado_alarma}} <span class="icon-color" :id="'icono-'+ item.idAlarmas"></span></td> -->
                                        <!-- <i  v-if="pendientes =='0'" style="color:red; font-size: 9px" class="fas fa-circle"></i> -->
                                        <!-- <i  class="fas fa-circle"></i> -->
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- *SEGUNDA COLUMNA ALARMAS EN PROGRESO -->
            <!-- itemsAlertsProgreso -->
            <div class="col">
                <!-- <div class="card bg-light" style="width: 38rem;"> -->
                <div class="card bg-light card2">
                    <div class="card-header">
                        <span class="position-relative" style="padding-right:5px;">
                            Alarmas en progreso
                            <span class="position-absolute top-0 start-100 translate-middl badge rounded-pill bg-danger">{{totalAlarmasProgreso}}</span>
                        </span>
                    </div>
                    <div class="card-body">
                        <div class="scrollable">
                            <table cellspacing="1" cellpadding="1" class="table  table-sm   table-hover  table-striped table-borderless table-tamaño">
                                <thead style="background:#41464b; color:#fff" class="">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Cuenta</th>
                                        <th scope="col">Dispositivo</th>
                                        <th scope="col">Evento</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Estado de alarma</th>
                                    </tr>
                                </thead>
                                <tbody style="background:#f39c12;" v-for="item in itemsAlertsProgreso" :key="item.idAlarmas">
                                    <!-- #1b7cb5 -->
                                    <tr :id="'device2-'+ item.idAlarmas" @click="popup2(item.idAlarmas, item.account, item.deviceid, item.event, item.fecha, item.estado_alarma)">
                                        <th style="color:#fff" scope="row">{{item.idAlarmas}}</th>
                                        <td style="color:#fff">{{item.account}}</td>
                                        <td style="color:#fff">{{item.deviceid}}</td>
                                        <td style="color:#fff">{{item.event}}</td>
                                        <td style="color:#fff">{{item.fecha}}</td>
                                        <td style="color:#fff">{{item.estado_alarma}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- *********************** EVENTOS ****************************** -->
        <div class="section-eventos">
            <div class="card  bg-light card-evento">
                <div class="card-header">
                    <span class="position-relative" style="padding-right:5px;">
                        Eventos
                        <span class="position-absolute top-0 start-100 translate-middl badge rounded-pill bg-danger">{{totalEventos}}</span>
                    </span>
                </div>
                <div class="card-body">
                    <!-- *PRIMER COLUMNA EVENTOS-->
                    <div class="scrollable">
                        <table cellspacing="1" cellpadding="1" class="table table-hover   table-borderless table-tamaño">
                            <thead style="background:#41464b; color:#fff" class="">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Cuenta</th>
                                    <th scope="col">Dispositivo</th>
                                    <th scope="col">Evento</th>
                                    <th scope="col">Fecha</th>
                                    <!-- <th scope="col">Estado de alarma</th> -->
                                </tr>
                            </thead>
                            <tbody style="background:#0c9f54;" v-for="item in itemsEvents" :key="item.idEventos">
                                <tr :id="'device-'+ item.idEventos">
                                    <th style="color:#fff" scope="row">{{item.idEventos}}</th>
                                    <td style="color:#fff;">{{item.account}}</td>
                                    <td style="color:#fff">{{item.deviceid}}</td>
                                    <td style="color:#fff">{{item.event}}</td>
                                    <td style="color:#fff">{{item.fecha}}</td>
                                    <!-- <td style="color:#fff">{{item.estado}}</td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <detalles @customChange="logChange" /> -->

</div>
</template>

<script>
import axios from 'axios'
import sidebar from './Sidebar';
import Swal from 'sweetalert2';
import moment from 'moment'
import detalles from './detalles';
import {
    mapGetters
} from 'vuex';
var audio = new Audio(require('@/assets/audioDemo.mp3'))
var audio2 = new Audio(require('@/assets/audioDemo2.mp3'))
let messageApi = 'http://localhost:3000/formulario/';
export default {
    name: "monitoreoComponent",
    // props:{
    //   name:{
    //     type: String,
    //     default:"Hello"
    //     }
    // },
    components: {
        sidebar,
        detalles,
    },
    mounted() {
        // this.Alert();
        this.getAlarmasFromHttp();
        this.getEventosFromHttp();
        this.getProgresoAlarmasFromHttp();
        this.getDataFromSocket();

        // console.log('variable global',this.myVar);

    },

    computed: mapGetters({
        title: "title"
    }),
    data() {
        return {
            items: [{
                    id: '8319',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8320',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8321',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8322',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8323',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8324',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8325',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8326',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8327',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8328',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8329',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
                {
                    id: '8330',
                    cuenta: 'GSI Sucursal 1',
                    dispositivo: '414150',
                    evento: 'Desprendimiento',
                    fecha: '16/03/2022 14:22:39',
                    estado: 'pendiente'
                },
            ],
            itemsAlerts: [],
            itemsAlertsProgreso: [],
            itemsEvents: [],
            flagRegistro: 0,
            fechaConexion: '0',
            fechaConexionStorage: localStorage.getItem('localsocket'),
            idConexion: '',
            clasificacion: '',
            totalAlarmas: 0,
            totalAlarmasProgreso: 0,
            totalEventos: 0,
            pendientes: '',
            asd: '',
            GlobalApi: this.globalVar,
        }
    },

    methods: {
        logChange(event) {
            console.log(event);
        },
        //  var audio = new Audio('../assets/audioDemo.mp3')
        playSound(sound) {
            if (sound) {
                var audio = new Audio(sound);
                audio.play();
            }
        },
        popup(id, c, d, e, f, es) {
            //       var trDevice=document.getElementById("device-" + id);
            // trDevice.style.backgroundColor = '#c71527';
            // trDevice.style.transition = 'all .9s ease-in-out';

            var tricono = document.getElementById("icono-" + id);
            tricono.innerHTML = ""
            tricono.style.color = "#fff"
            window.open("/detalles/" + id, id, "location=0,status=0,scrollbars=0,width=480,height=572,top=50%");

            audio2.pause();
            let jSON = {
                deviceid: d,
                fecha: f,
                account: c,
                event: e,
                zona: "000",
                cantidad: "1",
                idAlarmas: id,
                estado_alarma: 'progreso',
            };

            console.log('monitoreo', jSON);
            this.itemsAlertsProgreso.splice(0, 0, jSON);

            var index = this.itemsAlerts.map(x => {
                return x.idAlarmas;
            }).indexOf(id)

            this.itemsAlerts.splice(index, 1)
            //   console.log(this.itemsAlerts);
            setTimeout(() => {
                // var tricono = document.getElementById("icono-" + idAlarmas);
                // tricono.innerHTML="<i class='fas fa-circle'></i>"
                // tricono.style.color = "#dc3545"

                var trDevice = document.getElementById("device2-" + id);
                trDevice.style.backgroundColor = '#0d6b7e';
                // trDevice.style.border = 'solid 1.5px #ff6384'
                trDevice.style.transition = 'all .9s ease-in-out';

                setTimeout(() => {
                    trDevice.style.border = ''
                    trDevice.style.backgroundColor = '';
                }, 20000)

            }, 1000);

        },
        popup2(id, c, d, e, f, es) {

            window.open("/detalles/" + id, id, "location=0,status=0,scrollbars=0,width=480,height=572,top=50%");

        },

        Alert: function () {
            var mouseStop = null;
            // var Time=60000; /** 1 minutos */ 
            // var Time=120000; /** 2 minutos */ 
            // var Time=5000; /** 5 segundos */
            document.onmousemove = function () {
                clearTimeout(mouseStop);
                mouseStop = setTimeout(function () {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Detección de inactividad',
                        text: '¿Sigues ahí?',
                        confirmButtonText: 'Si',
                        cancelButtonText: 'No',
                        showCloseButton: true,
                        showCancelButton: true,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            //  Swal.fire('hola')
                        } else {
                            // Swal.fire('no hola')
                            window.close("/monitoreo", "Central de monitoreo", "location=0,status=0,scrollbars=0,width=700,height=600,top=50%");
                        }
                    })
                }, Time)
            }
        },

        getAlarmasFromHttp() {

            var page = 1;
            var perPage = 10;

            var idUser = 1; //cambiarlo despues por el state
            var typeUser = 1; // cambiarlo luego por el state

            console.log("idUser es", idUser);
            console.log("idUser es", typeUser);

            var data = {
                "typeFunction": "GetAlarmas",
                "idcPrincipal": "1",
                "idcSecundaria": "null",
                "page": page,
                "perPage": perPage,
                "idUserLoged": idUser,
                "typeUserLoged": typeUser
            }

            const xhr = new XMLHttpRequest();

            xhr.open('POST', this.GlobalApi + 'alarmas');
            // prepare form data

            // set headers (arreglalo porque lo envia too weird el form sjaskj)
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

            // send request
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText)
                console.log("xml request aws", resp);
                var json = resp;
                this.itemsAlerts.length = 0;

                this.pages = resp.totalPages;
                console.log("Datos Alarmas son", json.data);
                console.log("Datos Alarmas total", json.data.length);
                this.totalAlarmas = json.data.length;

                for (var index in json.data) {

                    let locall = moment.utc(json.data[index]["timeAlarm"]).local().format('DD/MM/YYYY HH:mm:ss');

                    this.itemsAlerts.push({
                        idAlarmas: json.data[index]["idAlarmas"],
                        deviceid: json.data[index]["NameDevice"],
                        fecha: locall,
                        account: json.data[index]["NameUbica"],
                        event: json.data[index]["nameTypeAlarm"],
                        zona: "000",
                        cantidad: 1,
                        estado_alarma: json.data[index]["nombreStatus"],
                        clasificacion: json.data[index]["id_clasificacion_alarma"]

                    });

                }

            }
        },
        getProgresoAlarmasFromHttp() {

            var page = 1;
            var perPage = 10;

            var idUser = 1; //cambiarlo despues por el state
            var typeUser = 1; // cambiarlo luego por el state

            console.log("idUser es", idUser);
            console.log("idUser es", typeUser);

            var data = {
                "typeFunction": "getAlarmasProgreso",
                "idcPrincipal": "1",
                "idcSecundaria": "null",
                "page": page,
                "perPage": perPage,
                "idUserLoged": idUser,
                "typeUserLoged": typeUser
            }

            const xhr = new XMLHttpRequest();

            xhr.open('POST', this.GlobalApi + 'alarmas');
            // prepare form data

            // set headers (arreglalo porque lo envia too weird el form sjaskj)
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

            // send request
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText)
                console.log("xml request aws", resp);
                var json = resp;
                this.itemsAlertsProgreso.length = 0;

                this.pages = resp.totalPages;
                console.log("Datos Alarmas en progreso son", json.data);
                this.totalAlarmasProgreso = json.data.length;

                for (var index in json.data) {

                    let locall = moment.utc(json.data[index]["timeAlarm"]).local().format('DD/MM/YYYY HH:mm:ss');

                    this.itemsAlertsProgreso.push({
                        idAlarmas: json.data[index]["idAlarmas"],
                        deviceid: json.data[index]["NameDevice"],
                        fecha: locall,
                        account: json.data[index]["NameUbica"],
                        event: json.data[index]["nameTypeAlarm"],
                        zona: "000",
                        cantidad: 1,
                        estado_alarma: json.data[index]["nombreStatus"],
                        clasificacion: json.data[index]["id_clasificacion_alarma"]
                    });

                }
            }
        },
        getEventosFromHttp() {

            var page = 1;
            var perPage = 10;

            var idUser = 1; //cambiarlo despues por el state
            var typeUser = 1; // cambiarlo luego por el state

            // console.log("idUser es",idUser);
            // console.log("idUser es",typeUser);

            var data = {
                "typeFunction": "GetEventos",
                "idcPrincipal": "1",
                "idcSecundaria": "null",
                "page": page,
                "perPage": perPage,
                "idUserLoged": idUser,
                "typeUserLoged": typeUser
            }

            const xhr = new XMLHttpRequest();

            xhr.open('POST', this.GlobalApi + 'eventos');
            // prepare form data

            // set headers (arreglalo porque lo envia too weird el form sjaskj)
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

            // send request
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText)
                console.log("xml request aws", resp);
                var json = resp;
                this.itemsEvents.length = 0;

                this.pages = resp.totalPages;
                console.log("Datos Eventos son", json.data);
                this.totalEventos = json.data.length;

                for (var index in json.data) {

                    let locall = moment.utc(json.data[index]["hora"]).local().format('DD/MM/YYYY HH:mm:ss');

                    this.itemsEvents.push({
                        idEventos: json.data[index]["ideventDevice"],
                        deviceid: json.data[index]["NameDevice"],
                        fecha: locall,
                        account: json.data[index]["NameUbica"],
                        event: json.data[index]["nameTypeAlarm"],
                        zona: "000",
                        cantidad: 1,
                        estado_alarma: json.data[index]["nombreStatus"]
                    });

                }
            }
        },

        getDataFromSocket() {
            console.log("Obteniendo Datos");
            this.WebSocketTest();
        },

        WebSocketTest() {
            if ("WebSocket" in window) {
                // alert("WebSocket is supported by your Browser!");
                var data = "";
                // Let us open a web socket
                /*var ws = new WebSocket(
                  "wss://2uxmgq5r4j.execute-api.us-east-1.amazonaws.com/Dev"
                );*/

                //conexion al socket el cual genera un idConexion
                var ws = new WebSocket(
                    "wss://2uxmgq5r4j.execute-api.us-east-1.amazonaws.com/Dev"
                );

                console.log("IdUser es ", this.idUser);
                var idUsuario = this.idUser;

                ws.onopen = function () {
                    /*var msg = {
                      action: "getData",
                    };*/

                    //se suscribe al topic tablaMonitor
                    var msg = {
                        "action": "setNotifications",
                        "ActiveNotifications": 1,
                        "userID": idUsuario,
                        "topic": "/tablaMonitor"
                    }
                    // Web Socket is connected, send data using send()
                    ws.send(JSON.stringify(msg));
                    console.log("Enviamdo Mensaje...");
                };

                ws.onmessage = (evt) => {
                    var received_msg = evt.data;
                    console.log("Mensaje Recibido...");
                    //console.log(received_msg);
                    data = received_msg;
                    var json = JSON.parse(data);
                    console.log(json);

                    var result = json.Result;
                    var idconexion = json.idConexion

                    if (result != undefined && result != "undefined") {
                        if (result == "Registrado Correctamente") {
                            this.flagRegistro = 1;
                            console.log("Bandera", this.flagRegistro);
                            this.idConexion = idconexion;
                            localStorage.setItem('IniciarSocket', '1')
                        }
                    }

                    let typeNotification = json["typeNotification"];

                    if (typeNotification != undefined && typeNotification != "undefined") {
                        switch (typeNotification) {
                            case 'Alarma':
                                // this.getAlarmasFromHttp();
                                // console.log('CaseAlarma',json["idDato"]);
                                audio2.play();
                                audio2.loop = true;
                                this.openToastAlarmas(data)
                                this.handleAlert(data);

                                break;

                            case 'Event':
                                //? 1 = apertura,
                                //? 2 = cierre,
                                //? 4 = test,
                                //? 8 = tamper reposicion,
                                //? 10=Fasia reposición,
                                //? 12 = restablecimiento de zona,
                                //? 14 = restablecimiento de ac
                                if (json["codeAlarm"] == "1" || json["codeAlarm"] == "2" || json["codeAlarm"] == "4" ||
                                    json["codeAlarm"] == "8" || json["codeAlarm"] == "10" || json["codeAlarm"] == "12" || json["codeAlarm"] == "14") {

                                    audio.play();
                                    this.handleAlertEventos(data)
                                    this.openToastEvent(json);
                                    console.log(json);
                                }
                                break;

                            case 'Alerta':

                                console.log('CaseAlerta', data);
                                audio2.play();
                                audio2.loop = true;
                                this.openToastAlertas(data)
                                this.handleAlert(data);

                                break;
                        }

                    }

                };

                this.setAlive(ws);

                ws.onclose = function () {
                    // websocket is closed.
                    // alert("Connection is closed...");
                    localStorage.setItem('IniciarSocket', '0')
                    this.flagRegistro = 0;
                    console.log("Bandera", this.flagRegistro);
                };
            } else {
                // The browser doesn't support WebSocket
                alert("WebSocket NOT supported by your Browser!");
            }
        },

        setAlive(socketConn) {

            setInterval(() => {

                this.fechaConexion = moment().locale('es-us').format('LLL');

                localStorage.setItem('localsocket', this.fechaConexion)

                console.log('[' + this.fechaConexion + '] ')
                let msgtst = {
                    "action": "testAlive",
                    "id_conexion": this.idConexion,
                }
                socketConn.send(JSON.stringify(msgtst));
            }, 60000);
            // 120000 = 2 minutos;
            // 60000 = 1 minuto;
            // 300000 = 5 minutos;

        },
        EstadoServidor(flagRegistro) {
            switch (flagRegistro) {
                case 0:
                    return '#ff0000';
                case 1:
                    return '#1abb97';
                case null:
                    return 'ff0000';
                case undefined:
                    return 'ff0000';

            }

        },
        ChangeColor(color) {
            switch (color) {
                case 2:
                    return '#ffca2c';
                    //alerta
                case 1:
                    // return '#e72929';
                    return '#c71527';
                    //alarma
                case 3:
                    this.asd = 3;
                    return '#15aac7';
                    //recien llegados
            }
        },

        ChangeColorS(color) {
            switch (color) {
                case 2:
                    return '#000';
                    //alerta
                case 1:
                    // return '#e72929';
                    return '#000';
                    //alarma
            }
        },

        clickprueba() {
            this.$toast.open({
                message: 'Alarmaa de desprendimiento del sensor 414150',
                type: "error",
                duration: 10000,
                dismissible: true,
                position: "top-right",
            });

            audio2.play();
            audio2.loop = true;

            var tricono = document.getElementById("icono-" + 9012);
            tricono.innerHTML = "<i class='fas fa-circle'></i>"
            tricono.style.color = "#00adf6"
            var tricono = document.getElementById("icono-" + 9010);
            tricono.innerHTML = "<i class='fas fa-circle'></i>"
            tricono.style.color = "#00adf6"

            var trDevice = document.getElementById("device-" + 9012);
            trDevice.style.backgroundColor = '#15aac7';
            // trDevice.style.border = 'solid 1.5px #ff6384'
            trDevice.style.transition = 'all .9s ease-in-out';

            var trDevice = document.getElementById("device-" + 9010);
            trDevice.style.backgroundColor = '#15aac7';
            // trDevice.style.border = 'solid 1.5px #ff9f40'
            trDevice.style.transition = 'all .9s ease-in-out';

            setTimeout(() => {
                var trDevice = document.getElementById("device-" + 9012);
                trDevice.style.backgroundColor = '#c71527';

                var trDevice = document.getElementById("device-" + 9010);
                trDevice.style.backgroundColor = '#ffca2c';
            }, 300000)

            this.asd = 3
            //   background-color: #bd4b3c;
            // border: solid 1.5px #ff9f40;
            //    var trDevice=document.getElementById("brandf");
            // trDevice.style.backgroundColor = '#20543c';
            // trDevice.style.transition = 'all .9s ease-in-out';
            // setTimeout(() =>{
            //    var trDevice=document.getElementById("device-" + 88);
            // trDevice.style.background = '#20543c';
            // trDevice.style.transition = 'all .9s ease-in-out';
            setTimeout(() => {
                //  trDevice.style.backgroundColor = '#157347';
                trDevice.style.border = ''

            }, 1000);

            // }, 100000);

            // var trDevice=document.getElementById("device-"+idDevice);
            // trDevice.style.backgroundColor = '#dc354698';
            // trDevice.style.transition = 'all .9s ease-in-out';

            // setTimeout(() =>{
            //   trDevice.style.backgroundColor = '#10141d';
            // }, 20000);

        },
        handleAlert(params) {
            console.log("WebSocket Alert: ", JSON.parse(params));
            var json = JSON.parse(params);

            console.log('valores para el mensaje mailer',json);
            console.log(json["mensaje"]);
            var date = json["date"];
            var stillUtc = moment.utc(date).toDate();
            var local = moment(stillUtc).local().format('DD/MM/YYYY HH:mm:ss');
            //  var clasificacion=json["id_clasificacion_alarma"]
            var clasificacion = json["typeNotification"]
            var idAlarmas = json["idInserted"];
            console.log('pruebaid', idAlarmas);
            console.log('clasificacion', clasificacion);
            // clasificacion:json.data[index]["id_clasificacion_alarma"]

            if (clasificacion == "Alarma") {
                var idclasificacion = 1
                // var trDevice=document.getElementById("device-" + idAlarmas);
                //                  trDevice.style.backgroundColor = '#e7c129'
            } else if (clasificacion == "Alerta") {
                var idclasificacion = 2
            }
            // var idclasificacion=0;
            // console.log('handlerPRUEBA');
            let jSON = {
                deviceid: json["NameDevice"],
                fecha: local,
                account: json["ubicacion"],
                event: json["mensaje"],
                zona: "000",
                cantidad: "1",
                idAlarmas: json["idInserted"],
                estado_alarma: json["status"],
                clasificacion: idclasificacion
            };
            let mensaje = {
                deviceid: json["NameDevice"],
                fecha: local,
                account: json["ubicacion"],
                event: json["mensaje"],
                typenotifi: json["typeNotification"],
            };

            //this.itemsAlerts.push();
            this.itemsAlerts.splice(0, 0, jSON);
            console.log('handAlert', this.itemsAlerts);

            axios.post(messageApi, mensaje).then(data => {
                console.log('AXIOS DATA',data);
            });
            //  this.totalAlarmas = this.totalAlarmas + 1;; 

            if (clasificacion == "Alarma") {

                setTimeout(() => {
                    var tricono = document.getElementById("icono-" + idAlarmas);
                    tricono.innerHTML = "<i class='fas fa-circle'></i>"
                    tricono.style.color = "#00adf6"

                    var trDevice = document.getElementById("device-" + idAlarmas);
                    trDevice.style.backgroundColor = '#15aac7';
                    // trDevice.style.border = 'solid 1.5px #ff6384'
                    trDevice.style.transition = 'all .9s ease-in-out';

                    setTimeout(() => {
                        trDevice.style.border = ''
                    }, 20000)

                }, 1000);
            } else if (clasificacion == "Alerta") {

                setTimeout(() => {

                    var tricono = document.getElementById("icono-" + idAlarmas);
                    tricono.innerHTML = "<i class='fas fa-circle'></i>"
                    tricono.style.color = "#00adf6"

                    var trDevice = document.getElementById("device-" + idAlarmas);
                    trDevice.style.backgroundColor = '#15aac7';
                    // trDevice.style.border = 'solid 1.5px #ff9f40'
                    trDevice.style.transition = 'all .9s ease-in-out';

                    setTimeout(() => {
                        trDevice.style.border = ''
                    }, 20000)
                }, 1000);
            }

        },

        handleAlertEventos(params) {
            console.log("WebSocket Eventos: ", JSON.parse(params));
            var json = JSON.parse(params);

            console.log(json["mensaje"]);
            var date = json["date"];
            var stillUtc = moment.utc(date).toDate();
            var local = moment(stillUtc).local().format('DD/MM/YYYY HH:mm:ss');
            var idEventos = json["idInserted"];
            console.log('pruebaid', idEventos);

            let jSON = {
                deviceid: json["NameDevice"],
                fecha: local,
                account: json["ubicacion"],
                event: json["mensaje"],
                zona: "000",
                cantidad: "1",
                idEventos: json["idInserted"],
            };

            //this.itemsAlerts.push();
            this.itemsEvents.splice(0, 0, jSON);
            console.log(this.itemsEvents);
            //  this.totalEventos = this.totalEventos + 1;

            setTimeout(() => {
                var trDevice = document.getElementById("device-" + idEventos);
                trDevice.style.backgroundColor = '#0e6036';
                // #0e6036
                // #0c9f54
                trDevice.style.transition = 'all .9s ease-in-out';
                setTimeout(() => {
                    trDevice.style.backgroundColor = '#0c9f54';
                }, 20000);

            }, 1000);

        },
        openToastAlarmas(params) {

            var json = JSON.parse(params);
            var mensaje = json["mensaje"];
            var device = json["NameDevice"];
            var idInserted = json["idInserted"];
            var idDevice = json["idDevice"];
            var tempAmb = json["tempAmb"];
            console.log("idAlarma", idInserted);

            this.$toast.open({
                message: 'Alarma de ' + mensaje + ' del sensor: ' + device,
                type: "error",
                duration: 10000,
                dismissible: true,
                position: "top-right",
            });

            console.log('Notificacion_alarma', json);

        },
        openToastEvent(params) {

            this.$toast.open({
                message: 'Evento recibido de ' + params["mensaje"] + ' del sensor: ' + params["NameDevice"],
                type: "success",
                duration: 10000,
                dismissible: true,
                position: "top-right",
            });
            console.log(params);

        },
        openToastAlertas(params) {

            var json = JSON.parse(params);
            var mensaje = json["mensaje"];
            var device = json["NameDevice"];
            var idInserted = json["idInserted"];

            this.$toast.open({
                message: 'Alerta de ' + mensaje + ' del sensor: ' + device,
                type: "warning",
                duration: 10000,
                dismissible: true,
                position: "top-right",
            });
            console.log('Notificacion_alerta', json);

            //  var trDevice=document.getElementById("device-" + idInserted);
            // trDevice.style.backgroundColor = '#e7c129';
            // trDevice.style.transition = 'all .9s ease-in-out';

        },

    }

}
</script>

<style scoped>
.home {
    position: relative;
    left: 10px;
    width: calc(100% - 10px);
    transition: all 0.5s ease;
    padding: 8px 40px;
    padding-top: 2rem
}

.home .text {
    font-size: 30px;
    font-weight: 500;
}

.table-tamaño {
    font-size: 9.7pt;
    /* font-weight: 300; */
    width: 95%;
    margin-left: 2.5%;
}

.card-body {
    padding: 1rem 0;
}

.card-title {
    text-align: center;
}

.section-alertas {
    margin-top: 2rem;
}

.section-eventos {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.card-header {
    background-color: #414548 !important;
    color: #FFF;
}

.card {
    border-color: #414548;
    border-radius: 6px;
}

.scrollable {
    height: 320px;
    overflow: scroll;
}

.nav-item span {
    color: #FFF;
}

.navbar-brand {
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;

}

.icon-color {
    color: #ffffff;
    animation: mymove 0.3s infinite;
}

@keyframes mymove {
    from {
        color: red;
    }

    to {
        color: #ffffff;
    }
}

.span-brand {
    color: #1abb97;
}

.nav-item {
    margin-right: 1rem;
}

.fa-satellite-dish {
    /* color: #1abb97; */
    font-size: 1.2rem;
}

.nav-item .span-señal {
    color: #1abb97;
}

.tooltipp {
    position: relative;
    display: inline-block;
    /* border-bottom: 1px dotted black; */
}

.tooltipp .tooltiptext {
    visibility: hidden;
    width: 300px;
    background-color: #27293d;
    color: #1abb97;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    /* font-weight: bold; */
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
}

.tooltipp .tooltiptext span {
    color: #fff;
    font-weight: bold;
}

.tooltipp:hover .tooltiptext {
    visibility: visible;
}

/* tr:hover{
  background-color: #817d6e73 !important;
} */
.table-hover>tbody>tr:hover>* {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: #fff;
}

.card2 {
    width: 38.5rem;
    height: 382px;
}

.card-evento {
    height: 382px;
}

.navbar {
    background-color: #1b1b27;
}

/* .card-body{
  height: 320px;
} */
.text-dark {
    /* --bs-text-opacity: 1; */
    color: #000 !important;
    font-weight: 500;
}

.text-light {
    /* --bs-text-opacity: 1; */
    font-weight: 500;
}

@media only screen and (min-width: 1300px) {
    .card2 {
        width: 38rem;

    }
}

@media only screen and (min-width: 1800px) {
    .home {
        position: relative;
        left: 10px;
        width: calc(100% - 10px);
        transition: all 0.5s ease;
        padding: 8px 40px;
        padding-top: 2rem
    }

    .card2 {
        width: 55.7rem;
        height: 443px;
    }

    .card-evento {
        height: 443px;
    }

    .scrollable {
        height: 375px;
        overflow: scroll;
    }

    .table-tamaño {
        font-size: 12pt;
        /* font-weight: 300; */
        width: 95%;
        margin-left: 2.5%;
    }

    .navbar-brand {
        font-size: 1.7rem;

    }

    .nav-item {
        font-size: 1.3rem;
    }

    .fa-satellite-dish {
        /* color: #1abb97; */
        font-size: 1.6rem;
    }

    .card-header {
        font-size: 1.2rem;
    }
}
</style>

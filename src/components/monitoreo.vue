<template>
<div class="animated fadeIn">

    <!-- //TODO *************** NAVBAR ************** -->
    <nav class="navbar sticky-top navbar-expand-lg ">
        <div class="container-fluid">
            <span class="navbar-brand">Central de <span class="span-brand" id="brandf">monitoreo</span> <span style="color:#FFFFFFCC">(Plataforma Demo <span class="version">Versión Beta_1.1.0</span>)</span></span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
    <!-- //TODO *************** NAVBAR FIN ************** -->

    <!--//* ********************** ALARMAS********************************************** -->
  
    <div class="container-fluid" style="margin-top:2rem">
        <div class="row">
            <div class="col-6">
                <div class="card card2">
                    <div class="card-header">
                        <span class="position-relative" style="padding-right:5px;">
                            Alarmas Pendientes
                            <span class="position-absolute top-0 start-100 translate-middl badge rounded-pill bg-danger">{{totalAlarmas}}</span>
                        </span>
                                                  <div style="float:right;margin-left:5px">

                                        <select  class="form-select form-select-sm" aria-label="Default select example" id="numRowsEvents" @change="getAlarmasFromHttp(1)">
                                             <option selected value="15">15</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="40">40</option>
                                            <option value="50">50</option>
                                        </select>
                                    </div>
                    </div>
                    <div class="card-body">
                        
                        <div class="scrollable">
                            
                            <table cellspacing="1" cellpadding="1" class="table  table-sm table-hover  table-borderless table-tamaño">
                                <thead style="background:#232527eb; color:#fff">
                                    <!-- <thead style="background:#41464b; color:#fff"> -->
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Cuenta</th>
                                        <th scope="col">Nombre</th>
                                        <!-- <th scope="col">Dispositivo</th> -->
                                        <th scope="col">Evento</th>
                                        <th scope="col">Zona</th>
                                        <th scope="col">NombreZona</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Estatus</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in itemsAlerts" :key="item.idAlarmas">
                                    <!-- <tr class="color-alarmas" v-bind:style="{backgroundColor:ChangeColor(item.clasificacion)}" v-bind:class="item.clasificacion==1? 'text-light':'text-dark'" :id="'device-'+ item.idAlarmas" @click="popup(item.idAlarmas, item.account, item.deviceid, item.event, item.fecha, item.nombreAsignado, item.clasificacion,item.zona,item.nombre_zona)"> -->
                                    <tr class="color-alarmas" v-bind:style="{backgroundColor:ChangeColor(item.clasificacion)}" v-bind:class="item.clasificacion==1? 'text-light':'text-dark'" :id="'device-'+ item.idAlarmas" @click="popup(item.idAlarmas, item.account, item.deviceid, item.event, item.fecha, item.nombreAsignado, item.clasificacion,item.zona,item.nombre_zona)">
                                        <th scope="row">{{item.idAlarmas}}</th>
                                        <td>{{item.account}}</td>
                                        <td>{{item.nombreAsignado}}</td>
                                        <!-- <td>{{item.deviceid}}</td> -->
                                        <td>{{item.event}}</td>
                                        <td>{{item.zona}}</td>
                                        <td>{{item.nombre_zona}}</td>
                                        <!-- <td>1</td> -->
                                        <td>{{item.fecha}}</td>
                                        <td>{{item.estado_alarma}} <span :id="'icono-'+ item.idAlarmas"></span></td>
                                    </tr>
                                </tbody>
                            </table>
                             <div v-if="spinner == true" style="margin-top:1rem" class="d-flex justify-content-center text-primary">
                                        <div  class="spinner-border" role="status">
                                            <span  class="visually-hidden">Loading...</span>
                                        </div>
                                        </div>
                        </div>
                             <nav aria-label="Page navigation example">
                        <ul class="pagination pagination-sm justify-content-center">
                            <li class="page-item"><a class="page-link btn-next-back text-primary" v-on:click="changePageEvent(pageEvent-1)" type="button">Atras</a></li>
                            <li class="page-item"><a type="button" v-if="pageEvent>1" v-on:click="changePageEvent(1)" class="page-link">1</a></li>
                            <li class="page-item active"><a type="button" class="page-link">{{pageEvent}}</a></li>
                            <li class="page-item" v-for="(itemLi, index) in newPagesLiEvents" v-bind:key="index"><a type="button" v-if="itemLi.newPage!=pagesEvents" v-on:click="changePageEvent(itemLi.newPage)" class="page-link text-primary">{{itemLi.newPage}} </a></li>
                            <li class="page-item"><a type="button" class="page-link text-primary" v-if="pageEvent!=pagesEvents" v-on:click="changePageEvent(pagesEvents)"><i style="color:#1abb97" class="fas fa-angle-double-right"></i></a></li>
                            <li class="page-item"><a class="page-link btn-next-back text-primary" v-on:click="changePageEvent(pageEvent+1)" type="button">Siguiente</a></li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card card2">
                    <div class="card-header">
                        <span class="position-relative" style="padding-right:5px;">
                            Alarmas en progreso
                            <span class="position-absolute top-0 start-100 translate-middl badge rounded-pill bg-danger">{{totalAlarmasProgreso}}</span>
                            
                            <div style="float:right;margin-left:5px">
                             <select  class="form-select form-select-sm" aria-label="Default select example" id="numRowsEvents" @change="getAlarmasFromHttp(1)">
                                            <option selected value="15">15</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="40">40</option>
                                            <option value="50">50</option>
                                        </select>
                                    </div>
                        </span>
                    </div>
                    <div class="card-body">
                        <div class="scrollable">
                            <table cellspacing="1" cellpadding="1" class="table  table-sm table-hover  table-borderless table-tamaño">
                                <thead style="background:#232527eb; color:#fff">
                                    <!-- <thead style="background:#41464b; color:#fff"> -->
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Cuenta</th>
                                        <th scope="col">Nombre</th>
                                        <!-- <th scope="col">Dispositivo</th> -->
                                        <th scope="col">Evento</th>
                                        <th scope="col">Zona</th>
                                        <th scope="col">NombreZona</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Estatus</th>
                                    </tr>
                                </thead>
                                <!-- style="background:#f39c12;" -->
                                <tbody v-for="item in itemsAlertsProgreso" :key="item.idAlarmas">
                                    <tr :id="'device2-'+ item.idAlarmas" v-bind:style="{backgroundColor:ChangeColor(item.clasificacion)}" v-bind:class="item.clasificacion==1? 'text-light':'text-dark'" @click="popup2(item.idAlarmas, item.account, item.deviceid, item.event, item.fecha, item.estado_alarma, item.clasificacion)">
                                        <th scope="row">{{item.idAlarmas}}</th>
                                        <td>{{item.account}}</td>
                                        <td>{{item.nombreAsignado}}</td>
                                        <!-- <td>{{item.deviceid}}</td> -->
                                        <td>{{item.event}}</td>
                                        <!-- <td>1</td> -->
                                        <td>{{item.zona}}</td>
                                        <td>{{item.nombre_zona}}</td>
                                        <td>{{item.fecha}}</td>
                                        <td>{{item.estado_alarma}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                              <nav aria-label="Page navigation example">
                        <ul class="pagination pagination-sm justify-content-center">
                            <li class="page-item"><a class="page-link btn-next-back text-primary" v-on:click="changePageEvent(pageEvent-1)" type="button">Atras</a></li>
                            <li class="page-item"><a type="button" v-if="pageEvent>1" v-on:click="changePageEvent(1)" class="page-link">1</a></li>
                            <li class="page-item active"><a type="button" class="page-link">{{pageEvent}}</a></li>
                            <li class="page-item" v-for="(itemLi, index) in newPagesLiEvents" v-bind:key="index"><a type="button" v-if="itemLi.newPage!=pagesEvents" v-on:click="changePageEvent(itemLi.newPage)" class="page-link text-primary">{{itemLi.newPage}} </a></li>
                            <li class="page-item"><a type="button" class="page-link text-primary" v-if="pageEvent!=pagesEvents" v-on:click="changePageEvent(pagesEvents)"><i style="color:#1abb97" class="fas fa-angle-double-right"></i></a></li>
                            <li class="page-item"><a class="page-link btn-next-back text-primary" v-on:click="changePageEvent(pageEvent+1)" type="button">Siguiente</a></li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- *********************** EVENTOS ****************************** -->
    <section class="home">
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
                            <thead style="background:#232527eb; color:#fff" class="">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Cuenta</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Dispositivo</th>
                                    <th scope="col">Evento</th>
                                    <th scope="col">Zona</th>
                                    <th scope="col">NombreZona</th>
                                    <th scope="col">Fecha</th>
                                    <!-- <th scope="col">Estado de alarma</th> -->
                                </tr>
                            </thead>
                            <!-- <tbody style="background:#0c9f54;" v-for="item in itemsEvents" :key="item.idEventos"> -->
                            <tbody style="background:#115f37;" v-for="item in itemsEvents" :key="item.idEventos">
                                <tr :id="'device-'+ item.idEventos">
                                    <th style="color:#fff" scope="row">{{item.idEventos}}</th>
                                    <td style="color:#fff;">{{item.account}}</td>
                                    <td style="color:#fff">{{item.nombreAsignado}}</td>
                                    <td style="color:#fff">{{item.deviceid}}</td>
                                    <td style="color:#fff">{{item.event}}</td>
                                    <!-- <td style="color:#fff">1</td> -->
                                    <td style="color:#fff">{{item.zona}}</td>
                                    <td style="color:#fff">{{item.nombre_zona}}</td>
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
var audioEvento = new Audio(require('@/assets/AudioEvento.mp3'))
var audioAlarma = new Audio(require('@/assets/AudioAlarma.mp3'))
var audioAlerta = new Audio(require('@/assets/AudioAlerta.mp3'))
let messageApi = 'http://localhost:3000/formulario/';
let messageWs = 'http://localhost:3000/sendwhatsapp';
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
        this.SocketOnInit();
        this.getAlarmasFromHttp(1);
        this.getEventosFromHttp();
        this.getProgresoAlarmasFromHttp();
        // this.getDataFromSocket();
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
            id_usuario: localStorage.getItem('id_usuario'),
            id_tipoUsuario: localStorage.getItem('id_tipousuario'),
            id_cPrincipal: localStorage.getItem('id_cPrincipal'),
            idConexion: '',
            clasificacion: '',
            totalAlarmas: 0,
            totalAlarmasProgreso: 0,
            totalEventos: 0,
            pendientes: '',
            asd: '',
            GlobalApi: this.globalVar,

            perPage: '',
            newPagesLiEvents: [], //array que forma la paginacion
            page: 1, //determinar cual es la siguiente página o movimiento
            pageEvent: 1, //página actual
            pages: 0,
            pagesEvents: 0,
            adjacents: 2, //determinar cuantos cuadritos en la paginacion
            newPagesLi: [],
            newPagesLiEvents: [],
            totalPages: 0,
            totalPagesEvent: 0,
            perPage: 0,
            spinner:false
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
        popup(id, c, d, e, f, es, cla,z,nz) {
            //       var trDevice=document.getElementById("device-" + id);
            // trDevice.style.backgroundColor = '#c71527';
            // trDevice.style.transition = 'all .9s ease-in-out';

            var tricono = document.getElementById("icono-" + id);
            tricono.innerHTML = ""
            tricono.style.color = "#fff"
            window.open("/detalles/" + id, id, "location=0,status=0,scrollbars=0,width=480,height=900,top=50%");

            audioAlarma.pause();
            let jSON = {
                deviceid: d,
                fecha: f,
                account: c,
                event: e,
                zona: "000",
                cantidad: "1",
                idAlarmas: id,
                estado_alarma: 'progreso',
                nombreAsignado: es,
                zona: z,
                nombre_zona: nz,
                clasificacion: cla
            };

            console.log('monitoreo', jSON);
            // this.itemsAlertsProgreso.splice(0, 0, jSON);

            // var index = this.itemsAlerts.map(x => {
            //     return x.idAlarmas;
            // }).indexOf(id)

            // this.itemsAlerts.splice(index, 1)
            //   console.log(this.itemsAlerts);

            if (cla == 1) {
                setTimeout(() => {
                    // var tricono = document.getElementById("icono-" + idAlarmas);
                    // tricono.innerHTML="<i class='fas fa-circle'></i>"
                    // tricono.style.color = "#dc3545"

                    var trDevice = document.getElementById("device2-" + id);
                    // trDevice.style.backgroundColor = '#0d6b7e';
                    trDevice.style.backgroundColor = '#198754';
                    // trDevice.style.border = 'solid 1.5px #ff6384'
                    trDevice.style.transition = 'all .9s ease-in-out';

                    setTimeout(() => {
                        trDevice.style.border = ''
                        trDevice.style.backgroundColor = '#c71527';
                    }, 10000)

                }, 1000);
            } else {
                setTimeout(() => {
                    var trDevice = document.getElementById("device2-" + id);
                    // trDevice.style.backgroundColor = '#0d6b7e';
                    trDevice.style.backgroundColor = '#198754';
                    trDevice.style.color = '#198754';
                    trDevice.style.transition = 'all .9s ease-in-out';

                    setTimeout(() => {
                        trDevice.style.border = ''
                        trDevice.style.backgroundColor = '#ffca2c';
                    }, 10000)

                }, 1000);
            }

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
         changePageEvent(page) {

            this.pageEvent = (page <= 0 || page > this.pagesEvents) ? this.pageEvent : page;

            console.log("Pagina nueva", this.pageEvent);
            if (page > 0) {
                this.newPagesLiEvents.length = 0;
                let limitLi = this.pageEvent + this.adjacents;

                let pmax = (this.pageEvent < (this.pagesEvents - this.adjacents)) ? (this.pageEvent + this.adjacents) : this.pagesEvents;

                for (var i = this.pageEvent; i <= pmax; i++) {
                    let newLi = page++;
                    if (newLi != this.pageEvent) {
                        console.log(newLi);
                        this.newPagesLiEvents.push({
                            "newPage": newLi
                        })
                    }

                }
                this.getAlarmasFromHttp(this.pageEvent);
            }

        },
        getAlarmasFromHttp(p) {

            // var page = 1;
            // var perPage = 200;

            var idUser = this.id_usuario; //cambiarlo despues por el state
            var typeUser = this.id_tipoUsuario; // cambiarlo luego por el state

            console.log("idUser es", idUser);
            console.log("idUser es", typeUser);
this.itemsAlerts.length = 0;
            let perPageSelected = document.getElementById("numRowsEvents");
            console.log("el valor es ", perPageSelected.value);
            
            this.perPage = perPageSelected.value;

            var data = {
                "typeFunction": "GetAlarmas",
                "idcPrincipal": this.id_cPrincipal,
                "idcSecundaria": "null",
                "page": p,
                "perPage": this.perPage,
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
            this.spinner= true;
            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText)
                console.log("xml request aws", resp);
                var json = resp;
                this.spinner= false;
                // this.itemsAlerts.length = 0;

                this.pages = resp.totalPages;
                console.log("Datos Alarmas son", json.data);
                console.log("Datos Alarmas total", json.data.length);
                this.totalAlarmas = json.data.length;
                for (var index in json.data) {

                    /*CONDICIÓN PARA CAMBIAR EL NOMBRE DEL EVENTO SI ES "ALARMA DE TEMPERATURA"
                     POR EL NOMBRE DE LA REGLA CREADA POR EL USUARIO*/
                    var nombreAlarma = json.data[index]["nameTypeAlarm"];
                     if (json.data[index]["id_alarma_virtual"] > 0) {
                       nombreAlarma = json.data[index]["NombreAlarmaVirtual"]
                        }

                    let locall = moment.utc(json.data[index]["timeAlarm"]).local().format('DD/MM/YYYY HH:mm:ss');

                   

                    this.itemsAlerts.push({
                        idAlarmas: json.data[index]["idAlarmas"],
                        deviceid: json.data[index]["NameDevice"],
                        fecha: locall,
                        account: json.data[index]["NameUbica"],
                        
                        // event: json.data[index]["nameTypeAlarm"],
                        event: nombreAlarma,
                        zona: "000",
                        cantidad: 1,
                        estado_alarma: json.data[index]["nombreStatus"],
                        clasificacion: json.data[index]["id_clasificacion_alarma"],
                        nombreAsignado: json.data[index]["nombre_asignado"],
                        zona: json.data[index]["zona"],
                        nombre_zona: json.data[index]["nombre_zona"]
                        // numero_zona: json.data[index]["numero_zona"]

                    });

                        // TODO PAGINATION CODIGO PRUEBA
                    this.pagesEvents = resp.totalPages;
                    console.log(this.pagesEvents);

                    this.newPagesLiEvents.length = 0;
                    let page = this.pageEvent;

                    let limitLi = this.pageEvent + this.adjacents;

                    let pmax = (this.pageEvent < (this.pagesEvents - this.adjacents)) ? (this.pageEvent + this.adjacents) : this.pagesEvents;

                    for (var i = this.pageEvent; i <= pmax; i++) {
                        let newLi = page++;
                        if (newLi != this.pageEvent) {
                            this.newPagesLiEvents.push({
                                "newPage": newLi
                            })
                        }

                    }

                    // TODO **************

                }

            }
        },
        getProgresoAlarmasFromHttp() {

            var page = 1;
            var perPage = 200;

            var idUser = this.id_usuario; //cambiarlo despues por el state
            var typeUser = this.id_tipoUsuario; // cambiarlo luego por el state

            console.log("idUser es", idUser);
            console.log("idUser es", typeUser);

            var data = {
                "typeFunction": "getAlarmasProgreso",
                "idcPrincipal": this.id_cPrincipal,
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

                       /*CONDICIÓN PARA CAMBIAR EL NOMBRE DEL EVENTO SI ES "ALARMA DE TEMPERATURA"
                     POR EL NOMBRE DE LA REGLA CREADA POR EL USUARIO*/
                    // var nombreAlarma = json.data[index]["nameTypeAlarm"];
                    //  if (json.data[index]["id_alarma_virtual"] > 0) {
                    //    nombreAlarma = json.data[index]["NombreAlarmaVirtual"]
                    //     }
                    let locall = moment.utc(json.data[index]["timeAlarm"]).local().format('DD/MM/YYYY HH:mm:ss');

                    this.itemsAlertsProgreso.push({
                        idAlarmas: json.data[index]["idAlarmas"],
                        deviceid: json.data[index]["NameDevice"],
                        fecha: locall,
                        account: json.data[index]["NameUbica"],
                        // event: nombreAlarma,
                        event: json.data[index]["nameTypeAlarm"],
                        zona: "000",
                        cantidad: 1,
                        estado_alarma: json.data[index]["nombreStatus"],
                        clasificacion: json.data[index]["id_clasificacion_alarma"],
                        nombreAsignado: json.data[index]["nombre_asignado"],
                        // numero_zona: json.data[index]["numero_zona"],
                        zona: json.data[index]["zona"],
                        nombre_zona: json.data[index]["nombre_zona"]
                    });

                }
            }
        },
        getEventosFromHttp() {

            var page = 1;
            var perPage = 200;

            var idUser = this.id_usuario; //cambiarlo despues por el state
            var typeUser = this.id_tipoUsuario; // cambiarlo luego por el state

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
                        estado_alarma: json.data[index]["nombreStatus"],
                        nombreAsignado: json.data[index]["nombre_asignado"],
                        zona: json.data[index]["zona"],
                        nombre_zona: json.data[index]["nombre_zona"]
                        // numero_zona: json.data[index]["numero_zona"]
                    });

                }
            }
        },

        getDataFromSocket() {
            console.log("Obteniendo Datos");
            this.WebSocketTest();
        },

        SocketOnInit() {
            if ("WebSocket" in window) {
                console.log("Conectando socket...");
                // var data = "";
                var ws = new WebSocket(
                    "wss://2uxmgq5r4j.execute-api.us-east-1.amazonaws.com/Dev"
                );

                // console.log("IdUser es ", this.idUser);
                // var idUsuario = this.idUser;
                // 1 admin
                // 2 centralista
                // 6 clientes
                ws.onopen = event => {

                    var msg = {
                        "action": "setNotifications",
                        "ActiveNotifications": 1,
                        "userID": this.id_usuario,
                        // "userID": this.id_usuario,
                        "topic": "central/tablaMonitor"
                    }
                    ws.send(JSON.stringify(msg));
                    console.log(msg);
                };
                this.WebSocketTest(ws);
            } else {
                // The browser doesn't support WebSocket
                alert("WebSocket NOT supported by your Browser!");
            }

        },
        WebSocketTest(ws) {
            var data = "";

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
                            audioAlarma.play();
                            audioAlarma.loop = true;
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
                            this.handleAlertEventos(data)
                            console.log(json);
                            if (json["codeAlarm"] == "1" || json["codeAlarm"] == "2" || json["codeAlarm"] == "4" ||
                                json["codeAlarm"] == "8" || json["codeAlarm"] == "10" || json["codeAlarm"] == "12" || json["codeAlarm"] == "14") {

                                audioEvento.play();
                                // this.handleAlertEventos(data)
                                this.openToastEvent(json);
                                console.log(json);
                            }
                            break;

                        case 'Alerta':

                            console.log('CaseAlerta', data);
                            audioAlerta.play();
                            // audio.loop = true;
                            this.openToastAlertas(data)
                            this.handleAlert(data);

                            break;
                    }

                }

            };

            this.setAlive(ws);

            ws.onclose = event => {
                // websocket is closed.
                // alert("Connection is closed...");
                localStorage.setItem('IniciarSocket', '0')
                this.flagRegistro = 0;
                console.log("Bandera", this.flagRegistro);
                ws.close(1000, "Work complete");
                this.SocketOnInit();
            };

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
            }, 300000);
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

            console.log('valores para el mensaje mailer', json);
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
                nombreAsignado: json["nombre_asignado"],
                zona: json["zona"],
                nombre_zona: json["nombre_zona"],
                clasificacion: idclasificacion

            };
            let mensaje = {
                deviceid: json["NameDevice"],
                fecha: local,
                account: "Sucursal 1",
                // account: json["ubicacion"],
                event: json["mensaje"],
                typenotifi: json["typeNotification"],
            };

            //this.itemsAlerts.push();
            this.itemsAlerts.splice(0, 0, jSON);
            console.log('handAlert', this.itemsAlerts);

            //TODO MENSAJES PARA WASAP Y CORREO
            // axios.post(messageApi, mensaje).then(data => {
            //     console.log('AXIOS messageApi DATA',data);
            // });
            // axios.post(messageWs, mensaje).then(data => {
            //     console.log('AXIOS messageWs DATA',data);
            // });
            //  this.totalAlarmas = this.totalAlarmas + 1;; 

            if (clasificacion == "Alarma") {

                setTimeout(() => {
                    var tricono = document.getElementById("icono-" + idAlarmas);
                    tricono.innerHTML = "<i class='fas fa-circle'></i>"
                    tricono.style.color = "#00adf6"

                    var trDevice = document.getElementById("device-" + idAlarmas);
                    // trDevice.style.backgroundColor = '#15aac7';
                    trDevice.style.backgroundColor = '#ff4d00';
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
                    // trDevice.style.backgroundColor = '#15aac7';
                    trDevice.style.backgroundColor = '#ff4d00';
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
                nombreAsignado: json["nombre_asignado"],
                idEventos: json["idInserted"],
                 zona: json["zona"],
                nombre_zona: json["nombre_zona"],
            };

            //this.itemsAlerts.push();
            this.itemsEvents.splice(0, 0, jSON);
            console.log(this.itemsEvents);
            //  this.totalEventos = this.totalEventos + 1;

            setTimeout(() => {
                var trDevice = document.getElementById("device-" + idEventos);
                trDevice.style.backgroundColor = '#0f3823';
                // trDevice.style.backgroundColor = '#0e6036';
                // #0e6036
                // #0c9f54
                trDevice.style.transition = 'all .9s ease-in-out';
                setTimeout(() => {
                    trDevice.style.backgroundColor = '#115f37';
                    // trDevice.style.backgroundColor = '#0c9f54';
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
            console.log('Notificacion_alertaA', json);

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
    padding: 8px 40px;
    padding-top: 2rem
}

.home .text {
    font-size: 30px;
    font-weight: 500;
}

.table-tamaño {
    /* font-size: 9.6pt; */
    font-size: 9.5pt;
    /* font-weight: 300; */
    /* width: 95%; */
    width: 99%;
    /* margin-left: 2.5%; */
    text-align: center;
}

.card-body {
    padding: 1rem 0 1rem 1rem;
    /* volver a descomentar */
}

.card-title {
    text-align: center;
}

.section-alertas {
    margin-top: 2rem;
}

.section-eventos {
    /* margin-top: 2rem; */
    margin-bottom: 2rem;
}

.card-header {
    background-color: #343638 !important;
    /* background-color: #414548 !important; */
    color: #FFF;
}

.card {
    border-color: #343638;
    /* border-color: #414548; */
    /* background: #1a2130; */
    border-radius: 6px;
    /* volver a descomentar */
}

/* .scrollable::-webkit-scrollbar {
    background-color: #1a2130;
}

.scrollable::-webkit-scrollbar-thumb {
    background-color: #ffffff;

} */
.scrollable {
    /* height: 320px; */
    height: 447px;
    overflow: scroll;
}
/* .scrollable::-webkit-scrollbar {
    background-color: #1a2130;
}

.scrollable::-webkit-scrollbar-thumb {
    background-color: #ffffff;

} */
.nav-item span {
    color: #FFF;
}

.navbar-brand {
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.2rem;

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
    /* width: 38.5rem; */
    /* height: 382px; */
    /* height: 565px; */
    height: 545px;
}

.card-evento {
    /* height: 382px; */
}

.navbar {
    /* background-color: #1b1b27; */
    background-color: #10141d;
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
tr{
    border-bottom: 1px solid #00000033;
}
.version{
    font-size:14px;
    text-transform: capitalize;
    letter-spacing: 0;
}
.page-link {
    position: relative;
    display: block;
    color: #fff !important;
    text-decoration: none;
    background-color: #343638;
    border: 1px solid #343638;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #28997f;
    border-color: #28997f;
}
.btn-next-back{
  background-color: #343638;
    border: 1px solid #343638;
    color: #fff !important;
}

.form-select-sm {
    padding: 1px 19px 1px 8px !important;
    background-position: right -0rem center !important;
    
}
.form-select-sm:focus {

    border-color: none;
    box-shadow: none;
}
@media only screen and (min-width: 1300px) {
    .card2 {
        /* width: 38rem; */

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
        font-size: 10pt;
        /* font-weight: 300; */
        /* width: 95%; */
        width: 98%;
        margin-left: 1.5%;
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

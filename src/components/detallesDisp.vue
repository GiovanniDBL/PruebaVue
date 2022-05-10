<template>
<div>
    <sidebar></sidebar>
    <section class="home animated fadeIn">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <!-- <a @click="volver">Dispositivos</a> -->
                    <router-link to="/dispositivos">
                        <a>Volver a los dispositivos</a>
                    </router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Detalles del dispositivo </li>
            </ol>
        </nav>
        <!-- <i class="fas fa-arrow-alt-left" style="color:#fff">Regresar</i> -->
        <!-- <button type="button" class="btn btn-primary" @click="clickprueba()">toast</button> -->
        <!-- <vue-gauge :refid="'type-unique-id'"></vue-gauge> -->
        <div class="gauges">
            <div class="row">
                <div class="col-5">
                    <!-- //TODO DATOS DE GRAFICAS ****************** -->
                    <div class="card" style="">
                        <div class="card-header">
                            Datos de gráficas
                            <!-- <button @click="dowloadPdf" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button> -->
                            <div style="float:right" class="dropdown">
                                <i style="font-size: 21px;" type="button" class="far fa-ellipsis-v" id="OptionsTemp" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu animated fadeIn fast" aria-labelledby="OptionsTemp">
                                    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#Reglas" href="#">Reglas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body ">
                            <form class="row g-3" style="margin-bottom:1rem">
                                <div class="col-md-3">
                                    <label for="validationDefault01" class="form-label">Temperatura</label>
                                    <input style="background-color:#dc3546 !important" type="text" class="form-control" id="validationDefault01" v-model="ultimatemp" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Gas</label>
                                    <input style="background-color:#272c35 !important" type="text" class="form-control" id="validationDefault02" v-model="ultimagas" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Vibración</label>
                                    <input style="background-color:#2e616a !important" type="text" class="form-control" id="validationDefault02" v-model="ultimavib" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Voltaje</label>
                                    <input style="background-color:#d4b032 !important; color:#000" type="text" class="form-control" id="validationDefault02" value="0" disabled>

                                </div>

                            </form>
                        </div>

                    </div>
                    <!-- //TODO GRÁFICA GAUGE DE TEMPERATURA ****************** -->
                    <div class="card " style="margin-top:1rem;">
                        <div class="card-header">
                            Temperatura
                            <!-- <button style="float: right" class="btn btn-success btn-sm"> reglas</button> -->
                            <div style="float:right" class="dropdown">
                                <i style="font-size: 21px;" type="button" class="far fa-ellipsis-v" id="OptionsTemp" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu animated fadeIn fast" aria-labelledby="OptionsTemp">
                                    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#Reglas" href="#">Reglas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body">
                            <canvas id="gaugeTemp" style="position: relative; height:27vh; width:30vw;"></canvas>
                            <!-- <canvas id="gaugeTemp" class="gauge-style"></canvas> -->
                        </div>

                    </div>
                    <!-- //TODO GRÁFICA GAUGE DE GAS ****************** -->
                    <div style="margin-top:1rem;" class="card ">
                        <div class="card-header">
                            Gas
                            <div style="float:right" class="dropdown">

                                <i style="font-size: 21px;" type="button" class="far fa-ellipsis-v" id="OptionsGas" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu animated fadeIn fast" aria-labelledby="OptionsGas">
                                    <li><a class="dropdown-item" href="#">Reglas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body">

                            <!-- <canvas id="gaugeGas" class="gauge-style"></canvas> -->
                            <canvas id="gaugeGas" style="position: relative; height:27vh; width:30vw;"></canvas>
                        </div>

                    </div>
                </div>

                <div class="col-7">
<button @click="ActualizarVinculación()" class="btn btn-primary"> actualizar vinculacion</button>
<button @click="UbicacionesInternas()" class="btn btn-primary"> Ubicaciones Internas</button>
                    <div class="card resumen-card">
                        <!-- //TODO DETALLES DEL DISPOSITIVO ****************** -->
                        <div class="card-header text-">
                            <i style="color:#1abb97; font-size:18px" class="fas fa-info-circle"></i> Detalles del dispositivo
                            <!-- <button @click="dowloadPdf" style="float:right" type="button" class="btn btn-success btn-sm">Descargar Documento PDF <i class="fas fa-download btn-pdf"></i></button> -->
                            <div style="float:right" class="dropdown">

                                <i style="font-size: 21px;" type="button" class="far fa-ellipsis-v" id="OptionsDetalles" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu animated fadeIn fast" aria-labelledby="OptionsDetalles">
                                    <li><a class="dropdown-item" type="button" @click="dowloadPdf">Generar PDF</a></li>
                                    <li><a class="dropdown-item" href="#" @click="disabled();">Editar información</a></li>
                                </ul>
                            </div>

                        </div>
                        <div class="card-body">
                            <!-- //TODO INFORMACIÓN NOMBRE DEL DISPOSITIVO ****************** -->
                            <span class="titulo-forms-detalles">Nombre asignado al dispositivo <i class="fas fa-edit icono-edit" data-bs-toggle="modal" data-bs-target="#NombreAsignado" type="button"></i></span>
                            <hr class="hr-style">
                            <form class="row g-3" style="margin-bottom:1rem;">
                                <div class="col-md-3">
                                    <label for="inputDispositivo" class="form-label">ID_dispositivo</label>
                                    <input type="text" class="form-control" id="inputDispositivo" v-model="NameDeviceForm" disabled>
                                </div>
                                <div class="col-md-3">

                                    <label for="inputSucursal" class="form-label">Nombre asignado</label>
                                    <input type="text" class="form-control" id="inputSucursal" v-model="NombAsignadoForm" disabled>
                                </div>
                            </form>
                            <!-- //TODO INFORMACIÓN DE VINCULACIÓN ****************** -->
                            <span class="titulo-forms-detalles">Información de vinculación <i class="fas fa-edit icono-edit" data-bs-toggle="modal" data-bs-target="#vinculacion" type="button"></i></span>
                            <hr class="hr-style">
                            <form class="row g-3" style="margin-bottom:1rem;">
                                <div class="col-md-3">
                                    <label for="inputSucursal" class="form-label">Subcuenta</label>
                                    <input type="text" class="form-control" id="inputSucursal" v-model="SucursalForm" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="inputDispUbic" class="form-label">Ubicación interna</label>
                                    <input type="text" class="form-control" id="inputDispUbic" v-model="UbicSensorForm" disabled>
                                </div>
                            </form>
                            <!-- //TODO INFORMACIÓN DE UBICACIÓN ****************** -->
                            <span class="titulo-forms-detalles">Información de ubicación <i style="color:#ea4335; font-size:23px" class="fas fa-map-marker-alt"></i></span>
                            <hr class="hr-style">
                            <!-- <hr style="background: #ffffff1c;height: 4px;"> -->
                            <form class="row g-3" style="margin-bottom:1rem;">
                                <div class="col-md-2">
                                    <label for="inputPais" class="form-label">País</label>
                                    <input type="text" class="form-control" id="inputPais" v-model="PaisForm" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="inputPais" class="form-label">Estado</label>
                                    <input type="text" class="form-control" id="inputPais" v-model="EstadoForm" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="inputCiudad" class="form-label">Ciudad</label>
                                    <input type="text" class="form-control" id="inputCiudad" v-model="CiudadForm" disabled>
                                </div>
                                <div class="col-md-4">

                                    <label for="inputUbicacion" class="form-label">Dirección</label>
                                    <input type="text" class="form-control" id="inputUbicacion" v-model="UbicacionForm" disabled>
                                </div>

                            </form>
                            <!-- <hr style="background: #ffffff1c;height: 4px;">
                            <form class="row g-3" style="margin-bottom:1rem">
                                <div class="col-md-3">
                                    <label for="validationDefault01" class="form-label">Temperatura</label>
                                    <input style="background-color:#dc3546 !important" type="text" class="form-control" id="validationDefault01" v-model="ultimatemp" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Gas</label>
                                    <input style="background-color:#272c35 !important" type="text" class="form-control" id="validationDefault02" v-model="ultimagas" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Vibración</label>
                                    <input style="background-color:#2e616a !important" type="text" class="form-control" id="validationDefault02" v-model="ultimavib" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Voltaje</label>
                                    <input style="background-color:#d4b032 !important; color:#000" type="text" class="form-control" id="validationDefault02" value="0" disabled>

                                </div>

                            </form> -->
                            <!-- <div class="col-md-4">
                                    <label for="inputPais" class="form-label">País</label>
                                    <input type="text" class="form-control" id="inputPais" v-model="PaisForm" disabled>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputCiudad" class="form-label">Ciudad</label>
                                    <input type="text" class="form-control" id="inputCiudad" v-model="CiudadForm" disabled>
                                </div>
                                <div class="col-md-4">

                                    <label for="inputUbicacion" class="form-label">Dirección</label>
                                    <input type="text" class="form-control" id="inputUbicacion" v-model="UbicacionForm" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault01" class="form-label">Temperatura</label>
                                    <input style="background-color:#dc3546 !important" type="text" class="form-control" id="validationDefault01" v-model="ultimatemp" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Gas</label>
                                    <input style="background-color:#272c35 !important" type="text" class="form-control" id="validationDefault02" v-model="ultimagas" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Vibración</label>
                                    <input style="background-color:#2e616a !important" type="text" class="form-control" id="validationDefault02" v-model="ultimavib" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Voltaje</label>
                                    <input style="background-color:#d4b032 !important; color:#000" type="text" class="form-control" id="validationDefault02" value="0" disabled>

                                </div> -->
                            <!-- <div class="col-md-12" v-if="btnSave">
                                    <button style="margin-right:1rem" type="button" class="btn btn-success">Guardar</button>
                                    <button @click="CancelDisabledInput()" type="button" class="btn btn-danger">Cancelar</button>
                                </div> -->

                            <div class="row ">

                                <GMapMap :center="center" :zoom="9" map-type-id="terrain" class="map-style">
                                    <GMapCluster>
                                        <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :title="''" :clickable="true" :draggable="true" @click="center=m.position" />
                                    </GMapCluster>
                                </GMapMap>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class=" top-bottom-graficas">
            <div class="row">
                <div class="col-6">
                    <div class="card ">
                        <div style="background-color: #dc3545;" class="card-header">
                            Variaciones de Temperatura

                        </div>
                        <div class="card-body text-end">
                            <!-- <canvas id="linechart-alarmas" style="position: relative; height:20vh; width:30vw;"></canvas> -->
                            <canvas id="GraficaTemp" style="position: relative; height:25vh; width:30vw;"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card ">
                        <div style="background-color: #2e616a;" class="card-header">
                            Variaciones de vibración

                        </div>
                        <div class="card-body text-end">
                            <canvas id="GraficaVib" style="position: relative; height:25vh; width:30vw;"></canvas>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class=" top-bottom-graficas">
            <div class="row">
                <div class="col-6">
                    <div class="card ">
                        <div style="background-color: #272c35;" class="card-header">
                            Variaciones de gas

                        </div>
                        <div class="card-body text-end">
                            <canvas id="GraficaGas" style="position: relative; height:25vh; width:30vw;"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card ">
                        <div style="background-color: #d4b032; color:#000" class="card-header">
                            Variaciones de voltaje

                        </div>
                        <div class="card-body text-end">
                            <canvas id="GraficaVolt" style="position: relative; height:25vh; width:30vw;"></canvas>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- <div style="margin-bottom:10rem" >

 <canvas id="canvas" style="position: relative; height:20vh; width:30vw;"></canvas>
        </div> -->
    </section>
    <!--//? ************* MODAL DE NOMBRE ASIGNADO********************** -->
    <div class="modal fade" id="NombreAsignado" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar Nombre del dispositivo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- //TODO ACTUALIZAR NOMBRE ASIGNADO-->
                    <p style="margin-bottom:0;margin-top:10px">Actualizar nombre asignado <i style="color:#d4b032" class="fas fa-edit"></i></p>
                    <!-- <button style="float:right" class="btn btn-primary btn-sm ">Crear nueva ubicación</button> -->
                    <hr class="hr-style">
                    <form class="row  g-3" v-on:submit.prevent="ActualizarNombre">
                        <div class="col-md-12">
                            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="NombAsignadoForm" placeholder="Nombre de cuenta" required>
                        </div>

                        <div class="col-12 text-end">
                            <button class="btn btn-success" style="text-transform:uppercase"><i class="fas fa-paper-plane"></i> Envíar</button>
                        </div>
                    </form>

                </div>
        
            </div>
        </div>
    </div>
    <!--//? ************* MODAL EDITAR VINCULACIÓN********************** -->
    <div class="modal fade" id="vinculacion" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Vinculación del dispositivo</h5>
                    <button type="button" v-on:click="CerrarModal()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                 
                    <!-- //TODO ACTUALIZAR VINCULACIÓN -->
                    <p style="margin-bottom:0;margin-top:10px">Ingresar nueva vinculación <i style="color:#d4b032" class="fas fa-edit"></i></p>
                    <!-- <button style="float:right" class="btn btn-primary btn-sm ">Crear nueva ubicación</button> -->
                    <hr class="hr-style">
                    <form class="row  g-3" v-on:submit.prevent="EditarCuenta">

                    
                        <div class="col-md-6">
                            <label for="subcuenta" class="form-label">Actualizar subcuenta</label>
                            <select class="form-select" id="subcuenta" v-model="ActualizarSubcuenta" required>
                                <!-- <option selected disabled value="">Seleccionar subcuenta</option> -->
                                <option v-for="item in UbicacionesInternass" :key="item.idUbiInt" :value="idUbiInt">{{item.nameUbiInt}}</option>
                                <!-- <option value="1">Sucursal 2</option>
                                <option value="1">Sucursal 3</option>
                                <option value="1">Sucursal 4</option>
                                <option value="1">Sucursal 5</option> -->
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="ubicInterna" class="form-label">Actualizar ubicación interna</label>
                            <select class="form-select" id="ubicInterna" v-model="ActualizarUbicInterna" required>
                                <option selected disabled value="">Seleccionar ubicación</option>
                                <option value="1">Cajero 1</option>
                                <option value="1">Cajero 2</option>
                                <option value="1">Cajero 3</option>
                                <option value="1">Cajero 4</option>
                                <option value="1">Cajero 5</option>
                            </select>
                        </div>
                        <div class="col-12 text-end">
                            <button class="btn btn-success" style="text-transform:uppercase"><i class="fas fa-paper-plane"></i> Envíar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import sidebar from './Sidebar';
import VueGauge from 'vue-gauge';
import GaugeController from 'chartjs-gauge';
// import 'chartjs-plugin-labels';

import {
    Chart
} from 'chart.js';
import ChartAlarmas from '../../graficas/alarmas.js'
import ChartHoras from '../../graficas/horas.js'
import planetChartData2 from '../../graficas/linechart2.js'
import axios from 'axios'
import jsPDF from 'jspdf'
import moment from 'moment'
import Swal from 'sweetalert2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import datalabelss from 'chartjs-plugin-datalabels'
let messageApi = 'http://localhost:3000/formulario/';
let messageWs = 'http://localhost:3000/sendwhatsapp';
export default {
    name: "detallesDispComponent",
    components: {
        sidebar,
        VueGauge,
        GaugeController,
        ChartDataLabels,
        btnSave: false,
        // datalabelss,
    },

    data() {
        return {
            ChartAlarmas: ChartAlarmas,
            ChartHoras: ChartHoras,
            planetChartData2: planetChartData2,
            // ada: Math.floor(Math.random() * 100),
            UbicacionesInternass:[],
            AlarmasDevice: [],
            AlertasDevice: [],
            UltimasAlarmas: [],
            UltimasAlertas: [],
            timedevice: [],
            tempdevice: [],
            vibraciondevice: [],
            gasdevice: [],
            voltdevice: [],
            ultimatemp: '',
            ultimavib: '',
            ultimagas: '',
            ultimavolt: '',
            options: {

                chartWidth: 400,
                needleValue: 30,
                arcColors: ['rgb(61,204,91', 'rgb(239,214,19)', 'rgb(255,84,84)'],
                arcDelimiters: [49, 79],
                rangeLabel: ['0', '100'],
                centralLabel: "30°C",
                needleColor: '#1abb97',
                needleStartValue: 0,
                arcLabels: ['49', '79'],
                arcPaddingColor: '#1a2130',
                arcPadding: 7
            },
            idDevice: '',
            idUserLoged: localStorage.getItem('id_usuario'),
            typeUserLoged: localStorage.getItem('id_tipousuario'),
            pruebafecha: moment.utc('2021-11-19T11:12:56.000Z').locale('es-mx').format('DD/MM/YYYY HH:mm:ss'),
            GlobalApi: this.globalVar,
            NameDeviceForm: '',
            SucursalForm: '',
            UbicSensorForm: '',
            CiudadForm: '',
            EstadoForm: '',
            PaisForm: '',
            UbicacionForm: '',
            NombAsignadoForm: '',
            ActualizarUbicInterna: '',
            ActualizarSubcuenta: '',
            id_Subcuenta:'',
            GlobalApi: this.globalVar,
            center: {
                // lat: 51.093048,
                // lng: 6.842120
                lat: 0,
                lng: 0
            },
            markers: [{
                    position: {
                        lat: 0,
                        lng: 0
                        // lat: 51.093048,
                        // lng: 6.842120
                    },
                }, // Along list of clusters
            ]

        }
    },
    mounted() {
        this.idDevice = this.$route.params.id;
        // const ctx = document.getElementById('linechart-alarmas');
        // new Chart(ctx, this.ChartAlarmas);

        // const ctxx = document.getElementById('linechart-horas');
        // new Chart(ctxx, this.ChartHoras);

        // const ctxxx = document.getElementById('linechart-pendiente');
        // new Chart(ctxxx, this.planetChartData2);

        this.GetinfoDevice();
        this.UbicacionesInternas();
    },
    methods: {
        disabled() {
            document.getElementById('inputDispositivo').disabled = false;
            document.getElementById('inputDispUbic').disabled = false;
            document.getElementById('inputSucursal').disabled = false;
            document.getElementById('inputPais').disabled = false;
            document.getElementById('inputCiudad').disabled = false;
            document.getElementById('inputUbicacion').disabled = false;
            this.btnSave = true;
        },
        CancelDisabledInput() {
            this.btnSave = false;
        },
        dowloadPdf() {
            var pdf = new jsPDF();
            var width = pdf.internal.pageSize.getWidth()
            let imgData = 'data:image/webp;base64,UklGRoYyAABXRUJQVlA4IHoyAADwFQGdASoACt0APoFAnUqlI6MhobSIgKAQCWdu/HyZ5Qv/+72wcd+BPy/+H/JL3n69/lP7l/iP1092PPr1z51HNX6G9q392/YX3Ffqb2AecJ+7PqB/cj1lP+t6sv8L6kH9u6jb0FumB/u3pY/8P1AP//7e/R/9TP8R/dPWf3c/i/7P/euvQ9X+5fKe6880P4v9s/23+C9rX9L3t/Nb/S9QX8l/oH+z/un47cMzcH0Bfen69/2v8J41Pz56mfaH2Af174jf8j/2vYB/oX+I9XX+2/bz0E/U3sJ/r//4fXU/////+B/ozfuqFnIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIACFotd388hjDQQsnLagpSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSAltf6Yi+KxBWiV5kr7WF8YdwELIMGsBVsbV20IhACovbxivClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClH/3HTSZjFYsnzmaTep6EV10UDdWqguzU/TaXwkDuhVtC00L7+UdHSI+XlTGBDkIPcRJ6rwVMiguyH15snEWbGzKklxEFoPDISEFG+RPoUFTyezxRa6VHB+3BkCf0lN3oTeB76MV4UpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUoSD0/gmeqBGtsbyWrv3xeo578gKNTxzacaJK/vQRSWb4AqJmEqTfK0/KPbATNI3FTBPMrRBvOIGuS+Y2i/rgiaJxAr0ws0CxHF1603MnmCOGvYvDYhv2qe2QPz53hAN1KffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmetJIR5YdoNt0uAz0/q6QK9P7n2kew3ltoGkBlynHgPWTgTuo1WvxQMIV1D/3hWxb9y+k24WC7JdqlsgtF+gwKDsoLFF2ZmoBTmkBuPrMFxeYAyHhUzpsCC4q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';
            pdf.setFont("Arial");

            pdf.setFontSize(22);
            pdf.setTextColor('#0a6e0b');
            // pdf.text(20, 20, 'Detalles del dispositivo');
            pdf.text('Detalles del dispositivo', width / 2, 40, {
                align: 'center'
            });
            pdf.setFontSize(18);
            pdf.setTextColor('#44546A')
            // pdf.text(35, 30, 'Últimas alarmas:' + this.UltimasAlarmas);
            pdf.text(20, 50, 'Dispositivo:');
            pdf.text(20, 60, 'Ubicación:');
            // pdf.text(20, 70, 'Fecha de creación:');
            pdf.text(20, 70, 'Cajero:');
            pdf.text(20, 80, 'Ciudad:');
            pdf.text(20, 90, 'Dirección:');
            pdf.text(20, 100, 'Última Temperatura:');
            pdf.text(20, 110, 'Última Vibración:');
            pdf.text(20, 120, 'Última Gas:');
            pdf.text(20, 130, 'Última Voltaje:');

            pdf.setTextColor('#4472C4')
            pdf.text(53, 50, '414150');
            pdf.text(51, 60, 'Sucursal 1');
            // pdf.text(65, 70, '19/11/2021 11:12:56');
            pdf.text(40, 70, 'Cajero 5');
            pdf.text(41, 80, 'Cancún');
            pdf.text(49, 90, 'Plaza las américas');
            pdf.text(75, 100, '29');
            pdf.text(70, 110, '57');
            pdf.text(55, 120, '0');
            pdf.text(65, 130, '0');

            pdf.addImage(imgData, 'jpeg', 0, 0, 220, 22);
            pdf.save('Detalles del dispositivo.pdf');
        },
        GetinfoDevice() {

            var data = {
                "typeFunction": "getStatusDevice",
                "idDevice": this.idDevice,
                "timeEnd": "12 hours",
                "idUserLoged": this.idUserLoged,
                "typeUserLoged": this.typeUserLoged,

            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'managerDevices',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));
            console.log('Contenido Data', data);
            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request DetallesDevice", resp);

                if (resp.data !== undefined) {
                    this.NameDeviceForm = resp.data[0].NameDevice;
                    this.SucursalForm = resp.data[0].NameUbica;
                    this.UbicSensorForm = resp.data[0].nameUbiInt;
                    this.CiudadForm = resp.data[0].nombCuidadUbic;
                    this.EstadoForm = resp.data[0].estadoNombre;
                    this.PaisForm = resp.data[0].paisNombre;
                    this.UbicacionForm = resp.data[0].ubicacionDir;
                    this.NombAsignadoForm = resp.data[0].nombre_asignado;
                    this.id_Subcuenta = resp.data[0].idUbic;

                    this.center.lat = resp.data[0].fixedLat;
                    this.center.lng = resp.data[0].fixedLng;

                    this.markers[0].position.lat = resp.data[0].fixedLat;
                    this.markers[0].position.lng = resp.data[0].fixedLng;
                    var Reverse = resp.data.reverse();
                    //* HORA
                    this.timedevice = Reverse.map(resp => moment.utc(resp.timeStatus).locale('es-mx').format('h:mm a'));
                    console.log(this.timedevice);
                    //* Temperatura
                    this.tempdevice = resp.data.map(resp => (resp.tempAmb));
                    console.log('temperatura', this.tempdevice);
                    //* Vibración
                    this.vibraciondevice = resp.data.map(resp => (resp.vibDevice));
                    console.log('vibración', this.vibraciondevice);
                    //* Gas
                    this.gasdevice = resp.data.map(resp => (resp.gasDevice));
                    console.log('gas', this.gasdevice);
                    //* Voltaje
                    this.voltdevice = resp.data.map(resp => (resp.voltDevice));
                    console.log('voltaje', this.voltdevice);
                    //* Ultima temperatura
                    let ultimatempp = resp.data.map(resp => (resp.tempAmb));
                    this.ultimatemp = ultimatempp.pop();
                    console.log('ultima temp', this.ultimatemp);
                    //* Ultima vibración
                    let ultimavibb = resp.data.map(resp => (resp.vibDevice));
                    this.ultimavib = ultimavibb.pop();
                    console.log('ultima vib', this.ultimavib);
                    //* Ultimo gas
                    let ultimagass = resp.data.map(resp => (resp.gasDevice));
                    this.ultimagas = ultimagass.pop();
                    console.log('ultima gas', this.ultimagas);
                    //* Ultimo volt
                    let ultimavoltt = resp.data.map(resp => (resp.voltDevice));
                    this.ultimavolt = ultimavoltt.pop();
                    console.log('ultima voltaje', this.ultimavolt);

                }

                this.GraficaTemp();
                this.GraficaVib();
                this.GraficaGas();
                this.GraficaVolt();
                this.gaugeTemp();
                // this.gaugeVib();
                this.gaugeGas();
            }
        },
        ActualizarNombre(){
            var data = {
                typeFunction: "editar_device",
                "idDevice": this.idDevice,
                "nombreAsignado": this.NombAsignadoForm,
            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'managerDevices',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

         
            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request all devicess", resp);

                     Swal.fire({
                        icon: 'success',
                        title: 'Actualizado correctamente',
                        text: 'El nombre asignado se ha Actualizado correctamente',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    }).then(() => {
                        
                    });
            }
        },
        ActualizarVinculación(){
            var data = {
                typeFunction: "cambiar_ubicacion_interna",
                "idDevice": 14,
                "idUbicacionInt": 5,
            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'managerDevices',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

         
            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request all devicess", resp);

                if (resp.message == 'Internal Server Error') {
                    console.log('holi');
                }else{
   Swal.fire({
                        icon: 'success',
                        title: 'Actualizado correctamente',
                        text: 'El nombre asignado se ha Actualizado correctamente',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    }).then(() => {


                    });
                }

                  
            }
        },
        UbicacionesInternas(){
            var data = {
                typeFunction: "getUbicaciones_internasByID",
                "idSubcuenta": this.id_Subcuenta,
            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'subcuentas',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

         
            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request all ubicaciones_Internas", resp);
                this.UbicacionesInternass = resp;
                console.log(this.UbicacionesInternass);


                  
            }
        },
        // ************ GRAFICAS LINE CHART************************
        GraficaTemp() {
            var ctx = document.getElementById('GraficaTemp').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.timedevice,
                    datasets: [{
                        label: 'Temperatura',
                        data: this.tempdevice,
                        backgroundColor: '#fd202033',
                        borderColor: 'rgb(203 53 87)',
                        borderWidth: 2,
                        pointBorderColor: 'rgb(203 53 87)',
                        pointBackgroundColor: '#FFF',
                        pointHoverBackgroundColor: 'rgb(203 53 87)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointHitRadius: 10,
                        pointRadius: 3,
                        pointBorderWidth: 1,
                        lineTension: 0.1,

                    }, ]
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: "#ffffff",
                            fontSize: 15,
                        }
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true,
                                color: '#1a2130',
                            },
                            ticks: {
                                padding: 25,
                                fontColor: '#ffffffb3',
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: true,
                                color: '#3a2d4c',
                                drawBorder: true
                            },
                            ticks: {
                                beginAtZero: true,
                                padding: 5,
                                fontColor: '#ffffffb3'

                            },
                        }]
                    }
                }
            });
        },
        GraficaVib() {

            var ctx = document.getElementById('GraficaVib').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.timedevice,
                    datasets: [{
                        label: 'Vibración',
                        data: this.vibraciondevice,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderWidth: 2,
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#FFF',
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointHitRadius: 10,
                        pointRadius: 0,
                        pointBorderWidth: 1,
                        lineTension: 0,

                    }]
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: "#ffffff",
                            fontSize: 15,
                        }
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true,
                                color: '#1a2130',
                            },
                            ticks: {
                                padding: 25,
                                fontColor: '#ffffffb3',
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: true,
                                color: '#3a2d4c',
                                drawBorder: true
                            },
                            ticks: {
                                beginAtZero: true,
                                padding: 5,
                                fontColor: '#ffffffb3'

                            },
                        }]
                    }
                }
            });
        },
        GraficaGas() {
            var ctx = document.getElementById('GraficaGas').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.timedevice,
                    datasets: [{
                        label: 'Gas',
                        data: this.gasdevice,
                        backgroundColor: '#3a3c3c66',
                        borderColor: 'rgb(86 86 86)',
                        borderWidth: 2,
                        pointBorderColor: 'rgb(86 86 86)',
                        pointBackgroundColor: '#FFF',
                        pointHoverBackgroundColor: 'rgb(86 86 86)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointHitRadius: 10,
                        pointRadius: 3,
                        pointBorderWidth: 1,
                        lineTension: 0.1,
                    }]
                },
                options: {
                    elements: {
                        line: {
                            tension: 0

                        }
                    },
                    legend: {
                        labels: {
                            fontColor: "#ffffff",
                            fontSize: 15,
                        }
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true,
                                color: '#1a2130',
                            },
                            ticks: {
                                padding: 25,
                                fontColor: '#ffffffb3',
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: true,
                                color: '#3a2d4c',
                                drawBorder: true
                            },
                            ticks: {
                                beginAtZero: true,
                                padding: 5,
                                fontColor: '#ffffffb3'

                            },
                        }]
                    }
                }
            });
        },
        GraficaVolt() {
            var ctx = document.getElementById('GraficaVolt').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.timedevice,
                    datasets: [{
                        label: 'Voltaje',
                        data: this.voltdevice,
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 2,
                        pointBorderColor: 'rgba(255, 206, 86, 1)',
                        pointBackgroundColor: 'rgba(255, 206, 86, 1)',
                        pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointHitRadius: 10,
                        pointRadius: 3,
                        pointBorderWidth: 1,
                        lineTension: 0.1,
                    }]
                },
                options: {
                    elements: {
                        line: {
                            tension: 0

                        }
                    },
                    legend: {
                        labels: {
                            fontColor: "#ffffff",
                            fontSize: 15,
                        }
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true,
                                color: '#1a2130',
                            },
                            ticks: {
                                padding: 25,
                                fontColor: '#ffffffb3',
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: true,
                                color: '#3a2d4c',
                                drawBorder: true
                            },
                            ticks: {
                                beginAtZero: true,
                                padding: 5,
                                fontColor: '#ffffffb3'

                            },
                        }]
                    }
                }
            });
        },
        // ************ GRAFICAS GAUGES CHART ************************
        gaugeTemp() {
            var ctx = document.getElementById("gaugeTemp").getContext("2d");

            var chart = new Chart(ctx, {
                type: 'gauge',
                data: {
                    // labels: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110'],
                    labels: ['40°', '50°', '60°', '70°', '80°', '100°'],
                    datasets: [{

                        // value: 99,
                        value: this.ultimatemp,
                        minValue: 0,
                        // data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
                        data: [50, 60, 70, 80, 90, 100],
                        // data: [0, 30,40,50,70,100],
                        // data: [49, 79, 100],
                        // backgroundColor: ['rgb(61,204,91)', '#dcb835', '#dcb835', '#dcb835', '#dc3545', '#dc3545', 'rgb(255,84,84)', 'rgb(255,84,84)'],
                        // backgroundColor: ['#109618', '#ff9900', '#ff9900', '#ff9900', '#961010', '#961010'],
                        backgroundColor: ['#27AE60', '#F1C40F', '#F1C40F', '#F1C40F', '#A93226', '#A93226'],
                        borderColor: "#1a2130",
                        borderWidth: 3
                    }]
                },
                plugins: [ChartDataLabels],
                options: {
                    //       layout: {
                    //     padding: {

                    //         top: 10,

                    //     }
                    // },

                    plugins: {
                        // Change options for ALL labels of THIS CHART
                        datalabels: {
                            display: true,
                            render: 'value',
                            color: '#000',
                            // anchor: 'start',
                            // color: function (context) {
                            //     return context.dataset.backgroundColor;
                            // },
                            // backgroundColor: '#000000a1',
                            borderWidth: 0,
                            borderRadius: 5,
                            // Size: 37.5,
                            formatter: function (value, context) {
                                return context.chart.data.labels[context.dataIndex];
                            },
                            font: {
                                size: 20,
                                weight: 'bold'
                            }
                        },

                    },
                    responsive: true,
                    cutoutPercentage: 65,
                    needle: {
                        radiusPercentage: 2,
                        widthPercentage: 10,
                        lengthPercentage: 0,
                        color: '#E59866',
                        // color: '#1abb97'
                    },
                    valueLabel: {
                        display: true,
                        formatter: (value) => {
                            return Math.round(value) + '°C';
                        },
                        fontSize: 37.5,
                        color: 'rgba(255, 255, 255, 1)',
                        backgroundColor: '#1a2130',
                        borderRadius: 0,
                        padding: {
                            // top: 20,
                            bottom: 20,
                            left: 20
                        },

                    },

                }
            });
        },
        gaugeVib() {
            var ctx = document.getElementById("gaugeVib").getContext("2d");
            //   labels: ['40', '50','60','70','80','100'],
            //                 datasets: [{

            //                     value: this.ultimatemp,
            //                     minValue: 0,
            //                  ,
            //                     data: [50, 60, 70, 80, 90,100],
            var chart = new Chart(ctx, {
                type: 'gauge',
                data: {
                    datasets: [{

                        value: this.ultimavib,
                        minValue: 0,
                        data: [499, 799, 1023],
                        backgroundColor: ['rgb(61,204,91)', 'rgb(239,214,19)', 'rgb(255,84,84)'],
                        // backgroundColor: ['#009ad9', '#8080802b', '#8080802b'],
                        borderColor: "#1a2130",
                        borderWidth: 7
                    }]
                },
                options: {
                    //       layout: {
                    //     padding: {

                    //         top: 10,

                    //     }
                    // },

                    responsive: true,
                    cutoutPercentage: 65,
                    needle: {
                        radiusPercentage: 2,
                        widthPercentage: 5,
                        lengthPercentage: 20,
                        color: '#1abb97'
                    },
                    valueLabel: {
                        display: true,
                        formatter: (value) => {
                            return Math.round(value);
                        },
                        fontSize: 37.5,
                        color: 'rgba(255, 255, 255, 1)',
                        backgroundColor: '#1a2130',
                        borderRadius: 0,
                        padding: {
                            top: 20,
                            bottom: 15,
                            left: 20
                        },

                    },

                }
            });
        },

        gaugeGas() {
            var ctx = document.getElementById("gaugeGas").getContext("2d");

            var chart = new Chart(ctx, {
                type: 'gauge',
                data: {
                    labels: ['40', '50', '60', '70', '80', '100'],
                    datasets: [{
                        // value: 31,
                        value: this.ultimagas,
                        minValue: 0,
                        data: [50, 60, 70, 80, 90, 100],
                        // data: [49, 79, 100],
                        // backgroundColor: ['rgb(61,204,91)', 'rgb(239,214,19)', 'rgb(239,214,19)', 'rgb(239,214,19)', 'rgb(255,84,84)', 'rgb(255,84,84)'],
                        // backgroundColor: ['rgb(61,204,91)', '#dcb835', '#dcb835', '#dcb835', '#dc3545', '#dc3545', 'rgb(255,84,84)', 'rgb(255,84,84)'],
                        // backgroundColor: ['#109618', '#ff9900', '#ff9900', '#ff9900', '#961010', '#961010'],
                        backgroundColor: ['#27AE60', '#F1C40F', '#F1C40F', '#F1C40F', '#A93226', '#A93226'],
                        borderColor: "#1a2130",
                        borderWidth: 3
                    }]
                },
                plugins: [ChartDataLabels],
                options: {
                    plugins: {

                        datalabels: {
                            display: true,
                            render: 'value',
                            color: '#000',
                            // backgroundColor: '#000000a1',
                            borderWidth: 0,
                            borderRadius: 5,
                            formatter: function (value, context) {
                                return context.chart.data.labels[context.dataIndex];
                            },
                            font: {
                                size: 20,
                                weight: 'bold'
                            }
                        },

                    },
                    responsive: true,
                    cutoutPercentage: 65,
                    needle: {
                        radiusPercentage: 2,
                        widthPercentage: 10,
                        lengthPercentage: 0,
                        color: '#E59866',
                        // color: '#1abb97'
                    },
                    valueLabel: {
                        display: true,
                        formatter: (value) => {
                            return Math.round(value);
                        },
                        fontSize: 37.5,
                        color: 'rgba(255, 255, 255, 1)',
                        backgroundColor: '#1a2130',
                        borderRadius: 0,
                        padding: {
                            // top: 20,
                            bottom: 20,
                            left: 20
                        },

                    },

                }
            });
        }

    }

}
</script>

<style scoped>
.gauge-style {
    position: relative !important;
    height: 30vh !important;
    width: 30vw !important;
    display: block;
    margin: 0 auto;
}

.home {
    position: relative;
    /* height: 100vh; */
    left: 88px;
    width: calc(100% - 88px);
    transition: all 0.5s ease;
    padding: 8px 40px;
    margin-top: 1rem;

}

.home .text {
    font-size: 30px;
    font-weight: 500;
}

.hr-style {
    background: #27ae60;
    height: 3px;
    width: 33%;
    opacity: 1;
    margin-top: 3px
}

.card {
    background: #1a2130;
    /* background: #27293d; */
}

.top-bottom-graficas {

    margin-bottom: 1rem;
}

.resumen-card {
    margin-bottom: 1rem;
    color: #fff;
    /* text-align: center; */
    height: 100% !important;
}

.gauges {
    margin-bottom: 1rem;
}

.gauges .card {
    /* height: 15rem */
    /* height: 17rem */
    /* height: 100%; */
}

.gauges h3 {
    color: #ffffffbd;
    margin-top: 1rem;
    text-align: center;
}

.card2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.card-title {
    color: #fff;

}

.card2 {
    width: 36rem
}

.card-header {
    /* color: #ffffffCC; */
    color: #FFFFFF;
    /* color: #ffffffbd; */
    text-transform: uppercase;
    background-color: #3c404326;
}

.list-group-item {

    color: #ffffff;
    background-color: #1a2130;
    border-bottom: 1px solid #ffffff14;
    /* font-size: 20px; */
}

.btn-pdf {
    font-size: 1rem;
    /* float: right; */
    /* color: #3dcc5b; */

}

.btn-pdf:hover {
    color: #00ff35;

}

label {
    color: #ffffff99;
    /* font-size: 1rem; */
}

input {
    background-color: #1a2130 !important;
    /* background-color: #7d80920d !important; */
    /* border: 1px solid #79c6ba !important; */
    border: 1px solid #222a3a !important;
    color: #ffffff;
    border-radius: 0.4285rem !important;
    /* font-size: 1rem; */
}

input:focus {
    color: #ffffff
}

input:disabled {

    color: #ffffffcc
}

.form-control {
    /* text-align: center; */
}

ul {
    text-transform: capitalize;
}

.map-style {
    width: 100%;
    /* height: 225px */
    height: 260px
}

.breadcrumb-item a {
    text-decoration: none;
    color: #1abb97;
}

.breadcrumb-item a:hover {
    text-decoration: none;
    color: #1fe7ba;
}

.titulo-forms-detalles {
    /* margin-bottom: 1rem !important; */
    color: #ffffffcc;
}

.titulo-forms-detalles .icono-edit {
    /* margin-bottom: 1rem !important; */
    color: #d4b032;
    font-size: 17px;
}

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #1a2130;
    /* background-color: #26283b; */
    /* background-color: #27293d; */
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}

.modal-header {
    border-bottom: 0;
    color: #ffffff;
    text-transform: uppercase;
}

.modal-header .btn-close {
    padding: 0.5rem 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
    background-color: #ffffff;
}

.form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    /* background-color: #222332 !important; */
    background-color: #212b3d !important;
    border: 1px solid #2b3553;
    /* background-image: url('../assets/flecha_select.webp') */

}

/* .form-select:focus {

  border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
} */
.modal input {
    background-color: #212b3d !important;
    /* background-color: #222332 !important; */
    border: 1px solid #2b3553 !important;
    color: #fff;
}

.modal input:focus {

    color: #fff;
}

.modal-body {
    /* color: #fff; */
    color: #ffffff99;
}

option {
    background-color: #fff;
    color: #000;
}

option:hover {
    background-color: #fff;
    color: #000;
}

@media only screen and (min-width: 1800px) {
    .card2 {
        width: 53rem;
    }

    .gauges .card {
        /* height: 20.5rem */
    }

    label {

        font-size: 1.2rem;
    }

    .map-style {
        width: 100%;
        height: 400px;
    }

    .gauge-style {
        position: relative !important;
        height: 26vh !important;
        width: 26vw !important;
        display: block;
        margin: 0 auto;
    }

}
</style>

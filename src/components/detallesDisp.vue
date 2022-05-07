<template>
<div>
    <sidebar></sidebar>
    <section class="home animated fadeIn">
        
        <!-- <button type="button" class="btn btn-primary" @click="clickprueba()">toast</button> -->
        <!-- <vue-gauge :refid="'type-unique-id'"></vue-gauge> -->
        <div class="gauges">
            <div class="row">
                <div class="col-5">
                    <div class="card ">
                        <div class="card-header">
                            Temperatura
                            <!-- <button style="float: right" class="btn btn-success btn-sm"> reglas</button> -->
                            <div style="float:right" class="dropdown">

                                <i style="font-size: 21px;" type="button" class="far fa-ellipsis-v" id="OptionsTemp" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu animated fadeIn fast" aria-labelledby="OptionsTemp">
                                    <li><a class="dropdown-item"  data-bs-toggle="modal" data-bs-target="#Reglas" href="#">Reglas</a></li>
                                </ul>
                            </div>
                        </div>
                              <div class="card-body">
                        <canvas id="gaugeTemp" style="position: relative; height:27vh; width:30vw;"></canvas>
                        </div>

                    </div>

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

                        <canvas id="gaugeGas" style="position: relative; height:27vh; width:30vw;"></canvas>
                        </div>

                    </div>
                </div>

                <div class="col-7">
                    <div class="card resumen-card">
                        <div class="card-header text-">
                            Detalles del dispositivo
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
                            <form class="row g-3" style="margin-bottom:1rem">
                                <div class="col-md-4">
                                    <label for="inputDispositivo" class="form-label">Dispositivo</label>
                                    <input type="text" class="form-control" id="inputDispositivo" v-model="NameDeviceForm" disabled>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputDispUbic" class="form-label">Ubicación del dispositivo</label>
                                    <input type="text" class="form-control" id="inputDispUbic" v-model="UbicSensorForm" disabled>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputSucursal" class="form-label">Sucursal</label>
                                    <input type="text" class="form-control" id="inputSucursal" v-model="SucursalForm" disabled>
                                </div>

                                <div class="col-md-4">
                                    <label for="inputPais" class="form-label">País</label>
                                    <input type="text" class="form-control" id="inputPais" v-model="PaisForm" disabled>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputCiudad" class="form-label">Ciudad</label>
                                    <input type="text" class="form-control" id="inputCiudad" v-model="CiudadForm" disabled>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputUbicacion" class="form-label">Ubicación</label>
                                    <input type="text" class="form-control" id="inputUbicacion" v-model="UbicacionForm" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault01" class="form-label">Temperatura</label>
                                    <input style="background-color:#dc3546 !important" type="text" class="form-control" id="validationDefault01" v-model="ultimatemp" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Gas</label>
                                    <input style="background-color:#272c35 !important"  type="text" class="form-control" id="validationDefault02" v-model="ultimagas" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Vibración</label>
                                    <input style="background-color:#2e616a !important"  type="text" class="form-control" id="validationDefault02" v-model="ultimavib" disabled>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationDefault02" class="form-label">Voltaje</label>
                                    <input style="background-color:#d4b032 !important; color:#000"  type="text" class="form-control" id="validationDefault02" value="0" disabled>

                                </div>
                                <div class="col-md-12" v-if="btnSave == true">
                                    <button style="margin-right:1rem" type="button" class="btn btn-success">Guardar</button>
                                    <button @click="CancelDisabledInput()" type="button" class="btn btn-danger">Cancelar</button>
                                </div>

                            </form>

                            <div class="row ">

                                <GMapMap :center="center" :zoom="9" map-type-id="terrain" style="width: 100%; height: 213px">
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
                        <div style="background-color: #2e616a;"  class="card-header">
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
      <!--//? ************* MODAL REGLAS********************** -->
    <div class="modal fade" id="Reglas" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar Cuenta</h5>
                    <button type="button"  v-on:click="CerrarModal()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row" v-on:submit.prevent="EditarCuenta">

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nombre de la cuenta</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="FormNombre" placeholder="Nombre de cuenta" required>
                        </div>
                     
                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="exampleFormControlInput2" v-model="FormCorreo" placeholder="Correo electrónico" required>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput4" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="exampleFormControlInput4" v-model="FormTelefono" placeholder="Teléfono" required>
                        </div>
                               <div class="mb-3">
                        <label for="validationCustom04" class="form-label">Estado de cuenta</label>
                        <select class="form-select" id="validationCustom04" v-model="FormEstadoCuenta" required>
                            <option selected disabled value="">Seleccionar estado de cuenta</option>
                            <option value="1">Activo</option>
                            <option value="0">Inactivo</option>
                        </select>
                    </div>
                        <div class="mb-3">
                            <button style="width:100%" data-bs-dismiss="modal" class="btn btn-success">Enviar</button>
                        </div>

                    </form>

                </div>
                <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
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
            pdf.setFont("Arial");

            pdf.setFontSize(22);
            pdf.setTextColor('#70AD47')
            pdf.text(20, 20, 'Alarmas de la semanas');

            pdf.setFontSize(18);
            pdf.setTextColor('#44546A')
            // pdf.text(35, 30, 'Últimas alarmas:' + this.UltimasAlarmas);
            pdf.text(20, 30, 'Dispositivo:');
            pdf.text(20, 40, 'Ubicación:');
            pdf.text(20, 50, 'Fecha de creación:');
            pdf.text(20, 60, 'Cajero:');
            pdf.text(20, 70, 'Ciudad:');
            pdf.text(20, 80, 'Dirección:');
            pdf.text(20, 90, 'Temperatura:');
            pdf.text(20, 100, 'Vibración:');
            pdf.text(20, 110, 'Gas:');
            pdf.text(20, 120, 'Voltaje:');

            pdf.setTextColor('#4472C4')
            pdf.text(53, 30, '414150');
            pdf.text(51, 40, 'Sucursal 1');
            pdf.text(65, 50, '19/11/2021 11:12:56');
            pdf.text(40, 60, 'Cajero 5');
            pdf.text(41, 70, 'Cancún');
            pdf.text(49, 80, 'Plaza las américas');
            pdf.text(56, 90, '29');
            pdf.text(50, 100, '57');
            pdf.text(30, 110, '0');
            pdf.text(42, 120, '0');
            pdf.save('Info.pdf');
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
                    this.ultimatemp = ultimatempp.pop() ;
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
                            color: '#fff',
                            // anchor: 'start',
                            // color: function (context) {
                            //     return context.dataset.backgroundColor;
                            // },
                            backgroundColor: '#000000a1',
                            borderWidth: 0,
                            borderRadius: 5,
                            // Size: 37.5,
                            formatter: function (value, context) {
                                return context.chart.data.labels[context.dataIndex];
                            },
                            font: {
                                size: 15,
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
                            color: '#fff',
                            backgroundColor: '#000000a1',
                            borderWidth: 0,
                            borderRadius: 5,
                            formatter: function (value, context) {
                                return context.chart.data.labels[context.dataIndex];
                            },
                            font: {
                                size: 15,
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
    height: 17rem;
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

@media only screen and (min-width: 1800px) {
    .card2 {
        width: 53rem;
    }

    .gauges .card {
        height: 20.5rem
    }

    label {

        font-size: 1.2rem;
    }
}
</style>

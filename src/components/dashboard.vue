<template>
<div>
    <sidebar></sidebar>
    <section class="home animated fadeIn">

        <div class=" top-bottom-graficas">
            <div class="row">
                <div class="col-8">
                    <div class="card ">
                        <div class="card-header">
                            Grafica de Alarmas
                            <div class="btn-group" style="float:right" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio1" id="btnradio1" autocomplete="off" checked>
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" @click="randomdata();" for="btnradio1">Día</label>

                                <input type="radio" class="btn-check" name="btnradio1" id="btnradio2" autocomplete="off">
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" @click="randomdata();" for="btnradio2">Semana</label>

                                <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off">
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" @click="randomdata();" for="btnradio3">Mes</label>

                                <input type="radio" class="btn-check" name="btnradio1" id="btnradio4" autocomplete="off">
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" @click="randomdata();" for="btnradio4">Año</label>

                            </div>
                        </div>
                        <div class="card-body text-end">
                            <!-- <canvas id="linechart-alarmas" style="position: relative; height:20vh; width:30vw;"></canvas> -->
                            <!-- <div style="background:rgba(255, 206, 86, 0.2);border:2px solid rgba(255, 206, 86, 1)" ><br> <br></div> -->
                            <canvas id="myChartAlarmas" style="position: relative; height:20vh; width:30vw;"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style="">
                        <div class="card-header">
                            Reporte de alarmas
                            <button @click="dowloadPdf" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button>

                        </div>
                        <div class="card-body ">
                            <ul class="list-group list-group-flush">
                                <!-- <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Últimas Alarmas:
                                    <span class="badge rounded-pill bg-danger ">{{UltimasAlarmas}}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Últimas Alertas:
                                    <span class="badge rounded-pill bg-warning" style="color:#000">{{UltimasAlertas}}</span>
                                </li> -->
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Alarmas pendientes:
                                    <span class="badge rounded-pill bg-danger ">{{AlarmasPendientes.length}}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Alertas pendientes:
                                    <span class="badge rounded-pill bg-warning" style="color:#000">{{AlertasPendientes.length}}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Alarmas en progreso:
                                    <span class="badge rounded-pill bg-success">{{AlarmasEnProgreso}}</span>
                                </li>
                                <!-- <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Cuentas con más actividad:
                                    <span class="badge rounded-pill bg-primary">4</span>
                                </li>
                                <li v-if="rol !== '2'" class="list-group-item d-flex justify-content-between align-items-center">
                                    Empleados con mayor productividad:
                                    <span class="badge rounded-pill bg-success">7</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Dispositivos fuera de línea:
                                    <span class="badge rounded-pill bg-secondary">7</span>
                                </li> -->

                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <!-- v-if="rol !== '2'" -->
        <!-- //*TABLAS ADMINISTRADOR -->
        <!-- //TODO Mostrar si es diferente a un monitorista (es administrador) -->
        <div v-if="rol !== '2'" class=" top-bottom-graficas">
            <div class="row">
                <div class="col-4">
                    <div class="card ">
                        <div class="card-header card-header-tables">
                            <!-- Cuentas con más actividad <span class="badge bg-danger">4</span> -->
                            <button type="text" class="btn btn-texto-cards-bage btn-sm position-relative">
                                Cuentas con más actividad
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    4
                                </span>
                            </button>
                            <button @click="PDF_Actividad" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button>
                        </div>
                        <div class="card-body">
                            <div class="scrollable">
                                <table id="actividad" class="table table-tamaño  table-hover">
                                    <thead style="background:#0d6efd" class="">
                                        <tr class="t-head-table">
                                            <th scope="col">ID</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="t-body-table">
                                            <th scope="row">1</th>
                                            <td>Sisec</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>GrupoOxxo</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>GrupoZigbmax</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>GrupoCumbres</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style="">
                        <div class="card-header card-header-tables">
                            <!-- Productividad de Empleados -->
                            <button type="text" class="btn btn-texto-cards-bage btn-sm position-relative">
                                Productividad de Empleados
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    7
                                </span>
                            </button>
                            <button @click="PDF_Productividad" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button>

                        </div>
                        <div class="card-body ">
                            <div class="scrollable">
                                <table id="productividaad" class="table table-tamaño table-hover">
                                    <thead style="background:#198754">
                                        <tr class="t-head-table">
                                            <th scope="col">ID</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="t-body-table">
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Juan</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Pedro</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Jacobo</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Daniel</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Juan</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Melchor</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style="">
                        <div class="card-header card-header-tables">
                            <!-- Dispositivos fuera de línea -->
                            <button type="text" class="btn btn-texto-cards-bage btn-sm position-relative">
                                Dispositivos fuera de línea
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    7
                                </span>
                            </button>
                            <button @click="PDF_dispositivos" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button>

                        </div>
                        <div class="card-body ">
                            <div class="scrollable">
                                <table id="dispositivos" class="table table-tamaño table-hover">
                                    <!-- <thead style="background:#6c757d"> -->
                                    <thead style="background:#dc3545">
                                        <tr class="t-head-table">
                                            <th scope="col">ID</th>
                                            <th scope="col">Dispositivo</th>
                                            <th scope="col">Cuenta</th>
                                            <th scope="col">Señal</th>
                                            <!-- fad fa-signal-alt-slash -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="t-body-table">
                                            <th scope="row">1</th>
                                            <td>4140AF</td>
                                            <td>Otto</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>40EEB9</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>413EBE</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>414007</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td>4140C2</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12</th>
                                            <td>41511C</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">13</th>
                                            <td>41511E</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <!-- //*TABLAS MONITORISTA-->
        <!-- //TODO Mostrar si es un monitorista -->
        <div v-if="rol == '2'" class=" top-bottom-graficas">
            <div class="row">
                <div class="col-6">
                    <div class="card ">
                        <div class="card-header card-header-tables">
                            <!-- Cuentas con más actividad -->
                            <button type="text" class="btn btn-texto-cards-bage btn-sm position-relative">
                                Cuentas con más actividad
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    4
                                </span>
                            </button>
                            <button @click="PDF_Actividad" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button>
                        </div>
                        <div class="card-body">
                            <div class="scrollable">
                                <table id="actividad" class="table table-tamaño table-hover">
                                    <thead style="background:#0d6efd">
                                        <tr class="t-head-table">
                                            <th scope="col">ID</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="t-body-table">
                                            <th scope="row">1</th>
                                            <td>Sisec</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>GrupoOxxo</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>GrupoZigbmax</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>GrupoCumbres</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card" style="">
                        <div class="card-header card-header-tables">
                            <!-- Dispositivos fuera de línea -->
                            <button type="text" class="btn btn-texto-cards-bage btn-sm position-relative">
                                Dispositivos fuera de línea
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    7
                                </span>
                            </button>
                            <button @click="PDF_dispositivos" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button>

                        </div>
                        <div class="card-body ">
                            <div class="scrollable">
                                <table id="dispositivos" class="table table-tamaño table-hover">
                                    <thead style="background:#dc3545">
                                        <tr class="t-head-table">
                                            <th scope="col">ID</th>
                                            <th scope="col">Dispositivo</th>
                                            <th scope="col">Cuenta</th>
                                            <th scope="col">Señal</th>
                                            <!-- fad fa-signal-alt-slash -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="t-body-table">
                                            <th scope="row">1</th>
                                            <td>4140AF</td>
                                            <td>Otto</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>40EEB9</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>413EBE</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>414007</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td>4140C2</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12</th>
                                            <td>41511C</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">13</th>
                                            <td>41511E</td>
                                            <td>Thornton</td>
                                            <td><i style="display: block; font-size: 23px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <!-- //TODO Mostrar si es diferente a un monitorista (es administrador) -->
        <div v-if="rol !== '2'" class=" top-bottom-graficas">
            <div class="row">
                <div class="col-6">
                    <div class="card ">
                        <div class="card-header">
                            Cuentas con más actividad
                            <div class="btn-group" style="float:right" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio2" id="btnradio5" autocomplete="off" checked>
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" for="btnradio5">Día</label>

                                <input type="radio" class="btn-check" name="btnradio2" id="btnradio6" autocomplete="off">
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" for="btnradio6">Semana</label>

                                <input type="radio" class="btn-check" name="btnradio2" id="btnradio7" autocomplete="off">
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" for="btnradio7">Mes</label>

                                <input type="radio" class="btn-check" name="btnradio2" id="btnradio8" autocomplete="off">
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" for="btnradio8">Año</label>

                            </div>
                        </div>
                        <div class="card-body text-end">
                            <!-- <canvas id="linechart-alarmas" style="position: relative; height:20vh; width:30vw;"></canvas> -->
                            <!-- <div style="background:rgba(255, 206, 86, 0.2);border:2px solid rgba(255, 206, 86, 1)" ><br> <br></div> -->
                            <canvas id="myChartHorizontal" style="position: relative; height:20vh; width:30vw;"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card" style="">
                        <div class="card-header">
                            Empleados con mayor productividad
                            <div class="btn-group" style="float:right" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio3" id="btnradio9" autocomplete="off" checked>
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" for="btnradio9">Día</label>

                                <input type="radio" class="btn-check" name="btnradio3" id="btnradio10" autocomplete="off">
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" for="btnradio10">Semana</label>

                                <input type="radio" class="btn-check" name="btnradio3" id="btnradio11" autocomplete="off">
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" for="btnradio11">Mes</label>

                                <input type="radio" class="btn-check" name="btnradio3" id="btnradio12" autocomplete="off">
                                <label class="btn btn-outline-primary btn-sm btn-dangerr" for="btnradio12">Año</label>

                            </div>
                        </div>
                        <div class="card-body ">
                            <canvas id="productividad" style="position: relative; height:20vh; width:30vw;"></canvas>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</div>
</template>

<script>
import sidebar from './Sidebar';
import VueGauge from 'vue-gauge';
import {
    Chart
} from 'chart.js';
// import 'chartjs-plugin-labels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartAlarmas from '../../graficas/alarmas.js'
import ChartHoras from '../../graficas/horas.js'
import planetChartData2 from '../../graficas/linechart2.js'
import axios from 'axios'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
let messageApi = 'http://localhost:3000/formulario/';
let messageWs = 'http://localhost:3000/sendwhatsapp';
export default {
    name: "dashboardComponent",
    components: {
        sidebar,
        VueGauge,
        ChartDataLabels

    },

    data() {
        return {
            ChartAlarmas: ChartAlarmas,
            ChartHoras: ChartHoras,
            planetChartData2: planetChartData2,
            ada: Math.floor(Math.random() * 100),
            adaa: Math.floor(Math.random() * 100),
            adaaa: Math.floor(Math.random() * 100),
            asdf: '',
            items: [{
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },

            ],
            items2: [{
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },

            ],
            AlarmasDevice: [],
            AlertasDevice: [],
            UltimasAlarmas: [],
            UltimasAlertas: [],
            AlarmasPendientes: [],
            AlertasPendientes: [],
            AllAlarms: [],
            AlarmasEnProgreso: [],
            rol: localStorage.getItem('id_tipousuario'),
            id_usuario: localStorage.getItem('id_usuario'),
            GlobalApi: this.globalVar,

        }
    },
    mounted() {

        // const ctx = document.getElementById('linechart-alarmas');
        // new Chart(ctx, this.ChartAlarmas);

        // const ctxx = document.getElementById('linechart-horas');
        // new Chart(ctxx, this.ChartHoras);

        // const ctxxx = document.getElementById('linechart-pendiente');
        // new Chart(ctxxx, this.planetChartData2);
        this.GraficaAlarmas();
        this.getAlarmasFromHttp();
        this.getProgresoAlarmasFromHttp();
        // *Mostrar grafica de productividad solo si son administradores
        if (this.rol !== '2') {
            this.GraficaHorizontalEmpleados();
            this.GraficaHorizontalCuentas();
        }

    },
    methods: {
        randomdata() {

        },
        PDF_Actividad() {
            var pdf = new jsPDF();
            var width = pdf.internal.pageSize.getWidth()
            // https://dataurl.app/ <--- link para convertir
            //    let imgData = '';

            let imgData = 'data:image/webp;base64,UklGRoYyAABXRUJQVlA4IHoyAADwFQGdASoACt0APoFAnUqlI6MhobSIgKAQCWdu/HyZ5Qv/+72wcd+BPy/+H/JL3n69/lP7l/iP1092PPr1z51HNX6G9q392/YX3Ffqb2AecJ+7PqB/cj1lP+t6sv8L6kH9u6jb0FumB/u3pY/8P1AP//7e/R/9TP8R/dPWf3c/i/7P/euvQ9X+5fKe6880P4v9s/23+C9rX9L3t/Nb/S9QX8l/oH+z/un47cMzcH0Bfen69/2v8J41Pz56mfaH2Af174jf8j/2vYB/oX+I9XX+2/bz0E/U3sJ/r//4fXU/////+B/ozfuqFnIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIACFotd388hjDQQsnLagpSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSAltf6Yi+KxBWiV5kr7WF8YdwELIMGsBVsbV20IhACovbxivClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClH/3HTSZjFYsnzmaTep6EV10UDdWqguzU/TaXwkDuhVtC00L7+UdHSI+XlTGBDkIPcRJ6rwVMiguyH15snEWbGzKklxEFoPDISEFG+RPoUFTyezxRa6VHB+3BkCf0lN3oTeB76MV4UpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUoSD0/gmeqBGtsbyWrv3xeo578gKNTxzacaJK/vQRSWb4AqJmEqTfK0/KPbATNI3FTBPMrRBvOIGuS+Y2i/rgiaJxAr0ws0CxHF1603MnmCOGvYvDYhv2qe2QPz53hAN1KffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmetJIR5YdoNt0uAz0/q6QK9P7n2kew3ltoGkBlynHgPWTgTuo1WvxQMIV1D/3hWxb9y+k24WC7JdqlsgtF+gwKDsoLFF2ZmoBTmkBuPrMFxeYAyHhUzpsCC4q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';
            pdf.setFont("Arial");
            pdf.setFontSize(22);
            pdf.setTextColor('#0a6e0b');

            pdf.text('Cuentas con más actividad', width / 2, 40, {
                align: 'center'
            });
            pdf.autoTable({
                html: '#actividad',
                margin: {
                    top: 45
                },
                theme: 'grid',
                styles: {
                    halign: 'center'
                },
                headStyles: {
                    fillColor: '#0d6efd'
                },
                // bodyStyles: {fillColor: '#85ade9'}
            })

            pdf.addImage(imgData, 'jpeg', 0, 0, 220, 22);
            pdf.save('Cuentas_Mayor_Actividad.pdf');
        },
        PDF_Productividad() {
            var pdf = new jsPDF();
            var width = pdf.internal.pageSize.getWidth();
            let imgData = 'data:image/webp;base64,UklGRoYyAABXRUJQVlA4IHoyAADwFQGdASoACt0APoFAnUqlI6MhobSIgKAQCWdu/HyZ5Qv/+72wcd+BPy/+H/JL3n69/lP7l/iP1092PPr1z51HNX6G9q392/YX3Ffqb2AecJ+7PqB/cj1lP+t6sv8L6kH9u6jb0FumB/u3pY/8P1AP//7e/R/9TP8R/dPWf3c/i/7P/euvQ9X+5fKe6880P4v9s/23+C9rX9L3t/Nb/S9QX8l/oH+z/un47cMzcH0Bfen69/2v8J41Pz56mfaH2Af174jf8j/2vYB/oX+I9XX+2/bz0E/U3sJ/r//4fXU/////+B/ozfuqFnIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIACFotd388hjDQQsnLagpSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSAltf6Yi+KxBWiV5kr7WF8YdwELIMGsBVsbV20IhACovbxivClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClH/3HTSZjFYsnzmaTep6EV10UDdWqguzU/TaXwkDuhVtC00L7+UdHSI+XlTGBDkIPcRJ6rwVMiguyH15snEWbGzKklxEFoPDISEFG+RPoUFTyezxRa6VHB+3BkCf0lN3oTeB76MV4UpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUoSD0/gmeqBGtsbyWrv3xeo578gKNTxzacaJK/vQRSWb4AqJmEqTfK0/KPbATNI3FTBPMrRBvOIGuS+Y2i/rgiaJxAr0ws0CxHF1603MnmCOGvYvDYhv2qe2QPz53hAN1KffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmetJIR5YdoNt0uAz0/q6QK9P7n2kew3ltoGkBlynHgPWTgTuo1WvxQMIV1D/3hWxb9y+k24WC7JdqlsgtF+gwKDsoLFF2ZmoBTmkBuPrMFxeYAyHhUzpsCC4q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';
            pdf.setFont("Arial");
            pdf.setFontSize(22);
            pdf.setTextColor('#0a6e0b');

            pdf.text('Empleados con mayor productividad', width / 2, 40, {
                align: 'center'
            });
            pdf.autoTable({
                html: '#productividaad',
                margin: {
                    top: 45
                },
                theme: 'grid',
                styles: {
                    halign: 'center'
                },
                headStyles: {
                    fillColor: '#198754'
                },
            })
            pdf.addImage(imgData, 'jpeg', 0, 0, 220, 22);
            pdf.save('Empeados_Mayor_Productividad.pdf');
        },
        PDF_dispositivos() {
            var pdf = new jsPDF();
            var width = pdf.internal.pageSize.getWidth()
            let imgData = 'data:image/webp;base64,UklGRoYyAABXRUJQVlA4IHoyAADwFQGdASoACt0APoFAnUqlI6MhobSIgKAQCWdu/HyZ5Qv/+72wcd+BPy/+H/JL3n69/lP7l/iP1092PPr1z51HNX6G9q392/YX3Ffqb2AecJ+7PqB/cj1lP+t6sv8L6kH9u6jb0FumB/u3pY/8P1AP//7e/R/9TP8R/dPWf3c/i/7P/euvQ9X+5fKe6880P4v9s/23+C9rX9L3t/Nb/S9QX8l/oH+z/un47cMzcH0Bfen69/2v8J41Pz56mfaH2Af174jf8j/2vYB/oX+I9XX+2/bz0E/U3sJ/r//4fXU/////+B/ozfuqFnIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIACFotd388hjDQQsnLagpSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSAltf6Yi+KxBWiV5kr7WF8YdwELIMGsBVsbV20IhACovbxivClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClH/3HTSZjFYsnzmaTep6EV10UDdWqguzU/TaXwkDuhVtC00L7+UdHSI+XlTGBDkIPcRJ6rwVMiguyH15snEWbGzKklxEFoPDISEFG+RPoUFTyezxRa6VHB+3BkCf0lN3oTeB76MV4UpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUoSD0/gmeqBGtsbyWrv3xeo578gKNTxzacaJK/vQRSWb4AqJmEqTfK0/KPbATNI3FTBPMrRBvOIGuS+Y2i/rgiaJxAr0ws0CxHF1603MnmCOGvYvDYhv2qe2QPz53hAN1KffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmetJIR5YdoNt0uAz0/q6QK9P7n2kew3ltoGkBlynHgPWTgTuo1WvxQMIV1D/3hWxb9y+k24WC7JdqlsgtF+gwKDsoLFF2ZmoBTmkBuPrMFxeYAyHhUzpsCC4qssduvxcNAiSGX3HA+6o421/6NjV3AO7f3WE1BW3OCcSDyJ80kDxRGS0Ohtk/vvzQrcPBGpZWD9MA+fmoawpz78z78z78z78z78z78z78z78z78z78z78z78z78z78z78z78z78z78z78z78z78z78z78z78z78lQLpfO/gCbb0FiMszoWMFWZxa5T33+YoTd31jGuNL0LnRDf+qYUcHuNGXnxmF9ZTF9MMXl9JlhBhin0/F7vX9HjG9Jw2POmIu0agTShaOw6uKcGfKDOa3zDrPgCEaso9TjZ/fkFBASI1enzdHBs2bWXETBHTHUmbB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bB8bBzxrCqPCgXgpQk/Yhqps0fydUai66UmKNZKeIDcVw0O/QOgFzhgIImFq+RLio+WEZ8N3Lr9EMehAIfy7kum5Uc+nXpaoF3OGC8xE+e1PGFNfO/p3dXil3zpTgxLzGUsn3JbGf2I7nO3xdc1Cu0dZaAbMFvI/d/1SDMaoDTdyHMXLXeFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQAKg7d5GYYiAu9vYwFWRtPwYnX3kk8es8VQwMZ3yBCznNqbU5+pVpdIOIee8j/8mtu9X5+L58FePhmt1qi8edtshgNOXGAhk49nlqr+zNPQox5gXRHUascDokqtnpTx1PTbxRsSvh9RAiUu8WeN58WkzMrgBQ5gDASQmgal/iDPxZemPatXwZXFQkI7oSlgkH+2vnVex7f0rYDClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClRFiNIswGLHvWIBj/F3s9bQQvVYBh9ruAxQaJToJj9BN8BAk06Y759s42bw9uPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPi2wSnH9JYx0ZUjS1m5RvA7st47R8x0Zcw6RfeAovC9NU+KwvTEinFibNAZmRd07Ff3I82HnBSY+ZU0hIxAbROVU39J86sNp2++KoGNnjlOalZ7XlZrEvJpmxdmz3AjSts++d0lIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClICX4MRdjlDlxAbEL2IUNNAr3SHZR/9xEAnGHzsoE7jY2bWv+gwgV5XV7YyVQmD/T5/e2J5DUIuF2okJUIMXrbdetyLG/Qn1r67+a04S7l5WrkOdQgg1IhXaLXOyJVaELj8My2ThQ5+rV/vDwEn210CkGIeiW0t/pPRZziYl4Oi7De8Glf7t1saivW9/qO2xie94npDGDFl9Z3cf9B+F9mZ/Pb5CCFInsnEuggoNpnSFwOgl3YUbSr6/3mXZC6RZH/3YnK76k2FKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQFKQM/k31hQDWFAN0gqMuABq8c2x2jsV4UpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpASwAA/v+6Hv/eD4lWbf/FPb9eUjSgAAAAAAAAAFQ25ro34jlxUWox1FAOOk8/SpkX0E6qe9tfATzeJgtwYuYB/2fNpD1cSmwmvfiUzi+k2+DPelxGi8W/J6lrSpsrrCoYEKeb7rXLUqE76WHIDch16TodQH2R2/+vDU7lZz+5dPVxUvNZHj68AAAAAACJ9yC2rh9fnDl2B2HSQkKLn/jZAjT0WMIMzvLYWoo4IBOay1QoqTyukEma8wLIDoQBmVNsWykbWoIW0jzgZU/t4F3FXCakKm9E4HE7PpP3p487pWRbAEv/JDrmCUniRFuuDOktFYRhnqbRp4BEsHLzY5eloj59hRXVTwrnCIz47twS1IFsYRXoBOlzim0xhbi/fqYe4orUCKcZbLV8ENyd2jclmlDckiNZz9GXzvU/s9TBHCgyow/PP85PpVLolNl6bej3oGVbgZmnP2kfvUTm99uQ7bJnL5wq7aIo/xNIwIAAAAAC/nQQoveNadQyMczsMpe4rA5wKhfhZcUx99ed+YbdVhNkZ2HwjAfSsTtpzQV0neIG8NeRexbeHcyuNd240nFszS+3Wga7nj2Cv0k7U+jNljADBU4qrTCBZPz9wZvMP9WKGwL3fltraiGF6KsT+6h3UCK+WdoTW0JQj8MJSFDapz7htvGIxP4X8Im0l9UwW/2wyGWa37kOJm6PHFmxzPwMv2mThwogxXrrnlhtuZgx7k4eFbJ94FSjMcm06buwTUuk6YzSSwoYEt1QrGuhFY/OkG3zc3JJG5zP6mRisAupNlsbwmwGkwHnlcRWhpwOVVLkk04okP/f21xWZ8KRvny9Vyc/1CimYWeQ5/rj+pVjmUoFUafqpfzVgFVvttGcdTCkumbVuq1lJnjZvaJ911jTc6fZvxCNsYKmUq6ukSveLNegL/874F5E839eiJLwshCCHJ7VOmX5O7rNCVnnYfCPKT4TJzGOk7xA3hpApVd3VbUE5rymREoFDfg7Bv39nQl3s+o9BhcomwIjGuE05ijHteda+9peSmbjmAWhYadYosEKGhWptKK4ADDMpT87r1Vu9S67YskcQW76EzFeDd+++ebGQwPsB+Pziy8C05jCGdxTp9ZYQAwje4TBsseo17SPjVjuQqMiz82YTt8WACsnYHJoCFRQwd4MzxqIQmJs9kdq8DI4NtEKNWrlqD8Hp38c/J3ZDKcgv93ku2bcJnSvNfKiQdWd48XwruaBd+cADJSdjT8oADdPy81UivMmOnngqvKqUP52wDmIWz5M1mbObL+sJFIyn13DxT7zBwUHV4AZ1zrNSkbCf5FbCoEgc4ntB6R6UFF+HO8o1mpvPwIbtcyAT6630f2SlCVMZe2zccAtIZu0WRuTn51Z3IfImHY7OthnG8hHti40PAgf+QC6/cpJ92S5o2Ec3s6x/5SHLYayarhdBnkHmH9F6lg9ILUghrMZbZneX/mV2MC9wOHtR4n8UTmgtiTDouDHQgZz5AMTe5/AzoH+byRdAnuhxgX6P0RJBJ0lR6yA3xSjqJL1dkpuHlD+crXL4JPa12tFq2SDAk650pgPjkvX/lZboEN5h/BhnKo9oMpdJk4ge5XtYJ3wRcwnJBxPJV2V61SGcDgAAAAAE2xmFJ6C1DnNUzsB4R73BzuOi53ZyrWgFhwohA+ewRyon5UltFFLOQKI7SprFjeAIjpC52HotCOZijZzEu/IMOuGApbQByNTUPAsH0jnXeQaMuz5wPHWRRTfudhALksp8rtW7n8kbDXHArvSJcjcSannnRXnbdRHIfd4qiG5enbkd5OKKw0fML831/faZ4fCqtZevGJ5SnRxoCUwgjkdXqM9rDgLO1Fs/3XbJ3RxTsWIZOgRccYIIj+SYZNaJ7hEoQB2wRtpCJ+Il4FrAJm7i/seKySMc+DNekqkSnIybeTO3i0FCQ6823ShMJozTDy3npC/P2goeJfNGdgF8c1mZvXGQVyultTn1oKcLTtXWeSI9m53hiuxLWX+FLuAKQ7NIOf5cS2hPZaD8sKXznK2gDQEUAWQ4LRQdI3SV4s5sYUN/0aIEaKplKCjZKPmRXxP5gqfxdGvFX1TT766gDGXnvYP3jT8ses7/BniBHD50D+/q6cPxw70+xkXf59VrWyrW6cO/NwYAg328hflJRz1vaIfffAJlmpHHLMsw91WuixjjeX6M2aCSxqjz7/uF23Vab4qQX+zEgHNRgc/eN+n8WSAb+HR1lMTROV1laWfylJbn+CG7yXM7TcUwV8FNZF+/TmNZZ1gcDIIioQjQ6sD4u2N9PRo0/jnDhUhlyG8PhG8EI3zCO1DS7SJyZkcq/AuFDrUS4d5HsJdNXP7fsUBnpHQTZFIUwhuslw8EKyd9VnXoauChWdfid2zYxGngifY4tEPrxtkWPi8DQRiH8+yiqEzrK8E4999yUxIRk1ZGXVWT6PLYumFNRIevVtemQMeLmjH1p9dKGoazaBsds64UwNzRdsJyMQ78welnwyoArHSq/8Sebokhy06b9LwEOo/4wsH8Iqx2W4kIP8NfIIYSfR0SU6Z2pInDYhQuSAIEoBeJnG2ipSO5Jw+GK8verurL0/XevNmjT42x6fRl1C8R3qQpg7C0jurQ+2KeQapJAAAAAAAGdJcer3vBZs87EgeNxk0xscVqXC9AQP7fHGOGtl1Z73433Z6F1rsxHpnJ9DQgMRnRhhMe7kNO19nFn8jy6MvMCIgsSBln3GQh7WiuhuVI15wOvjsEnUiUeEK3RewlQN/xyJEzcsOzYMKPIfV24oHz8ckUoiP7tx2erdZgkfCy3CdlTMXhlB2IsEKotki4kspIyqzRfZtwKR5ZsfqxRbqNBN+jQrtHq6FCEzdtw+R+ojFgSWsoJMade+vj+HrggiT+PGQfu3HQ3mI0nc+VqjeK2KcTZ7725a6kwIwKylVJHhsdPe+EWhMZx1VOTjwSGSHrK/zYtb1Gl7Ybdj+InxrlruE5ILhjOj0Vdp9uag5m3xthDGjeORw3rDTOCre6mfKAntOZfqGNirLdhnYRREQY9csanKbRufeNEXbeRn30Rge1Fo2WyfTtamMYggBsLHts2Do7wwW2iC7GaQu11+PEEtvxmATn4Txs4TbYQDF9CnXJucvXUgokA+4Qvu6J2JZ6G4m6tUFS4Q5PUiBTyIrwLKjCUlvplfgjLZSC/Bf7FXDBGXtvgBl8pDNmivU9WJnbY0yeR6F2AQeBbTjFjHNUrckMCR2u2eEpsvzOj37uimR5LqF9lW4WvEnL1ismI4LgR+gdCiPghJRyAUOyMBxs2zvdZC8E0t5GgnD+yG2o5G+OOKufDqK3wR+o53axv/Xtek5pfdd5NbZhHcm2hdV1gS53FkKHK8BhgHwtVMbIaA9kUumfE+exdEpy/1hR/j5X/+DZkNed0cu98+8aurG/LYqlI7r+5NUdK+hJ7G/eV6wUk/uXVEjngLlKssmHs1YZtXKHa57T7kJ282TnhGiowy7dcqKNYU0s2LRrh5Pcv0MsTPM99qpaCCICO7ZvKpKvPxhvwZaYV81mlu2KhceN2v3LwyZN3WaPVTeLvOzkNx9vkLhb9lvh5346VqaOL7yMIiUBOxZVULu8unjXnM8p4GBAD8CXuhVzbYyMSPa5yv+2BOlNTRvwEHtgEjWyxfwRa7NT0DC+qslHdOxfhXBDfTNNDIIuGAmR1qXIx4cqYiIMA1rR1Yrxikdu2+C5pSbOpaQANZfQA+r+yO5Pz3DngYDzXPHtE40HO7k7TyoEfKv/o5V6S4ftBVbZdTzFcNUFqGwzWZghTWQbdk/iL+oDuIwN2P08PXFgH92cZ/MjV40R84V1d9O3GCqeI8Zv1gpVUaIJnLzUnGhlrEbtofaRJQj00bmoJxpXtglOk0n/kz3R0uhZpClHkZB/ez5pFTg0x2AjZOCXdDf+sc0LPC81vyLqGkPRAWHTGP+QfN6srXeMBD2ubkt5gikNVT5CS1V1mvo9oVuDMRBKVHg78F8v/9zD+T021/Q2pq0ghhayVxeVX8Kt482Kt7w9Rds1gBBtX+bPclQFvns88esXQQ9lnTUZmh4UE6io49u0wplRQU7rnmYK/Cm5fCn33OMieMxd2omzoT9i7NekbVWISdGLSxj4ATFgYfhXSxuWMk9Bj284Y+7qw5vZvPL8NJRcq7rWPqWEY6YhpwcjnnuPrTaURF7f2Smr1rfP4o5BmSolxV5MPj7p7atevsUfCXBh3OXlAQ9c3R2k8Fn2ILqCuV8bKI0DXVQkE4/7/+8uME0V+CmJqTDSgFq5cVSmXgmlPemoqIiq152sXEWY2ravozT0KGy7hQqCLQ2qA62gr4Pb5Gum+qD+7RBpPFvka9iUJ0XpN2wB8OK7/3Ib1k2agTgcY6p2FUNnHcGdEyjsUShbgd0BOTJ6mvK18tP8iP/Z/Af+eZq/BVwjPQ9jYA5Tz67Arw3R7nt59XBtuIumwnuGXTGJECKF00brAAn4ecvUv3lhCG32pvtnyGVGNDUvaFjUf+ApHcsFJws5yJJBYCYBHXl+EnYIttMYBJL1XHHw53ASKBgAGAyrc4gHBRgTUyNeXrS0AAAAAAu7NKdNv86ABU5QXQNHR+B0CeeaQTXnDXtRBjXlh31ADsM3WxkQ5OgrvaDi8JkjRaAE8EPjlDznzPEu9uX+2FPxtI9nC5HbAK4Y8lgEv1VMl7CRD75MuZtZEBzctYD04BtkLRxfpsG84V3ITnV1F/fRDEbFjiFVVbtZh6AlPlhByn1/jMSfisP1LLxZeSmVpLCVAxjPScU/bPGzfS7Psrb51OZ6FcuL6UW9tIC/vbeaAjtueZY+mrWHryZIdfPoG/RxD1CwzHLMvYHN6dlrjRZCD06TaF1UsXDk3mtMdlC/Svu49Xbx/ZQrdBx8aLby/Yv1MYiOZBv0s3V46jwyt516sNK4oxD11Tv6C1c0JKD/w/k/as7bNwFUPwgMANl//GnlsjTvcRapGUnrFlaG7k/GGsAC3/tOt8551dfTHJOWsOea97eEPSSuzklDS83dMFtY7ppu7UzoN2I1/m9he68yaiWYJElFspmQr0m+2FdlRhOVr+Y7zkwJESXu73RrM0r0sqzFj9IKqoB2fwhLa6O3RrBQqpoBcee5hyarZr5+nlWxadpeYr/MJ7DgGsNXKyhTY7TncZjK5/kw3WP+DQ/0VvKsaTZMWKkpxempZPAtTgwY/3q/++v9BFm73Gu59ypcxlygBC9hNtWLWZg+wl4qr4W0VkF7cgohVpazkerRB3q6ff+Rq+TyfjnKtaYGp1vcD3tD7ymCr7q3lyrYIBGLDJKbOovUfbUfGK4G+NeAnkI4xPFYORP5C2mPeATPEOFUVAhwATT0Ck65if6Na/q/Sfzbarv5KltcIbBGG6Ma9JC1/n+Hx9BpYuxXVXV6DxBgnmoQyBZINRk/Rt05ApvCtOQDKI+FvW5SjC2/nuZeUxRoDJmZV/Oda0/S/JTOd90WiHyCtO7CFQ3jhV3rcOC4u32/oSx+ii2OoynSiO4Yft5WVzzbS5U1jmyF8ucmHWgO+pZ3F07Eqq1VwPzJy1j5LW8K0zyqFRt9f9/hluGgLh97UMZzs+r/YWHna8laUEI5+NllQaR0etDdZGtZ4kHiAmyWnAWjJTGbZJFrC1wkyft85u6VLiZsgoRI59k+w3sLA4vUqM0idlhUwyoh6etY2nKOHBa64RrUrWs9r2cZEJ+MBYd+MKxKZW2oPw40k9RWr+RiHpRYrGluN3+9clLrC572+cmkuURi7k7K2t6ZuPJ+Hl+9VbirhftwXnJFeC/LNpx+6HYxTJEvr5L22sha5Qf+IxoRgJ6q+f5GyXCjguYTdhTAUJY3z8pOsGwnYo47INX++UwmTCgc7OtBwbPW4X6VBCfUoHKFw2ztuxC0dn93FjBn9XkhqpKutinxGk6voB4j7SXVhuAefSyMhkrAXhCMLcrpfwV7KqZDz00R2nzko9vuHRX021DKRem1CxxCYqIBGY/zFuRDRfSL/rHHiWzCebGaCwihLYM+I98RS01kRZ9gYDRU9HOK2xjUl0CS49dBHm1g1Ok9weyXg7Rc3QBq32EgIlF9Lu0eIVZa76DK2i1gkODu+Z7BUzXUNpAQAAAAACG7sKhstyWoeA7SKij+LoTqUmSsCUnQeg7pg59f9TQjAKYN+76yT+GIwCJBcf5BP5KfSsT3mxJ1645ivxpvzxtJR1QW4wNqhJ4JD9Rtdn24dEuPpbYebAJ10ZQLpfrs8q7TQjjKCE9nVKRNxQWoPMEuCmZ0jr2iw3Mf6fEtjSUdJTS9VLU5Ac6c111B+4KTaY1ss7mnyBQVRN9M8bY/KFqAp1klc1KKW+gS4CKlfcfEFMNvYEmqkzYfnlXBGUtHZhxpJq1HFqb+rvW09h1qUhlL6GdYassYihd1IARfEjTDABw51NgIdQOgI49BaOFzLfkwScftyI+N7rLQ2AbM+ldWHM6pE8i2k/vUjkwsYLIafZjdvObWP1eFIbNisnYSu6yb9qZJ+AY242yV/GWiQigXInOg3yMQeOG6CCUUgyiUvuer9Z4pZgvbmMcd08OoNAVUkhte2ubdk6F+JLINklukjRUi7y1Pq9J4xGqU5Fe2lCyFYPx2Yv6g5F7SAPXN4TvS4u8c2D5eNXFRF6InPTfBsERb81xS8/LaTXtIfUq8wML77CSRY27xFnCVs4Lj0oLFGz0IX2w7QQi8VtiyOPqRDAqLDQSPnibpn5k/aYRZDYw3BzAM7uXtX+ugxMTRQZM5iBBUvAfHy8r7XdbgU4Gkhq+Cv1BTT2OuRzAh6izo1EnVMG1Tbkp3lJaRL/0/U+HvdScFLxdXUhfJautRt89sXtTt2uBIh/W7iSa08bNdGWuF8yL7mkn55Idjk0n2mnjZfqayycSkee/cAmr3CCd+iIeE2fPNNKHNE0hBHbYkyYLsxWvuaOtCMA8PSwjiiXqglE1tGqtj5SkguLm3+l6mRGpbE6Ntv5zQ9jZSPIJyYOnNd4lVEHVPZySqiKpgN8WBCdgKYtKgBOVFHG4WNUbcrroBYE+y9e/iT6BJJaGzpYqMDmDm8ypuW+nW5EmLGwE24N7s/37RtZ+mrJvFC9jkDY+qPCoADYMGbGDlV41mWOX+GHmfkf1bOMMX26G6CPepxoMDY+93hJc4NuTzBH3GYgH7auowTTi+dd4OZebe+RafdGX45rq6295fCQPWyTafoQK6p+SIL7FUykTqakAkl8Bj2QSXouaritq+ZOT9uij0U562j1TPqFzGJH1UnRC6X2Y3vZ+gH6sRaRa1gMcbWGpK6Y4ddHNAH3eopHgUGIXS9KQIVnnPiAUaScY1VAnTaN67+bynjLUDQMOZMXw34D5DxFRDST4KIB/5rMKfGVzV1HJQtVrPTT3Zr9jF2zoNEr/HyZzXjd+4/l1AvfUKYclqKNDaXf+tTPnXC2t2QwLWJvkhmddjxDuucF+YbJBiWRmHDkXU8R9/2AP+/yrIaFqkf1ngL74gv+LGyIR/BbRcsKn1d9i9yGGDRVXB6n29l/7WlnnZy7QBsE0DY2Z9X2pXLIli8i2qEQiBJzDS2Jvp1h6PMSCtOjBdliY3lkO6xx+j8CzeazpU89pnfEZU9d3H9qmtjzBtqb9eMLnoyeLIw5mgpLiuDlweTCFNg1LYEe7nECNOAKT0dD3in2YJHRd5Zc7+oJBcneNHRL59M8bMpxd5gpmnLzmOq+wAMC/Ri7Y9PUHo/Gj1tl/pllNa5p+5fL0C+4IItl0+2inMoOKMjaTIV5dLqhuYYe705E29aw9KAleJXJWhdWtoHjlxLXX+E2DYa9D03SiGpPbIpG2DFAj2tNH5RFs7qqij7NRfDvAAAAAAAoiOsdv0O6h4ipjJMbbmqj/9q5WXiLff71kpvFRZaD1BQ60OPC3FaB98Y4wR7KiVFCSNXsXxweYlfu5GrilLtYp2pz7DbBJkycAO6kS9pmAtvQrI4lq6ePwTwsBTRxsJLNQsx5f3k8VYhEFS8AFFbhJ+UBpD1qPxlN1yzKnitgnZSI0o7R9XUBIgl+peVwJZgY4ZZpF5/pKsogEdC72boKdZ00vIOD7JHxw7qSnyV2CA0RUIooym2CAafuO1gtQUULvflteHFc+MgSxul54hfb/9PYWJToekHAhWaTpSxu001jYvrQ/8SPC4K+5Lbc4Xe/k4mjmeflntrxyrT9LkbVT/izRYwdSgzV4pL5TTDL0Ts5tNnXhEQnQ4iyR96YIcRpCyu+eeA7R4Z8WXtfecDqw90yuLNWPVB7anEVUZwcQi4EcpFR9+ftCNc/Df9A/0C7nm7yBEyZf/5s1y+30Lu+ynup8jKG1e3AStrU6EJjIKR2vQYTYQDDxByySaTbOk3R/7N/TxQQdt2vPsHBroN5uAeG7Hnz/Yo9K3DOHDFaMfqZNS2rjQbwEOWkPo05LHkdZxN7/csJO8KO41ssNz7doNlUhMc0xkU5i3R8xTVPor0VXjA3BcMOt66QVcqDK1nbRkPXTDInmNH82ALHtFoN1aRvlil795yv8M/izKSTf6xKb+l5/gMl3mADYNvmSLjcep0elHSX8LtnHugf1+rwyPltsRqyXVXl8Tq03ASb+8u8NHlvFelPrBKKsPkNpCaZRriPe3GDTHNTJIefNiOyN7V38oz0LR/1CuhsbPz2v3nafa43b4CSLDiTqmfP4UKesKWKn2iirtTcoWBaABcuc+1B+cSqjv1TMfNE8iauw7Q9xjHWERQ8g3ASiS7kCU+VSur6IirSjxFvpmX1kMuCtSJQTXsn5QAvX508dwe3ZuxFVyHjSEdv0t2un9ZBIroVLmxim2R0K6E4Xql3jewvtguhh57blJ1sjZYMMtg4nrkZrYWLZmARYWNW0peXN097JkdiqZzQptGaHV3Ina6ePzoVh+BTmiA7uMw6zld20jDtTzhhJA/cOmAVOnM9RLkFPwKv1u1mWABHdStSi8PbeSvNgG/uv56BWFyd0S8DK8bDnLdMaYPFCBvqGieFFdULvplSmaxZH6XTjLUfdR/klwktwipX/8jQsW1JwyOtpiaedICOzeYNKc7wAB3/D7ArvbVZhXm9WspSIAZL8/D6itMPiHxotEkKh+F0qViAvds/2GotQXqlnj6YDmrB7VKKBk75ey3IgsJO0CCLMPSlNt54C6+vtmD494+RkJQLsbi4JjmSfSbg1aFUwltUTtfB3jH2AcmI7QcZ/+EDdG8atTLmFVPXvAqJzlptZv7lrWmNhB4kKB+lS9hCPG4OBWeGmYchu7TBzEVuO0BYC1iDv+O6s1Z4P9e5gJcwdmrPDQh9OrGz8DQLv3rwyzm3kH8Dqck5DX1oVl4w4IZEbbtZ33x3FihItH9Iwpt82bT91nKUc3pWF+9kt4GTb0Rb7qt9N9+VPTNZPgyute8OltM+iMjLCJEcpzvA1FrrdgsJKPt1OMCsZzTw3Xm1LoteZoxh3U3aO4MLgb8b/80b4njjcfA2vXSzG7O2ha8yhaIUXUoZBwiPayEtKDloJ56Szq5ncPMrflTykGq5qC1q0PfgUiupaE3z8F5GBCdd4iXoSOzuJ0Q3ycjePnzxb1y9m9/qJgfskoCaxzt9CqX/ZQ1/OHITu/+uLuBAEVbop2xjgMUUmc+wvFXw4CFxipSZLjWJmKdXrYlztS2cX/dpdA8KXTONGPMW6lUT2OAAAAAAAAWQ2iosJbNjVTXDMO2FcxKa5GclRzCpdUS+bEvht6yXxnnwIDpfWeVqt8IyMtn8LW0OeaprzE9zI07q+bh6RKpSCwYmhfyRIZa7Po4aX/eRMVdFQzPLgFd3uLKGFgx9WHzA2Y9B7uWjDoi39UtoAMaHZ0enzQRmt5970gijvXLyTczr1rqt4wQlwZo6Ni1jZOyRaBK1bJ6fipw9jKId9sIgK+fQC95Phm1itRYWEX6tJSqg4MfrbXH4w+4oAAAAAAAAAAAFMtJs+pvWlV70sdks6VbdJAP6SrzWNhKjs2URwAAAAAAu8ejQqGVGg3d/FVmCV/ZSeLAmLtI21XnDZnYh7McBTmtM9ef55TBDQ4cNn9gzrrP3612V13mNhqzLb4kIycw8B46v3VlP+XGIHQVwbUPtptJhAPE6TfDb4c6iA3XNgLi4+7SziHBcMzuccduZ32RxBTg/WhW82XhEorRnrJC/sC0O8Y1XlVs1WLbjl54P7dWK8Y4wwX6UM3NDpONI4ZI5I57KPh+sHXMNK75TR+ABqSuWknjmljoM2MfXorrxvcvBPZvwlhzWJa+9tihyuipLJReUSmOWCkr2Y7DfibDq+j9xpmROXdJvIgWFp4+INAk2uiMBT0bvCzTjMNKXkDW9mIbu29LNBMdLLZOpmxBGtAx9wLnZL04WySiLVBJik+AlbOqWpKzwEj27UEz8+DJBZrzL1D3u9zHBjXA1WpEMWUXEwFXkr7fgxIbOwrQkaz4zu4EBfP8dNtatUIztJfWeSso+agit9v+m/h2VhFbKGucjuNv0ygfu8SDxGvc0rDTUTXTMut71tcW7GzbXIhNJIOMdWWOp1j4xjs0UQ7iiavn/r9+Vyv75YkVJ9Ljqi7DA+sJ83x3ng3XrE8ekYxzwS9kRLjBj/v23WJFL04PKYLno6k+Ni42rT4UZwO3St6EIsBT1Iuar65H2ZXGU4r9lVQNB4j7NlnbdJPZ/7pROPuyxczqy6faFts+8EYDL/cPNlncRTZwj5/+XuyZG1e3D4Wu1KhthbkNZc3quR45YNunlLYjcz9sfc8OK4xk3o7DKeX1Zt+Q8U9QiBSC50OLsJIyJ5puIu9P/HCwh9ETwirZPw/ix0QvwEYXSLKLedpQIxGjsDRGtXgEHaOj4J6HAL4HhTr3SZDWX3KYIM5tGyyQmHMpLqcLybcsIrPx7zWcKlnPO7LYOLTmlFY7J3D7mbsZvmb2fusVXoNHk7uvGV9O520Yhy+ojVu9BOzsLLzO7mryzANchyg5YNX9y9xGOgeGLmru7kMnV76FlhY1WX+MdniMWBJQy+aNt9aydT1E17MK136nfK7adqH+cn3tiyODKpXrc0QdB6kC4afkWsW0PZb7T7Oaqk0BeRHEmpYk3FXkoC/auC2Oh98THcpWYf0PAryzwi0BMPa/LKPkE14/JymfNReWCP0CKGB7x+GbBfBTZTWeSZGpjEsta/Nd/EChGezNDYcD+ar94Ry8EDbc72jMm1N1Zr3chDTO9grFtVLmgUqUBTb0EhJ2stiaVctrkcGrDcYdt2iJZGUVquaLxH7m5lASFO09Hni5KVd2IpsnhxzaCSX5uvuTZkotWSIRU5gYXRVVGDiNpLXpYo8r7rdrBIjTD3Lc9kMwrvp0KAz9oAoblOyZwc5fth8zKMWxB9O1z/JpXBMHTHf+Xx6m39dp82L0GLyu3N4FbCvH/Yn56dpvybMA1tcyn0cX7bXNd31MpjxQnLgEnbgI7oMp4Q+s2DYAAAAAA8nG0Slj+/lzDdlIFCQZP0B03TBaTuof6ScLl5NCwjcSs0x5BtA6cgnOZg+w6+z4nIIURC5W9NmJirEnXl+MZN55cdJII+4kAQ51H+d6Ev6NsDCEKTshwXq57wYE53dF40TtjbP6dOptuUV52JIMUI3uKwGiO+PfDmiZYWSMWiWsv1KipFrwezB68QSSkrQc7LMLcWMPnor+5wKIee2LdWv7iIdsnfrrBLCCYo9gl6L6gH4nfyB6nZb556DQlcyWJewxiiS5h6hwIdLDqwgcTV6JUddngr9EOZGbwpxLIV7KYnolOMes/ubk9s4Y5KmYekvBehYHTi7bEOK1ttj9BuKaY63Aj8NNFeePJcLdwfqBGzQ4dDWXALVqmZFZuQej3Ly6JVRlFOpNYd8vXUNQMDF9nydpa0ySZHz4iptvBOsA2f67/J99QUnyIqVSNwtVUE1/hDCc9mb5u16k2t3iiZCDjN2MIf4AftZcK8u1fErKQNKVa01t79Dc4rqlz4afZ2BTnJ6ZjpibNopjxQOkWiKwtHjrVqu4/ATt2XEaRuFy+SU8Cul5mBV845h9YTjxJ8sayJaav8z8Tfie/cot/LNnb48Ctflh7UtlYls99/1Vu/PT88RlWX/2/iRA1oSLEMiKMF/BPXSimbvcC1lYB9WRXhYsTHI2nrsWD+8LUTz/MJnYL3zQ81f8XJNM8SzgbaRlldbK8H5BwIN85zsfoumwRIwqSRZPCaHplefyrC0Tc9RisDumtFidNqQGSmxD9w3WSTYv/BM4R7vBxbEXP5UgBGpIOR8wuiSb5XJWgrUXtuuxUJ8VdrmSYDczos4GuTXpLKUbw3qByw6Rloolu4Re8BX71aE6WpjEfU8OydsQlvaTGBFLYxxWGlmMg4l0gY08fgUUumnEh+zkNHK7Ote3eJMsZUTGLgTGTBkMCynxJ/Nspr0nAIH4f67Kxw7eDcdH2ZesMuBUvGDtz60Xkh1S/zgtg92wjQPlnIFM0Ox7tQkklgiyMg1jUimg12PVPZY/8zV15/fdLLfXlor7ihax9ueIxEfkkiwxh5qo2Bis1nu4eljzPpHO3PaJ/JhKA7SHudnafn5BPXDLEa3fS7ViK2e5CqAN3n4/GgdykHvv3KDX7XCRQ0am4GwxIH3AYtJuQL3TVRezvQhnQ7f9ZOn0XG08UBarvNwlBiCbaFEfpieFl+nZNFoRRhTDWq1xvF+gkOMG4CWcmQHWtivUZx/xqFJqdG2EIKZK0IoACKCiAm37bw1so0hHCNmAx4hPfoX8enlzY7VemTypm6JSEOhzYhtB6WheHiBx6W1NZmWN7U98aTIVNvizvxX8L47AY3J7xrHhekw+MNKNjeok4KsWREweM/NJ1fPhl5ipIlBVH5uY4fkmWNhpKPcqf5O1unoaekm4JlAm8J3w5ccAdcyciCDFK351B7//aN2QBJhhTravL41sQsGHHZVKUVo9GS2Wx6c3Jd2/zhBHFO70sTHJ/57sGNzDb8ENmux6iNq2I+X+KipxUBISpcU4tM6d+8bNtnsG9svQZXcp+7lqkBxi3K/nfdU6nahicngWaUTKxUWS4Zq9jSDqHNdmEa42pyGGmdXA580Tm/ei1Ewj37wLxGBGD5/X/NuJAKrtbMj/bjf48RiXaqfXeZi7fYvQzyRxPoQUvNp8Rk2aCI7hpvfeM++vRaM7zIOuN6z2PZgHw+4I6mm5iXxz2Dphn1fZPt9kxd6ZsgGPpAIHjOYiidgeu7hVHCMPRN3llKDIm8rDXKgQgSrarw0CHH48iovApynd0lkIpxeSTObXvLz+igKjmUUS5zGyHuacZ3c45xt+w4Q55JWSa+t2u/21vA43F5+zF59KGs8JrjBba0Xpw/9UIO6QVdFh5DKHO0OdxklFETitAWyeadLBZ6BFO4FZ5bzl2sYlcfWceiz7JVN2uvxy53n2WRQiY2r5cqx/cFWrz+xZyBJIiN2U/SogeBP+nleSgWeroIIU57/U+JffeJTNp6jUv1868eGQh7/DtF1E23Ileb+yVJ3WUlzdfVmQepFdfIACF8ar3m2TRRMNQryUYVBM0KcqT1awSa76Bf61RgfNFuDhM4GdOf8pgAfaL3OMYiz4xzVYCrc+tNm8phxSY6N+4jVvEX9xaMxfkAs7yrV56a+77ioHfKlBNa+cz9W1/6VXU6+fvGrqUxV1J4bc1vyGN+lz0Exx8kbZ0iEG73/Dz19LOOsYC2i/npTISN46NHNr4bEsrerCT4Mmdo5kyi8G4G9ZCSj+S/30hczwhXyFAqMPVsplbuqSMMMHqWz0XPoCBb89TIMRiWqfpd2IGYstmHHPg0OP2YDxhgt8Ca13aeuGGI7oPmx0rN8HhaISC3aU/cFRm06H/DHJiUVhuKHKk4EAqfwpcLb3/xs/48nIcLqtI1iRMzUiZq/5vH4vjvH0NnlFj3e2tpdEzOTCRtxTdt72uv5Eh7dhEJ5BWxxZcudM7OT92Us86kgwJVrlL1ar3M1HEzYwNxl6mqw2/12krq6yDcCnmnDV/U9TATHYXmUa/ekbd92zQW+vwqmttnpd34ytwwZp7x26lOVXhFdtrYPXZlSj1jme6cw/c/P2H8/7LndYZCV8zH5n2CE0E2l1x1pTDo4hV1NenrZ8MwIJaRUP3H8y1rfgYzR3Ze5vLb0fpg+538gLHycnmWU/clWOtX08e0wW/8qA/afxuvix75e1bnkwZ+yT36FnNKObcLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
            pdf.setFont("Arial");
            pdf.setFontSize(22);
            pdf.setTextColor('#0a6e0b');

            pdf.text('Dispositivos fuera de línea', width / 2, 40, {
                align: 'center'
            });
            pdf.autoTable({
                html: '#dispositivos',
                margin: {
                    top: 45
                },
                theme: 'grid',
                styles: {
                    halign: 'center'
                },
                headStyles: {
                    fillColor: '#6c757d'
                },
            })
            pdf.addImage(imgData, 'jpeg', 0, 0, 220, 22);
            pdf.save('Dispositivos_Offline.pdf');
        },
        clickprueba() {
            this.$toast.open({
                message: 'Correo enviado correctamente',
                type: "info",
                duration: 10000,
                dismissible: true,
                position: "top-right",
            });
            let json = {
                // "nombre": "Giovanni",
                // "email": "donitho@hotmail.com"
                "numero": "+5219988443544"
            };
            // axios.post(messageApi, json).then(data =>{
            //   console.log(data);
            // });

            axios.post(messageWs, json).then(data => {
                console.log(data);
            });

        },
        // ************ TRAER TODAS LAS ALARMAS Y ALERTAS PENDIENTES Y EN PROGRESO ************************
        getAlarmasFromHttp() {

            var page = 1;
            var perPage = 1000;

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
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText)
                console.log("xml request AllAlarms", resp.data);

                this.AllAlarms = resp.data

                var alarmaspendientes = this.AllAlarms.filter(estado => estado.id_clasificacion_alarma == 1);
                this.AlarmasPendientes = alarmaspendientes;
                console.log('Alarmas pendientes:', this.AlarmasPendientes.length);

                var alertaspendientes = this.AllAlarms.filter(estado => estado.id_clasificacion_alarma == 2);
                this.AlertasPendientes = alertaspendientes
                console.log('Alertas pendientes:', this.AlertasPendientes.length);

            }

        },
        getProgresoAlarmasFromHttp() {

            var page = 1;
            var perPage = 1000;

            var idUser = this.id_usuario; //cambiarlo despues por el state
            var typeUser = this.rol; // cambiarlo luego por el state

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
                console.log("xml request AlarmsProgreso", resp);
                var json = resp.data;

                this.AlarmasEnProgreso = json.length;
            }
        },
        // ************ GRAFICAS ************************
        GraficaAlarmas() {

            this.AlarmasDevice = this.items.map(resp => (resp.a));
            let ultimasAlarmas = this.items.map(resp => (resp.a));
            this.UltimasAlarmas = ultimasAlarmas.pop();
            this.AlarmasAlertas = this.items2.map(resp => (resp.a));
            let ultimasAlertas = this.items2.map(resp => (resp.a));
            this.UltimasAlertas = ultimasAlertas.pop();

            var ctx = document.getElementById('myChartAlarmas').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["8:00 am", "10:00 am", "11:00 am", "12:00 am", "4:00 pm", "6:00 pm", "7:00 pm"],
                    datasets: [{

                            label: 'Alarmas',
                            data: this.AlarmasDevice,
                            // backgroundColor: '#b5395e',
                            backgroundColor: '#dc3545',
                            borderColor: '#dc3545',
                            borderWidth: 1,
                            pointBorderColor: '#dc3545',
                            pointBackgroundColor: '#dc3545',
                            pointHoverBackgroundColor: '#dc3545',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointHitRadius: 10,
                            pointRadius: 3,
                            pointBorderWidth: 1,
                            lineTension: 0.1,

                        },
                        {
                            label: 'Alertas',
                            data: this.AlarmasAlertas,
                            // backgroundColor: 'rgba(255, 206, 86, 0.2)',
                            backgroundColor: '#dcb835',
                            borderColor: '#dcb835',
                            borderWidth: 1,

                            pointBorderColor: '#dcb835',
                            pointBackgroundColor: '#dcb835',
                            pointHoverBackgroundColor: '#dcb835',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointHitRadius: 10,
                            pointRadius: 3,
                            pointBorderWidth: 1,
                            lineTension: 0.1
                        }
                    ]
                },
                plugins: [ChartDataLabels],
                options: {
                    plugins: {
                        labels: {
                            display: true,
                            render: 'value',
                            fontColor: '#fff',
                            // fontColor: '#1a2130',
                            // fontColor: '#ffffffb3',
                        },
                        datalabels: {
                            display: false,
                            borderRadius: 7,
                            backgroundColor:'#1a21306e',
                            color: '#ffffff',
                               font: {
                                size: 12,
                                weight: 'bold'
                            }
                        }

                    },
                    //                   plugins: {

                    //   datalabels: {
                    //     color: '#fff'
                    //   }
                    // },
                    legend: {
                        labels: {
                            // fontColor: "#ffffffbd",
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
                                beginAtZero: true,

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
        GraficaHorizontalCuentas() {
            var ctx = document.getElementById('myChartHorizontal').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'horizontalBar',
                data: {

                    labels: ["Sisec", "GrupoOxxo", "GrupoZigbmax", "GrupoCumbres"],
                    datasets: [{
                        label: 'Horas',
                        // data: this.AlarmasDevice,
                        data: [100, 70, 50, 30, 10],
                        backgroundColor: '#1d8cf8',
                        borderColor: '#1d8cf8',
                        borderWidth: 2,
                        pointBorderColor: '#1d8cf8',
                        pointBackgroundColor: '#1d8cf8',
                        pointHoverBackgroundColor: '#1d8cf8',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointHitRadius: 10,
                    }]
                },
                options: {

                    legend: {
                        display: false,
                        labels: {
                            fontColor: "#fff",
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
                                beginAtZero: true,
                                // mirror:true,
                                // padding:1,
                                // showLabelBackdrop: false

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
                        }],

                    }
                }
            });
        },
        GraficaHorizontalEmpleados() {
            var ctx = document.getElementById('productividad').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'horizontalBar',
                data: {
                    labels: ["Mark", "Juan", "Pedro", "Jacobo", "Daniel", "Juan", "Melchor"],
                    datasets: [{
                        label: 'Horas',
                        data: [100, 80, 70, 60, 50, 40, 30],
                        // data: this.AlarmasAlertas,
                        // #42b883
                        backgroundColor: '#42b883',
                        borderColor: '#42b883',
                        borderWidth: 2,
                        pointBorderColor: '#42b883',
                        pointBackgroundColor: '#42b883',
                        pointHoverBackgroundColor: '#42b883',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointHitRadius: 10,
                        pointRadius: 0,
                    }]
                },
                options: {
                    plugins: {
                        labels: {
                            render: 'value',
                            fontColor: '#ffffffb3'
                        }

                    },
                    elements: {
                        line: {
                            tension: 0

                        }
                    },
                    legend: {
                        display: false,
                        labels: {
                            fontColor: "#fff",
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

.table-tamaño {
    font-size: 9.7pt;
    /* font-weight: 300; */
    width: 95%;
    margin-left: 2.5%;
}

.scrollable {
    height: 300px;
    overflow: scroll;
}

.home .text {
    font-size: 30px;
    font-weight: 500;
}

.card {
    background: #1a2130;
    /* background: #27293d; */
    height: 100%;
}

.top-bottom-graficas {

    margin-bottom: 1rem;
}

.gauges {
    margin-bottom: 1rem;
}

.gauges .card {
    height: 16.5rem
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
    /* color: #ffffffbd; */
    color: #ffffff;
    text-transform: uppercase;
}

.card-header-tables {
    /* color: #ffffffbd; */
    color: #ffffff;
    text-transform: uppercase;
    font-size: 14px;
}

.list-group-item {

    /* color: #ffffffb3; */
    color: #ffffff;
    background-color: #1a2130;
    border-bottom: 1px solid #ffffff14;
    font-size: 1rem;
}

.btn-pdf {
    font-size: 1rem;
    /* font-size: 1.5rem; */
    float: right;
    /* color: #3dcc5b; */

}

.btn-pdf:hover {
    /* color: #00ff35; */

}

.resumen-card {
    margin-bottom: 1rem;
    color: #fff;
    text-align: center;
}

input {
    background-color: #7d80920d !important;
    /* border: 1px solid #79c6ba !important; */
    border: 1px solid #799cc6a1 !important;
    color: #ffffff99;
    /* font-size: 1rem; */
}

input:disabled {

    color: #fff
}

.form-control {
    text-align: center;
}

Table {
    border-color: #ffffff1a;
}

tr {
    color: #ffffffb3;
}

.table> :not(:first-child) {
    border-top: 0px solid #ffffff1a;
    /* padding: 12px 7px; */
}

.table-hover>tbody>tr:hover>* {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: #ffffff;
}

.t-head-table {
    font-size: 13px;
    text-transform: uppercase;
    /* color: #ffffff99; */
    color: #ffffffbd;
}

.t-body-table {
    font-size: 15px;
    /* color: #ffffffbd; */
}

.badge {
    font-size: 1rem;
}

.btn-successs {
    color: #fff;
    /* background-color: #242c3c; */
    /* background-color: #b5395e; */
    background-color: #1d6f7a;
    border-color: #1d6f7a;
    /* border-color: #6cc7eb; */
    /* border-color: #146c43; */
}

.btn-successs:hover {
    color: #fff;
    background-color: #1a2130;
    border-color: #248795;

}

.btn.btn-successs:focus {
    border-color: #248795;
    box-shadow: 0 0 3px 0.1rem #1d6f7ab0;
}

.btn-dangerr {
    color: #fff;
    background-color: #242c3c;
    border-color: #8c6ceb;
    text-transform: capitalize;
    /* font-size: 1rem; */
}

.btn-dangerr:hover {
    color: #fff;
    background-color: #8c6ceb;
    border-color: #8c6ceb;
}

/* .btn.btn-dangerr:focus {
 border-color: #8c6ceb;
        box-shadow: 0 0 5px 0.3rem rgba(83, 33, 177, 0.486);
} */
.btn-check:checked+.btn-outline-primary,
.btn-check:active+.btn-outline-primary,
.btn-outline-primary:active,
.btn-outline-primary.active,
.btn-outline-primary.dropdown-toggle.show {
    color: #fff;
    background-color: #7357c5;
    border-color: #7357c5;
    box-shadow: 0 0 9px 0.3rem rgba(83, 33, 177, 0.486);
}

.btn-texto-cards-bage {
    color: #fff;
    text-transform: uppercase;
    cursor: unset;

}

.btn.btn-texto-cards-bage:focus {
    border-color: #1a2130;
    box-shadow: 0 0 3px 0.1rem #1a2130;

}

.btn-texto-cards-bage span {
    font-size: 12px
}

@media only screen and (min-width: 1800px) {
    .card2 {
        width: 53rem;
    }

    .gauges .card {
        height: 20.5rem
    }

    label {

        font-size: 2rem;
    }

    .list-group-item {

        font-size: 1.1rem;
    }

    .badge {
        font-size: 1.1rem;
    }

    .btn-dangerr {
        font-size: 0.980rem;
    }
}
</style>

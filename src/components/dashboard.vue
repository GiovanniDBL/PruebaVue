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
                            Alarmas de la semana
                            <button @click="dowloadPdf" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button>

                        </div>
                        <div class="card-body ">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Últimas Alarmas:
                                    <span class="badge rounded-pill bg-danger ">{{UltimasAlarmas}}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Últimas Alertas:
                                    <span class="badge rounded-pill bg-warning" style="color:#000">{{UltimasAlertas}}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
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
                                </li>

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
                            Cuentas con más actividad 
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
                            Productividad de Empleados
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
                            Dispositivos fuera de línea
                            <button @click="PDF_dispositivos" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button>

                        </div>
                        <div class="card-body ">
                            <div class="scrollable">
                                <table id="dispositivos" class="table table-tamaño table-hover">
                                    <thead style="background:#6c757d" >
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
                            Cuentas con más actividad
                            <button @click="dowloadPdf" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button>
                        </div>
                        <div class="card-body">
                            <div class="scrollable">
                                <table class="table table-tamaño table-hover">
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
                            Dispositivos fuera de línea
                            <button @click="dowloadPdf" class="btn btn-success btn-successs btn-sm" style="float: right">PDF <i type="button" class="fas fa-download"></i></button>

                        </div>
                        <div class="card-body ">
                            <div class="scrollable">
                                <table class="table table-tamaño table-hover">
                                    <thead style="background:#6c757d">
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
import 'chartjs-plugin-labels';
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
        VueGauge
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
            rol: localStorage.getItem('id_tipousuario')

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
        let imgData = 'data:image/webp;base64,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05ErmADz+Sb5EQh9MCNz8uG+lEjyYKffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmfbAAP7/cwh/iwhrFVf/FQ79+Uu6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEt5TicDxx58cwzv5EUtFXVOW1t3G6BYHu85T/QtfcJx8AxHI/dKMZMFBz49WMaJ8DeLYHsCmvM/0YtpyLnbTVxy35c6Sfl9Q4h2ItNRGQ9a69+4dhs6VNebE/EyhigqpUMHWYjrW1lAGXlDmFTv7SOf+OIKa7pErWvCepSi+aTVCHeYJCIJ4qemVmn61g3QeBdfkcmGTKTzSgSAAAAAACp+W3w+Sr5ItD2ULMy5k2cpJKEDYmsfWjA8+0YZj9cRNEjn+8Ul/MP4ZvUqxH8lUFItgiXso4TuFc0f3qROLnE2Ip3/JI65aR/bUM2TOJwnZGPI0w0ilOyfAxZ1z7RbQwsJfzfhzudMzv29ZXgTwTNs9jZItAAJBrB0KUt8ZWm0uwDH15/WHlOcaplxjpuJUkO0a/iSMjh3S4lAMaoRjHgdu3PLAqQrEAAAAAAAi1CfEfkP9hskEzYcBxOXowincj9Apc3OMIjVquuCj7mJWseG6jy5VZOkrKB/tO2A2atxNtkELr2Gi4HcgfAjSubU0D5ZN4n+rIUwIgWeem2qEdll5f3YNvAVA6hf3A7Fdc0+RQdkscPxluFaszpTCEiRHQ3EMlj/U7YxC4bxTZJfnwdxqP77cp2E0i7Wzob0JFZKzeIB1TO1wuTJyiB+WzVupF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';
            pdf.text('Cuentas con más actividad',width/2, 20, { align: 'center' });
            pdf.autoTable({
                html:'#actividad',
                margin: { top: 30 },
                theme:'grid',
                styles: { halign: 'center' },
                headStyles: {fillColor: '#0d6efd'},
                // bodyStyles: {fillColor: '#85ade9'}
            })
        
            pdf.addImage(imgData, 'jpeg', 10, 40, 180, 40);
            pdf.save('Cuentas_Mayor_Actividad.pdf');
        },
        PDF_Productividad() {
        var pdf = new jsPDF();
        var width = pdf.internal.pageSize.getWidth()
        pdf.text('Empleados con mayor productividad',width/2, 20, { align: 'center' });
            pdf.autoTable({
                html:'#productividaad',
                margin: { top: 30 },
                theme:'grid',
                styles: { halign: 'center' },
                headStyles: {fillColor: '#198754'},
            })
        
            pdf.save('Empeados_Mayor_Productividad.pdf');
        },
        PDF_dispositivos() {
        var pdf = new jsPDF();
        var width = pdf.internal.pageSize.getWidth()
        pdf.text('Dispositivos fuera de línea',width/2, 20, { align: 'center' });
            pdf.autoTable({
                html:'#dispositivos',
                margin: { top: 30 },
                theme:'grid',
                styles: { halign: 'center' },
                headStyles: {fillColor: '#6c757d'},
            })
        
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

                options: {
                    plugins: {
                        labels: {
                            render: 'value',
                            fontColor: '#ffffffb3',
                        }

                    },
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
    background-color: #2a9bab;
    border-color: #2a9bab;

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

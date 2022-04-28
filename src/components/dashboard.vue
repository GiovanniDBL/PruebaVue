<template>
<div>
    <sidebar></sidebar>
    <section class="home animated fadeIn">
        <!-- <button type="button" class="btn btn-primary" @click="clickprueba()">toast</button> -->
        <!-- <vue-gauge :refid="'type-unique-id'"></vue-gauge> -->
        <!-- <div class="card resumen-card">
<div class="card-header">
<button  @click="dowloadPdf" style="float:right" type="button" class="btn btn-success btn-sm">Descargar Documento PDF  <i class="fas fa-download btn-pdf"></i></button>

</div>
            <div class="card-body">
                <form class="row g-3">
                    <div class="col-md-3">
                        <label for="validationDefault01" class="form-label">NameDevice</label>
                        <input type="text" class="form-control" id="validationDefault01" value="414150" placeholder="414150" disabled>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault02" class="form-label">NameUbica</label>
                        <input type="text" class="form-control" id="validationDefault02" value="Sucursal 1" placeholder="Sucursal 1" disabled>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault02" class="form-label">cuentasCreatedDate</label>
                        <input type="text" class="form-control" id="validationDefault02" v-model="pruebafecha" placeholder="2021-11-19T11:12:56.000Z" disabled>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault02" class="form-label">direccionUbiInt</label>
                        <input type="text" class="form-control" id="validationDefault02" value="Cajero 5" placeholder="Cajero 5" disabled>
                    </div>

                    <div class="col-md-3">
                        <label for="validationDefault02" class="form-label">nombCuidadUbic</label>
                        <input type="text" class="form-control" id="validationDefault02" value="Cancún" placeholder="Cancún" disabled>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault02" class="form-label">ubicacionDir</label>
                        <input type="text" class="form-control" id="validationDefault02" value="Plaza las américas" placeholder="Plaza las américas" disabled>
                    </div>
                    <div class="col-md-2">
                        <label for="validationDefault01" class="form-label">Temperatura</label>
                        <input type="text" class="form-control" id="validationDefault01" v-model="ultimatemp" disabled>
                    </div>
                    <div class="col-md-2">
                        <label for="validationDefault02" class="form-label">Vibración</label>
                        <input type="text" class="form-control" id="validationDefault02" v-model="ultimavib" disabled>
                    </div>
                    <div class="col-md-1">
                        <label for="validationDefault02" class="form-label">Gas</label>
                        <input type="text" class="form-control" id="validationDefault02" v-model="ultimagas" disabled>
                    </div>
                    <div class="col-md-1">
                        <label for="validationDefault02" class="form-label">Voltaje</label>
                        <input type="text" class="form-control" id="validationDefault02" value="0" disabled>
                    </div>

                </form>
            </div>
        </div>
    -->
        <div class=" top-bottom-graficas">
            <div class="row">
                <div class="col-8">
                    <div class="card ">
                        <div class="card-header">
                            Grafica Alarmas de la semana
                            <div class="card-body text-end">
                                <!-- <canvas id="linechart-alarmas" style="position: relative; height:20vh; width:30vw;"></canvas> -->
                                <!-- <div style="background:rgba(255, 206, 86, 0.2);border:2px solid rgba(255, 206, 86, 1)" ><br> <br></div> -->
                                <canvas id="myChartAlarmas" style="position: relative; height:20vh; width:30vw;"></canvas>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style="">
                        <div class="card-header">
                            Alarmas de la semana
                            <!-- <i class="fas fa-file-download btn-pdf" @click="dowloadPdf"></i> -->
                            <i type="button" class="fas fa-file-pdf btn-pdf" @click="dowloadPdf"></i>

                        </div>
                        <div class="card-body ">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Últimas Alarmas:
                                    <span class="badge bg-primary">{{UltimasAlarmas}}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Últimas Alertas:
                                    <span class="badge bg-primary">{{UltimasAlertas}}</span>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div class=" top-bottom-graficas">
            <div class="row">
                <div class="col-4">
                    <div class="card ">
                        <div class="card-header card-header-tables">
                            Cuentas con más actividad

                        </div>
                        <div class="card-body text-end">
                            <div class="scrollable">
                                <table class="table table-tamaño table-hover">
                                    <thead>
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
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
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
                            Empleados con mayor productividad
                            <!-- <i class="fas fa-file-download btn-pdf" @click="dowloadPdf"></i> -->
                            <!-- <i type="button" class="fas fa-file-pdf btn-pdf"  @click="dowloadPdf"></i> -->

                        </div>
                        <div class="card-body ">
                            <div class="scrollable">
                               <table class="table table-tamaño table-hover">
                                    <thead>
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
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
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
                            <!-- <i class="fas fa-file-download btn-pdf" @click="dowloadPdf"></i> -->
                            <!-- <i type="button" class="fas fa-file-pdf btn-pdf"  @click="dowloadPdf"></i> -->

                        </div>
                        <div class="card-body ">
                            <div class="scrollable">
                               <table class="table table-tamaño table-hover">
                                    <thead>
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
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <!-- <div class="top-bottom-graficas">
            <div class="row">
                <div class="col-6">
                    <div class="card ">
                        <div class="card-header">
                            Grafica Alarmas de la semana
                            <div class="card-body text-end">
                                <canvas id="myChartHora" style="position: relative; height:20vh; width:30vw;"></canvas>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-6">
                    <div class="card ">
                        <div class="card-header">
                            Grafica Alarmas de la semana
                            <div class="card-body text-end">
                                <canvas id="myChartHora2" style="position: relative; height:20vh; width:30vw;"></canvas>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div> -->

    </section>
</div>
</template>

<script>
import sidebar from './Sidebar';
import VueGauge from 'vue-gauge';
import {
    Chart
} from 'chart.js';
import ChartAlarmas from '../../graficas/alarmas.js'
import ChartHoras from '../../graficas/horas.js'
import planetChartData2 from '../../graficas/linechart2.js'
import axios from 'axios'
import jsPDF from 'jspdf'
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
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
            ],
            items2: [{
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 100)
                },
            ],
            AlarmasDevice: [],
            AlertasDevice: [],
            UltimasAlarmas: [],
            UltimasAlertas: [],

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
        // this.GraficaHora();
        // this.GraficaHora2();

    },
    methods: {
        dowloadPdf() {

            var pdf = new jsPDF();
            pdf.text(35, 25, 'Alarmas de la semanas');
            pdf.text(35, 30, 'Últimas alarmas:' + this.UltimasAlarmas);
            pdf.text(35, 35, 'Últimas alertas:' + this.UltimasAlertas);
            pdf.save('Info.pdf');
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
                    labels: ["8:49 am", "10:49 am", "11:49 am", "12:49 am", "4:49 pm", "6:49 pm", "7:49 pm"],
                    datasets: [{
                            label: 'Alarmas',
                            data: this.AlarmasDevice,
                            backgroundColor: '#fd202033',
                            borderColor: 'rgb(203 53 87)',
                            borderWidth: 1,
                            pointBorderColor: 'rgb(203 53 87)',
                            pointBackgroundColor: 'rgb(203 53 87)',
                            pointHoverBackgroundColor: 'rgb(203 53 87)',
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
                            backgroundColor: '#474420',
                            borderColor: '#cbb035',
                            borderWidth: 1,

                            pointBorderColor: '#cbb035',
                            pointBackgroundColor: '#cbb035',
                            pointHoverBackgroundColor: '#cbb035',
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
                    legend: {
                        labels: {
                            fontColor: "#ffffffbd",
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
                                fontColor: '#858689',
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
                                fontColor: '#858689'

                            },
                        }]
                    }
                }
            });
        },
        GraficaHora() {
            var ctx = document.getElementById('myChartHora').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    datasets: [{
                        label: 'Horas',
                        data: this.AlarmasDevice,
                        backgroundColor: '#293341',
                        borderColor: '#42b883',
                        borderWidth: 2,
                        pointBorderColor: '#42b883',
                        pointBackgroundColor: '#42b883',
                        pointHoverBackgroundColor: '#42b883',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointHitRadius: 10,
                    }]
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: "#ffffffbd",
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
                                fontColor: '#858689',
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
                                fontColor: '#858689'

                            },
                        }]
                    }
                }
            });
        },
        GraficaHora2() {
            var ctx = document.getElementById('myChartHora2').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    datasets: [{
                        label: 'Horas',
                        data: this.AlarmasAlertas,
                        backgroundColor: '#2e3054',
                        borderColor: '#1d8cf8',
                        borderWidth: 2,
                        pointBorderColor: '#1d8cf8',
                        pointBackgroundColor: '#1d8cf8',
                        pointHoverBackgroundColor: '#1d8cf8',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointHitRadius: 10,
                        pointRadius: 0,
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
                            fontColor: "#ffffffbd",
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
                                fontColor: '#858689',
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
                                fontColor: '#858689'

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
    color: #ffffffbd;
    text-transform: uppercase;
}
.card-header-tables {
    color: #ffffffbd;
    text-transform: uppercase;
    font-size: 14px;
}

.list-group-item {

    color: #ffffff;
    background-color: #1a2130;
    border-bottom: 1px solid #ffffff14;
}

.btn-pdf {
    font-size: 1rem;
    /* font-size: 1.5rem;
    float: right;
  color: #3dcc5b; */

}

.btn-pdf:hover {
    color: #00ff35;

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
}
</style>

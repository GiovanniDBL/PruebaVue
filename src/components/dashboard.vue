<template>
<div>
    <sidebar></sidebar>
    <section class="home animated fadeIn">
        <!-- <button type="button" class="btn btn-primary" @click="clickprueba()">toast</button> -->
        <!-- <vue-gauge :refid="'type-unique-id'"></vue-gauge> -->

        <div class="gauges">
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <div class="card-header">
                            Temperatura
                        </div>

                        <vue-gauge :refid="'area1'" :options="{'chartWidth':'390','needleValue':ada,'arcDelimiters':[49,79],
  'centralLabel':ada+'°'+'C','needleColor':'#1abb97','arcColors':['rgb(61,204,91','rgb(239,214,19)','rgb(255,84,84)'],
  'rangeLabel':['0','100'],'needleStartValue':'0', 'arcLabels':['49','79'],'arcPaddingColor':'#1a2130','arcPadding':7}"></vue-gauge>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-header">
                            Temperatura
                        </div>
                        <vue-gauge :refid="'area2'" :options="{'chartWidth':'390','needleValue':adaa,'arcDelimiters':[49,79],
  'centralLabel':adaa+'°'+'C','needleColor':'#1abb97','arcColors':['rgb(61,204,91','rgb(239,214,19)','rgb(255,84,84)'],
  'rangeLabel':['0','100'],'needleStartValue':'0','arcLabels':['49','79'],'arcPaddingColor':'#1a2130','arcPadding':7}"></vue-gauge>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-header">
                            Temperatura
                        </div>
                        <vue-gauge :refid="'area3'" :options="{'chartWidth':'390','needleValue':adaaa,'arcDelimiters':[49,79],
  'centralLabel':adaaa+'°'+'C','needleColor':'#1abb97','arcColors':['rgb(61,204,91','rgb(239,214,19)','rgb(255,84,84)'],
  'rangeLabel':['0','100'],'needleStartValue':'0','arcLabels':['49','79'],'arcPaddingColor':'#1a2130','arcPadding':7}"></vue-gauge>
                    </div>
                </div>
            </div>
        </div>

        <div class=" top-bottom-graficas">
            <div class="row">
                <div class="col-8">
                    <div class="card ">
                        <div class="card-header">
                            Grafica Alarmas de la semana
                            <div class="card-body text-end">
                                <!-- <canvas id="linechart-alarmas" style="position: relative; height:20vh; width:30vw;"></canvas> -->
                                <canvas id="myChartAlarmas" style="position: relative; height:20vh; width:30vw;"></canvas>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style="">
                        <div class="card-header">
                            Alarmas de la semana

                        </div>
                        <div class="card-body ">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Enero:
                                    <span class="">{{ultimoarrayn}}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Enero:
                                    <span class="">asdasd</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Enero:
                                    <span class="">asdasd</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Enero:
                                    <span class="">asdasd</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Enero:
                                    <span class="">asdasd</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Enero:
                                    <span class="">asdasd</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div class="top-bottom-graficas">
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
        </div>
        <!-- <div>
            <div class="row">
                <div class="col">
                    <div class="card card2">
                        <div class="card-header">
                            Supervisión por hora
                            <div class="card-body text-end">
                                <canvas id="linechart-horas" style="position: relative; height:25vh; width:30vw;"></canvas>

                            </div>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card card2">
                        <div class="card-header">
                            Supervisión por hora
                            <div class="card-body text-end">
                                <canvas id="linechart-pendiente" style="position: relative; height:25vh; width:30vw;"></canvas>
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
            items: [{
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
            ],
            items2: [{
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
                {
                    a: Math.floor(Math.random() * 300)
                },
            ],
            AlarmasDevice:[],
            AlertasDevice:[],
            ultimoarrayn:'',
            // aleatorrio: Math.floor(Math.random()*100)
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
        this.GraficaHora();
        this.GraficaHora2();
    },
    methods: {
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
            this.AlarmasDevice= this.items.map( resp => (resp.a));
            this.AlarmasAlertas= this.items2.map( resp => (resp.a));
            this.ultimoarrayn = this.items.map.map( resp => (resp.a));
          
            var ctx = document.getElementById('myChartAlarmas').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    datasets: [{
                            label: 'Alarmas',
                            data: this.AlarmasDevice,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 2,
                            pointBorderColor: 'rgba(255,99,132,1)',
                            pointBackgroundColor: 'rgba(255,99,132,1)',
                            pointHoverBackgroundColor: 'rgba(255,99,132,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointHitRadius: 10,
                            pointRadius: 2,
                        },
                        {
                            label: 'Alertas',
                            data: this.AlarmasAlertas,
                            backgroundColor: 'rgba(255, 206, 86, 0.2)',
                            borderColor: 'rgba(255, 206, 86, 1)',
                            borderWidth: 2,

                            pointBorderColor: 'rgba(255, 206, 86, 1)',
                            pointBackgroundColor: 'rgba(255, 206, 86, 1)',
                            pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointHitRadius: 10,
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
                        data:this.AlarmasDevice,
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
    /* margin-top: 2rem; */

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
    height: 18rem
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

@media only screen and (min-width: 1800px) {
    .card2 {
        width: 53rem;
    }
}
</style>

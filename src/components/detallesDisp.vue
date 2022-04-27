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
                            Temperatura {{asdf}}
                        </div>
 <canvas id="gaugeTemp" style="position: relative; height:26vh; width:30vw;"></canvas>
                        <!-- <vue-gauge :refid="'area1'" :options=options></vue-gauge> -->
                        <!-- <vue-gauge :refid="'area1'" :options="{'chartWidth':'390','needleValue':ada,'arcDelimiters':[49,79],
  'centralLabel':ada+'°'+'C','needleColor':'#1abb97','arcColors':['rgb(61,204,91','rgb(239,214,19)','rgb(255,84,84)'],
  'rangeLabel':['0','100'],'needleStartValue':'0', 'arcLabels':['49','79'],'arcPaddingColor':'#1a2130','arcPadding':7}"></vue-gauge> -->
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-header">
                            Vibración
                        </div>
                         <canvas id="gaugeVib" style="position: relative; height:26vh; width:30vw;"></canvas>
                        <!-- <vue-gauge :refid="'area2'" :options="{'chartWidth':'390','needleValue':adaa,'arcDelimiters':[49,79],
  'centralLabel':adaa+'°'+'C','needleColor':'#1abb97','arcColors':['rgb(61,204,91','rgb(239,214,19)','rgb(255,84,84)'],
  'rangeLabel':['0','100'],'needleStartValue':'0','arcLabels':['49','79'],'arcPaddingColor':'#1a2130','arcPadding':7}"></vue-gauge> -->
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-header">
                            Gas
                        </div>
                         <canvas id="gaugeGas" style="position: relative; height:26vh; width:30vw;"></canvas>
                        <!-- <vue-gauge :refid="'area3'" :options="{'chartWidth':'390','needleValue':adaaa,'arcDelimiters':[49,79],
  'centralLabel':adaaa+'°'+'C','needleColor':'#1abb97','arcColors':['rgb(61,204,91','rgb(239,214,19)','rgb(255,84,84)'],
  'rangeLabel':['0','100'],'needleStartValue':'0','arcLabels':['49','79'],'arcPaddingColor':'#1a2130','arcPadding':7}"></vue-gauge> -->
                    </div>
                </div>
            </div>
        </div>

        <div class=" top-bottom-graficas">
            <div class="row">
                <div class="col-6">
                    <div class="card ">
                        <div class="card-header">
                            Grafica de Temperatura
                            <div class="card-body text-end">
                                <!-- <canvas id="linechart-alarmas" style="position: relative; height:20vh; width:30vw;"></canvas> -->
                                <canvas id="GraficaTemp" style="position: relative; height:20vh; width:30vw;"></canvas>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-6">
                    <div class="card ">
                        <div class="card-header">
                            Grafica de vibración
                            <div class="card-body text-end">
                                <canvas id="GraficaVib" style="position: relative; height:20vh; width:30vw;"></canvas>
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
                        <div class="card-header">
                            Grafica de gas
                            <div class="card-body text-end">
                                <canvas id="GraficaGas" style="position: relative; height:20vh; width:30vw;"></canvas>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-6">
                    <div class="card ">
                        <div class="card-header">
                            Grafica de voltaje
                            <div class="card-body text-end">
                                <canvas id="GraficaVolt" style="position: relative; height:20vh; width:30vw;"></canvas>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <!-- <div style="margin-bottom:10rem" >

 <canvas id="canvas" style="position: relative; height:20vh; width:30vw;"></canvas>
        </div> -->
    </section>
</div>
</template>

<script>
import sidebar from './Sidebar';
import VueGauge from 'vue-gauge';
import GaugeController from 'chartjs-gauge';
import 'chartjs-plugin-labels';

import {
    Chart
} from 'chart.js';
import ChartAlarmas from '../../graficas/alarmas.js'
import ChartHoras from '../../graficas/horas.js'
import planetChartData2 from '../../graficas/linechart2.js'
import axios from 'axios'
import jsPDF from 'jspdf'
import moment from 'moment'
import datalabels from 'chartjs-plugin-labels'
import datalabelss from 'chartjs-plugin-datalabels'
let messageApi = 'http://localhost:3000/formulario/';
let messageWs = 'http://localhost:3000/sendwhatsapp';
export default {
    name: "detallesDispComponent",
    components: {
        sidebar,
        VueGauge,
        GaugeController,
        datalabels,
        datalabelss,
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
            timedevice: [],
            tempdevice: [],
            vibraciondevice: [],
            gasdevice: [],
            voltdevice: [],
            ultimatemp: '',
            ultimavib: '',
            ultimagas: '',
            options:{
                
                      chartWidth:400,
                needleValue:  30,
                arcColors: ['rgb(61,204,91','rgb(239,214,19)','rgb(255,84,84)'],
                arcDelimiters: [49,79],
                rangeLabel: ['0','100'],
                centralLabel: "30°C",
                needleColor:'#1abb97',
                needleStartValue: 0,
                arcLabels:['49','79'],
                arcPaddingColor: '#1a2130',
                arcPadding: 7
            },
            idDevice: '',
            idUserLoged: localStorage.getItem('id_usuario'),
            typeUserLoged: localStorage.getItem('id_tipousuario'),
            GlobalApi: this.globalVar,
            
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
               
           
                }

                this.GraficaTemp();
                this.GraficaVib();
                this.GraficaGas();
                this.GraficaVolt();
                this.gaugeTemp();
                this.gaugeVib();
                this.gaugeGas();
            }
        },

        // ************ GRAFICAS ************************
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
                        pointRadius: 3,
                        pointBorderWidth: 1,
                        lineTension: 0.1,

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
        gaugeTemp(){
            var ctx = document.getElementById("gaugeTemp").getContext("2d");

var chart = new Chart(ctx, {
  type: 'gauge',
  data: {
    datasets: [{
      value: this.ultimatemp,
      minValue: 0,
      data: [49, 79,100],
      backgroundColor: ['rgb(61,204,91)', 'rgb(239,214,19)', 'rgb(255,84,84)'],
      borderColor: "#1a2130",
      borderWidth: 7
    }]
  },
  options: {

responsive: true,
 cutoutPercentage: 65,
    needle: {
      radiusPercentage: 2,
      widthPercentage: 5,
      lengthPercentage:20,
      color: '#1abb97'
    },
    valueLabel: {
      display: true,
      formatter: (value) => {
        return Math.round(value) + '°C';
      },
      fontSize: 37.5,
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: '#1a2130',
      borderRadius: 50,
      padding: {
        top: 20,
        bottom: 10,
      },

    },
   

    
  }
});
        },
        gaugeVib(){
            var ctx = document.getElementById("gaugeVib").getContext("2d");

var chart = new Chart(ctx, {
  type: 'gauge',
  data: {
    datasets: [{
      value: this.ultimavib,
      minValue: 0,
      data: [this.ultimavib, 100],
      backgroundColor: ['#009ad9', 'gray','gray'],
      borderColor: "#1a2130",
      borderWidth: 0
    }]
  },
  options: {
responsive: true,
 cutoutPercentage: 65,
    needle: {
      radiusPercentage: 2,
      widthPercentage: 5,
      lengthPercentage:20,
      color: '#1abb97'
    },
    valueLabel: {
      display: true,
      formatter: (value) => {
        return Math.round(value) + '°C';
      },
      fontSize: 37.5,
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: '#1a2130',
      borderRadius: 50,
      padding: {
        top: 20,
        bottom: 10,
      },

    },


    
  }
});
        },
        gaugeGas(){
            var ctx = document.getElementById("gaugeGas").getContext("2d");

var chart = new Chart(ctx, {
  type: 'gauge',
  data: {
    datasets: [{
      value: this.ultimagas,
      minValue: 0,
      data: [49, 79,100],
      backgroundColor: ['rgb(61,204,91)', 'rgb(239,214,19)', 'rgb(255,84,84)'],
      borderColor: "#1a2130",
      borderWidth: 7
    }]
  },
  options: {
responsive: true,
 cutoutPercentage: 65,
    needle: {
      radiusPercentage: 2,
      widthPercentage: 5,
      lengthPercentage:20,
      color: '#1abb97'
    },
    valueLabel: {
      display: true,
      formatter: (value) => {
        return Math.round(value) + '°C';
      },
      fontSize: 37.5,
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: '#1a2130',
      borderRadius: 50,
      padding: {
        top: 20,
        bottom: 10,
      },

    },
     plugins:{
            labels: {
              render: 'value',
              fontSize: 20,
              fontColor: '#ffffff',
              fontStyle: 'bold',
              shadowColor: 'rgba(255,0,0,0.75)',
              arc: false,
            
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

.list-group-item {

    color: #ffffff;
    background-color: #1a2130;
    border-bottom: 1px solid #ffffff14;
}

.btn-pdf {
    font-size: 1.5rem;
    float: right;
    color: #3dcc5b;

}

.btn-pdf:hover {
    color: #00ff35;

}

@media only screen and (min-width: 1800px) {
    .card2 {
        width: 53rem;
    }
}
</style>

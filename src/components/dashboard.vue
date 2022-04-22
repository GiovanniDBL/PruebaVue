<template>
<div>
    <sidebar></sidebar>
    <section class="home animated fadeIn">
        <!-- <button type="button" class="btn btn-primary" @click="clickprueba()">toast</button> -->
 <!-- <vue-gauge :refid="'type-unique-id'"></vue-gauge> -->

        <div class="card ">
            <div class="card-header">
                Alarmas de la semana
                <div class="card-body text-end">
                    <canvas id="linechart-alarmas" style="position: relative; height:14vh; width:30vw;"></canvas>
                </div>
            </div>

        </div>

        <div>
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

        </div>
 <div class="card ">
  <vue-gauge :refid="'type-unique-id'" :options="{'chartWidth':'350','needleValue':ada,'arcDelimiters':[40,60],
  'centralLabel':ada+'%','needleColor':'#1abb97','arcColors':['rgb(61,204,91','rgb(239,214,19)','rgb(255,84,84)'],
  'rangeLabel':['0%','100%'],'needleStartValue':'0','fill':'#fff'}"></vue-gauge>
  <vue-gauge :refid="'type-unique-id'" :options="{'chartWidth':'350','needleValue':adaa,'arcDelimiters':[40,60],
  'centralLabel':adaa+'%','needleColor':'#1abb97','arcColors':['rgb(61,204,91','rgb(239,214,19)','rgb(255,84,84)'],
  'rangeLabel':['0%','100%'],'needleStartValue':'0','fill':'#fff'}"></vue-gauge>
  <vue-gauge :refid="'type-unique-id'" :options="{'chartWidth':'350','needleValue':adaaa,'arcDelimiters':[40,60],
  'centralLabel':adaaa+'%','needleColor':'#1abb97','arcColors':['rgb(61,204,91','rgb(239,214,19)','rgb(255,84,84)'],
  'rangeLabel':['0%','100%'],'needleStartValue':'0','fill':'#fff'}"></vue-gauge>
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
            ada:Math.floor(Math.random()*100),
            adaa:Math.floor(Math.random()*100),
            adaaa:Math.floor(Math.random()*100),
            // aleatorrio: Math.floor(Math.random()*100)
        }
    },
        mounted() {
        const ctx = document.getElementById('linechart-alarmas');
        new Chart(ctx, this.ChartAlarmas);

        const ctxx = document.getElementById('linechart-horas');
        new Chart(ctxx, this.ChartHoras);

        const ctxxx = document.getElementById('linechart-pendiente');
        new Chart(ctxxx, this.planetChartData2);

        setTimeout(() => {
            this.ada();
  console.log("Delayed for 1 second.");
}, "1000")

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

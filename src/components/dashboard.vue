<template>
    <div>
        <sidebar></sidebar> 
  <section class="home">


    <div class="card " >
      <div class="card-header" style="color:#ffffff">
    Alarmas de la semana
  </div>
        <div class="card-body text-end">
             <!-- <button @click="popup()" type="button" class="btn btn-outline-light ">Central de monitoreo</button> -->
             <canvas id="linechart-alarmas" style="position: relative; height:12vh; width:30vw;"></canvas>
        </div>
    </div>


<div>
  <div class="row">
    <div class="col">
      <div class="card card2">
      <div class="card-header" style="color:#ffffff">
    Supervisión por hora
  </div>
        <div class="card-body text-end">
             <canvas id="linechart-horas" style="position: relative; height:20vh; width:30vw;"></canvas>
        </div>
    </div>
    </div>
    <div class="col">
        <div class="card card2">
      <div class="card-header" style="color:#ffffff">
    Supervisión por hora
  </div>
        <div class="card-body text-end">
             <canvas id="linechart-pendiente" style="position: relative; height:20vh; width:30vw;"></canvas>
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
import { Chart } from 'chart.js';
import ChartAlarmas from '../../graficas/alarmas.js'
import ChartHoras from '../../graficas/horas.js'
import planetChartData2 from '../../graficas/linechart2.js'
export default {
    name: "dashboardComponent",
      components: {
    sidebar
  },
   mounted() {
    const ctx = document.getElementById('linechart-alarmas');
    new Chart(ctx, this.ChartAlarmas);

    const ctxx = document.getElementById('linechart-horas');
    new Chart(ctxx, this.ChartHoras);

    const ctxxx = document.getElementById('linechart-pendiente');
    new Chart(ctxxx, this.planetChartData2);
  
  },
  data() {
    return {
      ChartAlarmas: ChartAlarmas,
      ChartHoras: ChartHoras,
      planetChartData2: planetChartData2
    }
  },
  methods: {
    popup(){
      window.open("http://localhost:8080/monitoreo", "Central de monitoreo", "location=0,status=0,scrollbars=0,width=800,height=600,top=50%")
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
  
}
.home .text{
  font-size:30px;
  font-weight: 500;
}
.card{
  background: #27293d;
}
.card2{
  margin-top:2rem;
  margin-bottom:2rem;
}
.card-title{
  color: #fff;
}
.card2{
  width:36rem
}
  
  @media only screen and (min-width: 1800px) {
    .card2{
       width:54rem;
    }
  }

</style>
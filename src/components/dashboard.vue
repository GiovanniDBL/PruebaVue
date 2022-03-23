<template>
    <div>
        <sidebar></sidebar> 
  <section class="home">
    <div class="card " >
      <div class="card-header" style="color:#ffffff">
    Alarmas de la semana
  </div>
        <div class="card-body text-end">
             <button @click="popup()" type="button" class="btn btn-outline-light ">Central de monitoreo</button>
             <canvas id="planet-chart" style="position: relative; height:15vh; width:30vw;"></canvas>
        </div>
    </div>


    <div class="card card2" style="width:40rem">
      <div class="card-header" style="color:#ffffff">
    Supervisión por hora
  </div>
        <div class="card-body text-end">
             <canvas id="planet-chart2" style="position: relative; height:20vh; width:30vw;"></canvas>
        </div>
    </div>


 </section>
    </div>
</template>

<script>
import sidebar from './Sidebar';
import { Chart } from 'chart.js';
import planetChartData from '../../graficas/linechart.js'
import planetChartData2 from '../../graficas/linechart2.js'
export default {
    name: "dashboardComponent",
      components: {
    sidebar
  },
   mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
    const ctxx = document.getElementById('planet-chart2');
    new Chart(ctxx, this.planetChartData2);
  },
  data() {
    return {
      planetChartData: planetChartData,
      planetChartData2: planetChartData2
    }
  },
  methods: {
    popup(){
      window.open("http://localhost:8080/monitoreo", "Central de monitoreo", "location=0,status=0,scrollbars=0,width=499,height=600,top=50%")
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


</style>
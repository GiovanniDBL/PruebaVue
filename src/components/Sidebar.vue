<template>
<div>
<navbar></navbar>
 <nav class="sidebar close">
     <header>
         <div class="image-text">
             <span class="image">
                 <img src="../assets/logo.webp" alt="logo">
             </span>
             <div class="text header-text">
                 <span class="name">ATMSense</span>
                 <span class="profession">Web developer</span>
             </div>
         </div>
         <i class="fas fa-arrow-right toggle"></i>
     </header>

     <div class="menu-bar">
         <div class="menu">     
             <ul class="menu-links">
                 <li class="">
                      <router-link to="/" replace>
                       <i class="fas fa-home icon"></i>
                        <span class="text nav-text">Dashboard</span>
                     </router-link>
                 </li>
                 <li class="">
                       <router-link to="/cuentas" replace>
                         <i class="fas fa-user-shield icon"></i>
                         <span class="text nav-text">Cuentas</span>
                     </router-link>
                 </li>
                 <li class="">
                       <router-link to="/subcuentas" replace>
                        <i class="fas fa-building icon"></i>
                        <span class="text nav-text">Sub cuentas</span>
                     </router-link>
                 </li>
                 <li class="">
                     <router-link to="/monitoreo" replace>
                     <i class="fas fa-table icon"></i>
                     <span class="text nav-text">Monitoreo</span>
                     </router-link>
                 </li>
                 <li class="">
                        <router-link to="/dispositivos" replace>
                        <i class="fas fa-signal-stream icon"></i>
                        <span class="text nav-text">Dispositivos</span>
                     </router-link>
                 </li>
                 <li class="">
                        <router-link to="/usuarios" replace>
                        <i class="fas fa-user icon"></i>
                        <span class="text nav-text">Usuarios</span>
                     </router-link>
                 </li>
                 <li class="">
                    <router-link to="/notificaciones" replace>
                        <i class="fas fa-bell icon"></i>
                        <span class="text nav-text">Notificaciones</span>
                     </router-link>
                 </li>
              
             </ul>
         </div>

         <div class="bottom-content" style="margin-bottom: 2rem;">
                  <li class="">
                     <a href="#">
                         <i class="fas fa-sign-out icon"></i>
                         <span class="text nav-text">Cerrar Sesión</span>
                     </a>
                 </li>
               
         </div>

     </div>
 </nav>

</div>
</template>

<script>

import navbar from './navbar';

export default {
  components: { navbar },
    name: 'SidebarComponent',

    mounted(){
const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
});
    }

}


</script>


<style >
ul{
   padding-left: 0 !important;
}
/* SIDEBAR */
.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    /* background: #006d00; */
    background: linear-gradient(0deg,#389466,#42b883);
    transition: all 0.5s ease;
    z-index: 100;

}
.sidebar.close{
   width: 88px; 
}
/* REUTILIZABLE */
.sidebar .text{
    font-size: 16px;
    font-weight: 500;
    /* color: #707070; */
    /* color: #DDD; */
    color: #ffffff;
    transition: all 0.4s ease;
    white-space: nowrap;
    opacity: 1;
}

.sidebar.close .text{
   opacity:  0;
}
.sidebar .image{
    min-width: 60px;
    display: flex;
    align-items: center
}
.sidebar li{
    height:50px;
    margin-top:10px;
    list-style: none;
    display: flex;
    align-items: center;
}
.sidebar li .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
font-size: 20px;
}
.sidebar li .icon, .sidebar li .text{
/* color: #707070; */
/* color: #DDD; */
/* color: #f6f5ff; */
color: #FFF;
transition: all 0.2s ease;
}
.sidebar header {
    position: relative;
}
.sidebar .image-text img{
    width:40px;
    border-radius: 6px;
    
}
.sidebar header .image-text{
    display: flex;
    align-items: center;
}
header .image-text .header-text{
    display: flex;
    flex-direction: column;
}
.header-text .name{
    font-weight: 600;
}
.header-text .profession{
   margin-top: -2px;
}
.sidebar header .toggle{
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    /* background:#006d00; */
    background:#1b1b27;
    border-radius: 50%;
    transition: all 0.3s ease;
}
.sidebar.close header .toggle{
    transform: translateY(-50%);
}

.sidebar .search-box{
    background-color: #ffffff;
}
.search-box input{
    height:100%;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 6px;
    background:#ffffff;
}
.sidebar li a{
    height:100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
     border-radius: 6px;
     transition: all 0.4s ease;
}
.sidebar li a:hover{
 /* background: #006d00; */
 background: #41464b18;
}
.sidebar li a:hover .icon,
.sidebar li a:hover .text{
    color: #fff;
}

.sidebar .menu-bar{
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
/* .home {
    position: relative;
    height: 100vh;
    left: 250px;
    width: calc(100% - 250px);
    background: red;
    transition: all 0.5s ease;
}

.sidebar.close ~ .home {
    left: 88px;
    width: calc(100% - 88px);
} */



</style>
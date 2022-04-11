<template>
    <div>
        <sidebar></sidebar> 
        <section class="home animated fadeIn">
     <h1 class="text">SubCuentas</h1>
 </section>
    </div>
</template>

<script>
import sidebar from './Sidebar';
export default {
    name: "subcuentaComponent",
      components: {
    sidebar
  },
}
</script>

<style scoped>
.home {
    position: relative;
    height: 100vh;
    left: 88px;
    width: calc(100% - 88px);
    transition: all 0.5s ease;
     padding: 8px 40px;
}
.home .text{
  font-size:30px;
  font-weight: 500;
}


</style>
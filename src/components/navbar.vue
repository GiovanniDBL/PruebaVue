<template>
    <div>
        <nav  class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Dashboard</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
          <button @click="popup()" type="button" class="btn btn-outline-info ">Central de monitoreo</button>
        </li> -->
         <li class="nav-item">
          <a class="nav-link active" @click="popup()" aria-current="page" href="#">Central de monitoreo</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
export default {
    methods: {
    popup(){
      window.open("/monitoreo", "Central de monitoreo", "location=0,status=0,scrollbars=0,width=1000,height=600,top=50%")
    }
  }
    
}
</script>

<style scoped>
.navbar{
     position: relative;
    left: 88px;
    width: calc(100% - 88px);
    transition: all 0.5s ease;
     padding: 8px 40px;
}
.bg-light{
    background: transparent !important;
}
.nav-item{
  margin-right: 1rem;
}
.nav-link{
  color: #41b580 !important;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #2e475738;
  border-radius: 5px;
}

</style>
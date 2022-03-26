<template>



<div class="card" style="width: 30rem;">
  <div class="card-body">
<ul class="list-group list-group-flush">
      <li class="list-group-item d-flex justify-content-between align-items-center">
    ID
    <span class="">{{alarmaID}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Cuenta
    <span class="">Sucursal 1</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Dirección
    <span class="">Cajero 1</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Ciudad
    <span class="">Cancún Q.Roo</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Código postal
    <span class="">77510</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Tipo de alarma
    <span class="">Puerta cajero</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Fecha
    <span class="">24/03/2022 18:21:07</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Estado
    <span class="">Pendiente</span>
  </li>
</ul>
<!-- <form>
  <div class="form-group">
    <label for="exampleInputEmail1">ID: </label>
    <label for="exampleInputEmail1">8319</label>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> -->
<hr>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eligendi culpa tenetur omnis a! Assumenda nesciunt odio maxime? Vitae, voluptas autem? Possimus ab fugit accusantium sunt repellat natus illo assumenda.</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">lorem</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">lorem</div>
</div>
  </div>
</div>

</template>

<script>
export default {
    name: "detallesComponent",
    data(){
        return{
            alarmaID:null
        }
    },
    mounted(){
this.alarmaID = this.$route.params.id;
    }
}
</script>

<style scoped>
.card{
  /* background: #27293d; */
}
label{
    color: #ffffff;
}
.list-group-item{
    /* background-color: #27293d !important; */
    /* color: #ffffff; */
    /* border-color: #ffffff1a; */
}
hr{
    color: #ffffff;
}
.tab-pane{
    /* color: #ffffff; */
}
</style>
<template>
<section class="animated fadeIn">
<div class="card">
    <div class="card-header">
         <img src="../assets/logo.jpg" class="card-img-top img-fluid" alt="...">
    </div>
   
    <div class="card-body">
        <h3>Iniciar Sesión</h3>
        <form v-on:submit.prevent="login">
            <div class="mb-3">
            
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Usuario" v-model="usuarioForm" required>
            </div>
            <div class="mb-3">
               
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Contraseña" v-model="passwordForm" required>
            </div>
            <div class="mb-3">
                <button class="btn btn-success" style="width:100%">Ingresar <i class="fad fa-sign-in-alt"></i></button>
            </div>
        </form>
    </div>
</div>
</section>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'loginComponent',
    data() {
        return {
            usuario: 'daniel',
            password: '1234',
            usuarioForm: '',
            passwordForm: '',

        }
    },

    mounted() {},
    methods: {

        login() {
            // Swal.fire({
            //     allowOutsideClick: false,
            //     icon: 'info',
            //     text: 'Espere por favor...',
            // });
            // Swal.showLoading();
            if (this.usuarioForm == this.usuario && this.passwordForm == this.password) {

                Swal.fire({
                    icon: 'success',
                    title: 'ACCESO CORRECTO',
                    text: '¡Bienvenido ' + this.usuarioForm + '!',
                    allowOutsideClick: false,
                    showConfirmButton: false,
                     timer: 1800,
                     showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                }).then(()=>{
                    localStorage.setItem('usuario', this.usuarioForm)
                    this.$router.push('/dashboard');
                });
            } else {
                 Swal.fire({
                    icon: 'error',
                    title: 'ACCESO INCORRECTO',
                    text: 'Asegurese de que el usuario y contraseña estén escritos correctamente.',
                    confirmButtonText: 'Entendido',
                 
                });
            }
        }
    }
}
</script>

<style scoped>
.card {
    /* background: #fff; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    width: 25rem;
        border-radius: 0.35rem;
    /* border: 1px solid #10141d; */
    /* box-shadow: 2px 2px 2px 1px rgba(255, 250, 250, 0.2); */
}

.card h3 {
    text-align: center;
    text-transform: uppercase;
    color: #043e00c2;
    font-weight:bold;
}
.card-header{
    background:#0a6e0b;
    border-bottom: 0;
}

form {
    /* text-align: center; */
    /* color: #000; */
}
</style>

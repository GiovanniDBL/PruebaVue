<template>
<div class="body">
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
                    <!-- <div class="mb-3">
                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Contraseña" v-model="passwordForm" required>
                    </div> -->
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" id="inputPass" placeholder="Contraseña" v-model="passwordForm" required>
                        <!-- <span class="input-group-text" id="basic-addon1"><i type="button" @click="mostrarContraseña" id="botonEye" class="fas fa-eye-slash"></i></span> -->
                        <span class="input-group-text" id="basic-addon1"><i type="button" @click="mostrarContraseña" id="botonEye" v-bind:class="changeicon()"></i></span>
                    </div>
                    <div class="form-check" style="margin-bottom:1rem">

                        <input v-model="recordarme" @click="deleteRecordame()" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Recordar usuario
                        </label>
                    </div>

                    <div class="mb-3">
                        <button class="btn btn-success" style="width:100%">Ingresar <i class="fad fa-sign-in-alt"></i></button>
                    </div>
                </form>
            </div>
            <div class="card-footer text-center">
                Proporcionado por ZigbMax <br> Versión Beta_1.1.0
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'loginComponent',
    data() {
        return {
            usuarioAdmin: 'admin',
            usuarioMonitor: 'monitorista',
            password: '1234',
            usuarioForm: '',
            passwordForm: '',
            GlobalApi: this.globalVar,
            recordarme: false,
            icon: 0,

        }
    },

    mounted() {
    
        if (localStorage.getItem('RecordarmeUser')) {
            this.usuarioForm = localStorage.getItem('RecordarmeUser')
            this.recordarme = true
        }
       
    },
    methods: {

        loginn() {
            Swal.fire({
                allowOutsideClick: false,
                icon: 'info',
                text: 'Espere por favor...',
            });
            Swal.showLoading();
            if (this.usuarioForm == this.usuarioAdmin && this.passwordForm == this.password) {
                Swal.close();
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

                }).then(() => {
                    localStorage.setItem('usuario', this.usuarioForm)
                    localStorage.setItem('rol', this.usuarioForm)
                    this.$router.push('/dashboard');

                });

            } else if (this.usuarioForm == this.usuarioMonitor && this.passwordForm == this.password) {
                Swal.close();
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

                }).then(() => {
                    localStorage.setItem('rol', this.usuarioForm)
                    localStorage.setItem('usuario', this.usuarioForm)
                    this.$router.push('/dashboard');
                });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'ACCESO INCORRECTO',
                    text: 'Asegurese de que el usuario y contraseña estén escritos correctamente.',
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#157347',

                });
            }
        },
        deleteRecordame(){
            if (this.recordarme == true) {
                localStorage.removeItem('RecordarmeUser')
            }
        },
        mostrarContraseña(){
            // return"fas fa-eye"
            var input = document.getElementById('inputPass');

            // console.log(botonEye);
            if (input.type == "password") {
                input.type = "text"
                this.icon = 1;
             
            }else{
                input.type = "password"
                this.icon = 0;
            }
         
        },
        changeicon(){
            if(this.icon == 0){
                return "fas fa-eye-slash"
                }else{
                    return "fas fa-eye"
                    
            }
        },
   
        login() {
            Swal.fire({
                allowOutsideClick: false,
                icon: 'info',
                text: 'Espere por favor...',
            });
            Swal.showLoading();
            var data = {
                "user": this.usuarioForm,
                "pass": this.passwordForm,
            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'LoginAuth',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                Swal.close();
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request Login", resp);
                var json = resp;
                if (json.data.code == 200) {

                    if (this.recordarme) {
                        localStorage.setItem('RecordarmeUser', this.usuarioForm)
                    }

                    Swal.fire({
                        icon: 'success',
                        title: 'ACCESO CORRECTO',
                        text: '¡Bienvenido ' + this.usuarioForm + '!',
                        allowOutsideClick: false,
                        showConfirmButton: false,
                        timer: 1500,
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }

                    }).then(() => {
                        localStorage.setItem('usuario', this.usuarioForm);
                        localStorage.setItem('id_usuario', json.data.idUsuarios);
                        localStorage.setItem('id_tipousuario', json.data.TipoUsuario_idTipoUsuario);
                        localStorage.setItem('id_cPrincipal', json.data.idcPrincipal);
                        localStorage.setItem('token', json.data.token);
                        this.$router.push('/dashboard');

                    });

                } else {
                    Swal.close();
                    Swal.fire({
                        icon: 'error',
                        title: 'ACCESO INCORRECTO',
                        text: 'Asegurese de que el usuario y contraseña estén escritos correctamente.',
                        confirmButtonText: 'Entendido',
                        confirmButtonColor: '#157347',

                    });
                }
            }
        },
        prueba() {

            //   }
            var data = {
                "typeFunction": "getStatusDevice",
                "idDevice": 6,
                "timeEnd": "12 hours",
                "idUserLoged": 1,
                "typeUserLoged": 1,

            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'managerDevices',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request vice", resp);
            }
        }

    }
}
</script>

<style scoped>
.body {
    /* background-image: url('../assets/fondo-login.webp'); */
    background: linear-gradient(to right, #10141df2, #10141df2), url('../assets/fondo-login.webp') !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center !important;
    position: relative !important;
    height: 100vh !important;
    width: 100%;
}

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
    font-weight: bold;
}

.card-header {
    background: #0a6e0b;
    border-bottom: 0;
}

.card-footer {
    color: #6c757d;
    font-size: 12px;
}
.form-check-input:checked {
    background-color: #198754;
    border-color: #198754;
}
.form-check-label{
    color: #6c757d;
}
form {
    /* text-align: center; */
    /* color: #000; */
}

/* section{
    background-image: url('../assets/logo.jpg');
    background-position: center center;
    background-size: cover;
    background: #0a6e0b !important;
} */
</style>

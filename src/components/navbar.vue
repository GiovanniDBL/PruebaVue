<template>
<div class="">
    <!-- sticky-top -->
    <nav class="navbar  navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">ATMSense <span class="span-brand">Software</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <!-- <li class="nav-item">
          <button @click="popup()" type="button" class="btn btn-outline-info ">Central de monitoreo</button>
        </li> -->
                    <!-- <li class="nav-item" v-if="rol !== 'admin'"> -->
           
                    <!-- <li class="nav-item" v-if="rol == '2'"> -->
                    <li class="nav-item" v-if="rol !== '6'">
                        <a class="nav-link monitoreo-link active" @click="popup()" aria-current="page" href="#">
                            <i class="fas fa-play"></i> Iniciar monitoreo en tiempo real</a>
                    </li>
                    <li class="nav-item dropdown dropstart">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img class="card-img-top img-fluid" src="../assets/avatar.webp" alt="imagen">
                        </a>
                        <ul class="dropdown-menu animated fadeIn fast" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Perfil</a></li>
                            <li><a class="dropdown-item" href="#">Configuración</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" type="button" @click="logout();">Cerrar sesión <i class="fad fa-sign-in-alt"></i></a></li>
                        </ul>
                    </li>
                </ul>
                <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form> -->
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'navbarComponent',

    data() {
        return {
            // msg: 0,
            rol:localStorage.getItem('id_tipousuario')
        }
    },
    mounted(){
    //      if (localStorage.getItem('id_tipousuario')) {
    //       this.rol = localStorage.getItem('id_tipousuario');
    //   } else {
    //       this.$router.push("/");
    //   }
    },
    methods: {
        popup() {
            window.open("/monitoreo", "Central de monitoreo", "location=0,status=0,scrollbars=0,width=1500,height=1000,top=50%");
            // this.ms = 1;
            // this.$root.$emit("send", this.msg)
        },
        logout() {
            Swal.fire({
                icon: 'warning',
                title: '¿Estás seguro?',
                text: 'Al cerrar la sesión tendrás que volver a ingresar con tu usuario y contraseña',
                allowOutsideClick: false,
                showCancelButton: true,
                confirmButtonColor: '#157347',
                confirmButtonText: 'Confirmar',
                cancelButtonColor: '#dc3545',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('usuario')
                    localStorage.removeItem('id_usuario')
                    localStorage.removeItem('id_tipousuario')
                    localStorage.removeItem('token')
                    this.$router.push('/');
                }
            })

        }
    }

}
</script>

<style scoped>
.navbar {
    position: relative;
    left: 88px;
    width: calc(100% - 88px);
    transition: all 0.5s ease;
    padding: 8px 40px;
}

.bg-light {
    background: transparent !important;
}

.nav-item {
    /* margin-right: 1rem; */
}

.monitoreo-link {

    color: #ffffff !important;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 2px;
    background-color: #af2b2b;
    border-radius: 22px;
    margin-right: 1rem;
    padding: 5px;

}

.nav-link {

    color: #ffffff !important;

}

.navbar-brand {
    color: #fff !important;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
}

.span-brand {
    color: #1abb97;
}

img {
    width: 30px;
    height: 30px;
    /* border: 5px solid #2b3553; */
    border-bottom-color: transparent;
    background-color: transparent;
    position: relative;
    border-radius: 50%;
    max-width: 100%;
}

.dropdown-menu {
    /* background-color: rgba(0, 0, 0, .9) !important; */

}
</style>

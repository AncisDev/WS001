<template>
    <div class="userPanel" v-if="this.$store.state.user">
        <div class="row m-0 p-0">
            <div class="col-12 text-bg-dark m-0 p-0">
                <div class="container py-3">
                    <h1>Panel de usuario</h1>
                    <span class="d-block text-end text-warning" style="font-size: .7rem;">{{ this.$store.state.user.email }}</span>
                </div>
            </div>
        </div>

        <div class="row m-0" v-for="item in this.$store.state.user.providerData">
            <div class="col m-sm-2 p-3 bg-success-subtle rounded">
                <h5 class="bg-dark text-warning rounded px-3 py-1">Informacion personal</h5>
                <hr>
                <div class="container p-2" style="font-size: .7rem;">
                    <p>Nombre: {{ item.displayName }}</p>
                    <p>Apellido:</p>
                    <p>RUN:</p>
                    <p>Dirección:</p>
                </div>
            </div>
            <div class="col m-sm-2 p-3 bg-success-subtle rounded">
                <h5 class="bg-dark text-warning rounded px-3 py-1">Datos de contacto</h5>
                <hr>
                <div class="container p-2" style="font-size: .7rem;">
                    <p>Correo: {{ item.email }}</p>
                    <p>Telefono: {{ item.phoneNumber }}</p>
                    <p>Red Social:</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="row m-0">
            <router-link
            class="btn btn-outline-dark border-0 d-block w-50 mx-auto" 
            :to="{name: 'Inicio'}" 
            @click="this.$store.state.load = true, logout"
            >Salir</router-link>
        </div>
    </div>
    <div v-else class="position-absolute top-50 start-50 text-center translate-middle">
        <h3 class="fw-bold">
            <i class="fa fa-exclamation-triangle text-warning" aria-hidden="true"></i>
            ¡Upss! Ha ocurrido un error.
        </h3>
        <h5>Actualizar sitio.</h5>
        <router-link :to="{name: 'Inicio'}" 
        @click="this.$store.state.load = true"
        class="btn btn-sm btn-outline-danger rounded-circle"
        >
            <i class="fa fa-refresh" aria-hidden="true"></i>
        </router-link>
    </div>
</template>

<script>
import { auth } from "../utils/firebase";

export default{
    name: 'UserPanel',
    props:{

    },
    methods:{
        async logout() {
            this.$store.state.load = true;
            await auth
            .signOut()
            .then(() => {
                setTimeout(() => {
                    this.$store.state.user = null;
                    this.user = '';
                    this.pass = '';
                    this.$router.push("/");
                    console.log("Sesion finalizada correctamente");
                    this.$store.state.load = false;
                }, 1000);
            })
            .catch((error) => {
                // Ha ocurrido un error al cerrar sesión
                console.log(error);
            });
        },
    },
}
</script>

<style scoped>
hr{
    border-color: rgb(33, 121, 33);
}
router-link{
    transition: all 50ms ease-in-out;
}
</style>
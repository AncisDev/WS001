<template>
    <div class="loginModal">
        <div class="dropdown ms-2 me-md-3">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-success rounded-circle" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
            </button>

            <!-- Dropdown box -->
        
            <div style="min-width: 300px;max-width: 80%;" 
            class="dropdown-menu mt-3 px-2 pt-2 pb-4 bg-dark border border-success"
            >
                <form @submit.prevent="login" v-if="!this.$store.state.user">
                    <h5 class="text-center text-warning p-0 m-0">Iniciar sesión</h5>
                    <hr class="border-success border-2 p-0">
                    <div class="input-group mb-2 rounded-pill overflow-hidden">
                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input type="text" required
                        v-model="user"
                        style="font-size: .65rem;"
                        class="form-control px-3 py-2 fw-bolder" 
                        placeholder="Usuario" 
                        aria-label="Usuario" 
                        aria-describedby="basic-addon1">
                    </div>       

                    <div class="input-group rounded-pill overflow-hidden">
                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-key" aria-hidden="true"></i></span>
                        <input type="password" required
                        v-model="pass"
                        style="font-size: .65rem;"
                        class="form-control px-3 py-2 fw-bolder" 
                        placeholder="Contraseña" 
                        aria-label="Contraseña" 
                        aria-describedby="basic-addon1">
                    </div>
                    <hr class="border-success border-2 p-0">
                    <button type="submit" class="btn btn-sm btn-warning w-100 rounded-pill">Entrar</button>
                    <span v-if="this.$store.state.msgError" class="alert alert-danger d-block text-center mx-0 mt-3 mb-0" style="font-size: .7rem;">
                        {{ this.$store.state.msgError }}
                    </span>
                </form>
                
                <div v-else class="">
                    <div class="text-end">
                        <button @click="logout"
                        class="btn btn-sm btn-outline-danger border-0 rounded-circle border-0 m-0 px-2 py-1"
                        >
                            <i class="fa fa-power-off" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div class="text-warning text-center">
                        <p>¡Bienvenido!</p>
                        <span class="badge bg-success-subtle rounded-pill text-success fw-light px-3 py-2">{{ this.$store.state.user.email }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { auth } from "../utils/firebase";

export default{
    name:'LoginModal',
    props:{
        
    },
    data: () => ({
        user: '',
        pass:'',
    }),
    methods:{
        async login() {
            this.$store.state.load = true;
            try {
                await this.$store.dispatch("login", {
                email: this.user,
                password: this.pass,
                })
                .then(()=>{
                    setTimeout(() => {
                        this.$router.push("/panel");
                        console.log("Sesion iniciada correctamente");
                        this.$store.state.load = false;
                    }, 3000);
                })
                .then(()=>{
                    auth.onAuthStateChanged((user) => {
                    if (user) {
                        // El usuario ha iniciado sesión correctamente
                        this.$store.state.user = user;
                    } else {
                        // El usuario no ha iniciado sesión
                        this.$store.state.user = null;
                    }
                    });
                })
            } catch (error) {
                console.error(error);
            }
        },

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
    }
}
</script>
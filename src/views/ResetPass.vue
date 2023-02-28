<template>
    <div class="resetPass">
        <div class="row text-bg-dark vw-100 m-0">
            <div class="col">
                <h4 class="py-3"><i>Recupera tu Contraseña</i></h4>
                <p style="font-size: .7rem;" class="fw-light text-warning">Ingresa tu correo para que te enviemos un enlace de recuperación de contraseña </p>
            </div>
            <hr>
            <div class="col col-md-8 col-xl-6 ps-4 py-2 m-0" style="font-size: .8rem;">
                <form @submit.prevent="resetPassword">
                    <label for="" class="ms-3 mt-1 fst-italic fw-bold text-uppercase">Ingresa tu correo</label>
                    <input type="email" v-model="correo" style="" class="d-block mt-1 mb-3 ms-auto me-5 w-50 rounded-pill px-3 py-2">
                    <button @click="errorMsg = '', successMsg = ''"
                    style="font-size: .7rem;" 
                    class="btn btn-sm btn-outline-success border-0 d-block w-25 my-1 ms-auto me-5"
                    >
                        Recuperar contraseña
                    </button>
                </form>
            </div>
            <div class="col-12 m-0 m-o">
                <div v-if="errorMsg" class="alert alert-danger w-50 ms-auto me-5">
                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                    {{ errorMsg }}
                </div>
                <div v-else-if="successMsg" 
                style="font-size: .8rem;"
                class="alert alert-success w-50 ms-auto me-5"
                >
                    <i class="fa fa-check-square-o" aria-hidden="true"></i>
                    {{ successMsg }}
                </div>
            </div>
            <hr class="border-dark">
            <br>
            <hr>
        </div>        
    </div>
</template>

<script>
import { auth } from "../utils/firebase";
import { sendPasswordResetEmail  } from "firebase/auth";

export default{
    name: 'ResetPass',
    components:{

    },
    data: ()=>({
        correo: '',
        errorMsg: '',
        successMsg: '',
    }),
    methods:{
        async resetPassword() {
            try {
                await sendPasswordResetEmail(auth, this.correo);
                this.successMsg = 'Se ha enviado un correo electrónico de recuperación a su dirección de correo electrónico.';
            } catch (error) {
                console.error(error);
                this.errorMsg = 'Ha ocurrido un error al enviar el correo electrónico de recuperación.';
            }
        },
    }
}
</script>

<style scoped>
input{
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(255, 252, 50, 0.2);
    box-shadow: 3px 3px 8px 1px rgba(255, 252, 50, 0.2);
    color: #198754;
}
    input:focus{
        background-color: rgb(85, 133, 85);
        color: white;
    }
</style>
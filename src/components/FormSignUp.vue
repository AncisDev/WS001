<template>
    <div class="FormSignUp">
        <form @submit.prevent="signUp"
        class="bg-dark text-warning rounded mx-auto my-5 p-3"
        style="max-width: 500px;"
        >
            <h2 class="text-end p-2">Crea tu cuenta</h2>
            <div class="row m-0">
                <div id="itemHover" class="col px-4 py-3">
                    <label 
                    class="form-label ps-3 pb-2"
                    >Nombre</label>
                    
                    <input type="text"  v-model="userData.nombre"
                    class="form-control px-3 py-2"
                    placeholder="Ingresa tu nombre..." required>
                </div>

                <div id="itemHover" class="col px-4 py-3">
                    <label 
                    class="form-label ps-3 pb-2"
                    >Apellido</label>
                    
                    <input type="text"  v-model="userData.apellido"
                    class="form-control px-3 py-2"
                    placeholder="Ingresa tu apellido..." required>
                </div>
            </div>
            <hr>
            <div class="row m-0">
                <div id="itemHover" class="col px-4 py-3">
                    <label 
                    class="form-label ps-3 pb-2"
                    >Correo electrónico</label>
                    
                    <input type="text"  v-model="userData.correo"
                    class="form-control px-3 py-2"
                    placeholder="Ingresa tu correo..." required>
                </div>
            </div>
            <hr>
            <div class="row m-0">
                <div id="itemHover" class="col px-4 py-3">
                    <label 
                    class="form-label ps-3 pb-2"
                    >Nombre de usuario</label>
                    
                    <input type="text"  v-model="userData.username"
                    class="form-control px-3 py-2"
                    placeholder="Ingresa tu usuario..." required>
                </div>

                <div id="itemHover" class="col px-4 py-3">
                    <label 
                    class="form-label ps-3 pb-2"
                    >Contraseña</label>
                    
                    <input type="password"  v-model="userData.contraseña"
                    class="form-control px-3 py-2"
                    placeholder="*********" required>

                </div>

                <div v-if="userData.contraseña.length >= 1 && userData.contraseña.length <= 5" 
                style="font-size: .7rem;"
                class="alert alert-warning w-75 py-2 mt-2 mb-0 mx-auto"
                >   
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    La contraseña es demasiado corta, por favor ingresa una contraseña mas larga.
                </div>

                <div v-else-if="errorMsg" 
                style="font-size: .7rem;"
                class="alert alert-danger w-75 py-2 mt-2 mb-0 mx-auto"
                >
                    <i class="fa fa-times" aria-hidden="true"></i>
                    {{ errorMsg }}
                </div>

                <div v-else-if="successMsg" 
                style="font-size: .7rem;"
                class="alert alert-success w-75 py-2 mt-2 mb-0 mx-auto"
                >
                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    {{ successMsg }}
                </div>
            </div>

            <div class="row m-0 my-3 px-4">
                <button class="btn btn-sm btn-outline-warning rounded-pill">
                    Registrarse
                </button>
            </div>
        </form>

        <hr class="border-light">

        <div class="container" style="font-size: .6rem;">
            <p class="my-1 fw-bold" style="font-size: .8rem;">Completa el formulario para poder crear tu cuenta de usuario para nuestro sitio web.</p>
            <p class="my-1 fst-italic">Antes de registrarte tener en consideración lo siguiente:</p>
            <p class="my-1">* La cuenta que vas a crear es unicamente para navegar en nuestro sitio y acceder a las vistas disponibles para los usuarios registrados.</p>
            <p class="my-1">* No se puede registrar 2 o más cuentas de usuario con el mismo correo electrónico.</p>
            <p class="my-1">* La contraseña debe tener minimo 6 caracteres. <i class="fw-bold">{Se recomienda utilizar letras mayusculas, minusculas, numeros y al menos un caracter especial}</i></p>
        </div>
    </div>
</template>

<script>
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword  } from "firebase/auth";


export default{
    name: 'FormSignup',
    props:{

    },
    data: () => ({
        userData:{
            nombre: '',
            apellido:'',
            correo:'',
            username:'',
            contraseña:'',
            
        },
        errorMsg: '',
        successMsg: '',
    }),
    methods:{
        async signUp() {
            this.$store.state.load = true;
            try {
                console.log(this.userData.correo, this.userData.contraseña)
                createUserWithEmailAndPassword(auth, this.userData.correo, this.userData.contraseña)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    this.successMsg = "Cuenta de usuario creada correctamente"
                    console.log("Cuenta de usuario creada correctamente",user)
                })
                .then(()=>{
                    for (let item in this.userData) {
                        this.userData[item] = '';
                    };
                    setTimeout(() => {
                        this.$store.state.load = false;
                    }, 1000);
                })
                .catch((error) => {
                    this.errorMsg = "Se produjo un error intentando crear su cuenta de usuario, por favor intente nuevamente."
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    for (let item in this.userData) {
                        this.userData[item] = '';
                    }
                    console.log("Error creando cuenta de usuario: ", errorCode, errorMessage)
                });

            } catch (error) {
                console.error(error);
            }
        },

    }
}
</script>

<style scoped>
input{
    color: #ffc107;
    background-color: rgba(20, 167, 57, 0.87);
    box-shadow: 3px 3px 10px 1px rgba(255, 255, 255, .2);
    font-size: .75rem;
}
    input::placeholder{
        color: #ffffff;
    }
    input:focus{
        color: #ffffff;
        background-color: rgba(12, 83, 30, 0.664);
    }
#itemHover:hover{
    background-color: rgba(252, 228, 19, 0.842);
    border-radius: 10px;
    color: black;
    transition: all .1s ease-in-out;
}
form{
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .5);
}
</style>
<template>
    <div class="formContacto">
        <form @submit.prevent="sendEmail(dataContacto.correo,dataContacto.nombre,dataContacto.apellido,dataContacto.asunto,dataContacto.mensaje)"
        class="m-4 px-0 py-4 text-bg-dark rounded"
        >
            <header class="text-center">
                <h4 class="py-2">Dejanos tu mensaje</h4>
            </header>       


            <div id="dPersonal" class="row">
                <div id="ih1" class="itemHover col-12 col-md px-4">
                    <label for="exampleFormControlInput1" 
                    class="form-label ps-3 pb-2"
                    >Nombre</label>
                    
                    <input type="text"  v-model="dataContacto.nombre"
                    class="form-control px-3 py-2"
                    placeholder="Ingresa tu nombre..." required>
                </div>

                <div id="ih1" class="itemHover col-12 col-md px-4">
                    <label for="exampleFormControlInput1" 
                    class="form-label ps-3 pb-2"
                    >Apellido</label>
                    
                    <input type="text" v-model="dataContacto.apellido" 
                    class="form-control px-3 py-2 " 
                    placeholder="Ingresa tu apellido..." required>
                </div>
            </div>

            <hr>
            
            <div id="iContacto" class="row p-0">
                <div id="ih3" class="itemHover px-4">
                    <label for="exampleFormControlInput1" 
                    class="col-12 form-label ps-3 pb-2"
                    >Correo electrónico</label>
                    
                    <input type="email" v-model="dataContacto.correo" 
                    class="col form-control px-3 py-2 " 
                    placeholder="micorreo@mail.com" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required>


                    <!-- <span v-if="/.+@.+\..+$/.test(dataContacto.correo)" id="alertaWarning"
                    style="font-size: .7rem;"
                    class="alert alert-warning d-block text-center fw-bold mx-4 my-4"
                    >
                        El correo electrónico tiene un formato incorrecto.
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    </span> -->
                </div>
            </div>

            <hr>
            
            <div id="iMensaje" class="row">
                <div id="ih4" class="itemHover px-4">
                    <label for="exampleFormControlInput1" 
                    class="form-label ps-3 pb-2"
                    >Asunto</label>
                    
                    <input type="text" v-model="dataContacto.asunto" 
                    class="form-control px-3 py-2" 
                    placeholder="Felicitaciones/Recomendación/Problema..." required>
                </div>

                <div id="ih5" class="itemHover px-4">
                    <label for="exampleFormControlTextarea1" 
                    class="form-label ps-3 pb-2"
                    >Mensaje</label>
                    
                    <textarea v-model="dataContacto.mensaje"
                    class="form-control px-3 py-2" 
                    rows="3" placeholder="Escribe tu mensaje..." required></textarea>
                    
                    <span v-if="dataContacto.mensaje.length >= 1 && dataContacto.mensaje.length <= 10" id="alertaWarning"
                    style="font-size: .7rem;"
                    class="alert alert-warning d-block text-center fw-bold my-4"
                    >
                        El mensaje es muy corto, por favor proporciona mas información.
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    </span>
                </div>
            </div>

            <div class="my-2 px-4">
                <button type="submit" class="btn w-100 d-block">Submit</button>

                <span v-if="errorMessage" id="alertaError"
                style="font-size: .7rem;"
                class="alert alert-danger d-block text-center fw-bold w-100 my-4"
                >
                    {{errorMessage }}
                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </span>

                <span v-else-if="successMessage" id="alertaSuccess"
                style="font-size: .7rem;"
                class="alert alert-success d-block text-center fw-bold w-100 my-4"
                >
                    {{successMessage }}
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                </span>
            </div>

            
        </form>

        <div class="position-fixed start-0 top-50 ">
            <div class="d-none alert alert-info p-3 rounded" style="min-width: 100px;min-height: 100px; box-shadow: 3px 3px 3px 0 rgba(255, 255, 255, .3); font-size: .7rem;">
                <p>Nombre  : {{ dataContacto.nombre }}</p>
                <p>Apellido: {{ dataContacto.apellido }}</p>
                <p>Correo  : {{ dataContacto.correo }}</p>
                <p>Asunto  : {{ dataContacto.asunto }}</p>
                <p>Mensaje : {{ dataContacto.mensaje }}</p>
            </div> 
        </div>
        
    </div>
</template>

<script>
import { firestore } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

export default{
    name:'FormContacto',
    data:()=>({
        dataContacto:{
            nombre: '',
            apellido: '',
            usrCorreo: '',
            correo:'',
            provCorreo: '',
            asunto: '', 
            mensaje: '',
        },
        successMessage: '',
        errorMessage: '',
        valorInvalido:'',
    }),
    methods:{
        async sendEmail(correo, fName, lName, sbj, msj) {
            // console.log(correo, fName, lName, sbj, msj)
            try {
                const nombre = fName+" "+lName;
                const collectionRef = collection(firestore, 'msjContacto');
                const usrMessage = {
                    to: "tripiodev.contacto@gmail.com",
                    message: {
                        subject: "["+nombre+"] Contacto a traves del sitio "+process.env.VUE_APP_TITTLE,
                        html: ` <div> 
                                    <h2>Información de contacto</h2> 
                                    <hr>
                                    <p>Nombre: ${nombre}</p> 
                                    <p>Correo: ${correo}</p>
                                    <p>Asunto: ${sbj}</p> 
                                    <hr>
                                    <h5>Mensaje: </h5>
                                    <p>${msj}</p>
                                    <hr>
                                </div>`,
                    },
                }
                // console.log(usrMessage)
                return await addDoc(collectionRef, usrMessage)

                .then((docRef)=>{
                    for (let item in this.dataContacto) {
                        this.dataContacto[item] = '';
                    };

                    this.successMessage = "Mensaje enviado correctamente"
                    // console.log("Mensaje enviado con ID: ", docRef.id);
                }).catch((error)=>{
                    for (let item in this.dataContacto) {
                        this.dataContacto[item] = '';
                    };

                    this.errorMessage = "No se pudo enviar su mensaje, por favor intente mas tarde.";
                    // console.log("No se pudo enviar mensaje: ", error);
                })
                
            } 
            catch (e) {
                console.error("Error al enviar el mensaje: ", e);
            }
        }
    
    },
}
</script>

<style scoped>
*{
    margin: auto;
}
hr{
    color: #20c997;
    border-color: #20c997;
    width: 90%;
}
form{
    width: 600px;
    max-width: 80vw;
}
h4{
    color: #20c997;
    box-shadow: 3px 3px 3px 0 rgba(32, 201, 150, 0.151);
}
.itemHover{
    padding: 30px 10px;
}
.itemHover:hover {
        transition: all 300ms ease-in-out;
        background: rgba(32, 201, 150, 0.3);
    }
input{
    color: #20c997;
    box-shadow: 3px 3px 10px 1px rgba(255, 255, 255, .2);
    font-size: .75rem;
}
textarea{
    color: #20c997;
    height: 100%;
    max-height: 200px;
    /* pointer-events: none; */
    resize: none;
    box-shadow: 3px 3px 10px 1px rgba(255, 255, 255, .2);
    font-size: .75rem;
}
button{
    color: beige;
    background-color: #065a41;
    box-shadow: 3px 3px 3px 0 rgba(32, 201, 150, 0.3);
    transition: all 200ms ease-in-out;
}
    button:hover{
        color: #065a41;
        background-color: #20c997;
        transform: scale(1.03);
    }
#alertaError:hover{
    background-color: rgba(204, 21, 21, 0.884);
    color: white;
    box-shadow: 2px 3px 4px 0 rgba(255, 255, 255, 0.3);
    transform: scale(1.01);
}
</style>
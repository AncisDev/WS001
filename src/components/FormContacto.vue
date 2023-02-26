<template>
    <div class="formContacto">
        <form @submit.prevent="sendEmail(dataContacto.correo,dataContacto.nombre,dataContacto.apellido,dataContacto.asunto,dataContacto.mensaje)"
        class="m-5 py-4 text-bg-dark rounded"
        >
            <header class="text-center">
                <h4 class="py-2">Dejanos tu mensaje</h4>
            </header>       


            <div id="dPersonal" class="">
                <div id="ih1" class="itemHover">
                    <label for="exampleFormControlInput1" 
                    class="form-label ps-3 pb-2"
                    >Nombre</label>
                    
                    <input type="text"  v-model="dataContacto.nombre"
                    class="form-control px-3 py-2 mb-3" 
                    placeholder="Juan">
                </div>

                <div id="ih1" class="itemHover">
                    <label for="exampleFormControlInput1" 
                    class="form-label ps-3 pb-2"
                    >Apellido</label>
                    
                    <input type="text" v-model="dataContacto.apellido" 
                    class="form-control px-3 py-2 " 
                    placeholder="Pérez">
                </div>
            </div>

            <hr>
            
            <div id="iContacto" class="">
                <div id="ih3" class="itemHover">
                    <label for="exampleFormControlInput1" 
                    class="form-label ps-3 pb-2"
                    >Correo electrónico</label>
                    
                    <input type="email" v-model="dataContacto.correo" 
                    class="form-control px-3 py-2 " 
                    placeholder="mail@correo.com">
                </div>
            </div>

            <hr>
            
            <div id="iMensaje" class="">
                <div id="ih4" class="itemHover">
                    <label for="exampleFormControlInput1" 
                    class="form-label ps-3 pb-2"
                    >Asunto</label>
                    
                    <input type="text" v-model="dataContacto.asunto" 
                    class="form-control px-3 py-2 " 
                    placeholder="Problema con...">
                </div>

                <div id="ih5" class="itemHover">
                    <label for="exampleFormControlTextarea1" 
                    class="form-label ps-3 pb-2"
                    >Mensaje</label>
                    
                    <textarea v-model="dataContacto.mensaje"
                    class="form-control px-3 py-2 " 
                    rows="3"></textarea>
                </div>
            </div>

            <button type="submit" class="btn w-75 d-block my-2">Submit</button>
        </form>

        <div class="position-fixed start-0 top-50 ">
            <span v-if="errorMessage" id="alertaError"
            style="font-size: .7rem;"
            class="alert alert-danger mx-auto my-3 w-75 d-block">
               {{errorMessage }}
            </span>

            <div class="alert alert-info p-3 rounded" style="min-width: 100px;min-height: 100px; box-shadow: 3px 3px 3px 0 rgba(255, 255, 255, .3); font-size: .7rem;">
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
            correo: '',
            asunto: '', 
            mensaje: '',
        },
        successMessage: '',
        errorMessage: '',
    }),
    methods:{
        async sendEmail(correo, fName, lName, sbj, msj) {
            // console.log(correo, fName, lName, sbj, msj)
            try {
                const collectionRef = collection(firestore, 'msjContacto');
                const usrMessage = {
                    to: correo,
                    message: {
                        subject: sbj,
                        html: `<p>${fName} ${lName}</p> <p>${msj}</p>`,
                    },
                }
                // console.log(usrMessage)
                return await addDoc(collectionRef, usrMessage)
                .then((docRef)=>{
                    console.log("Mensaje enviado con ID: ", docRef.id);
                }).catch((error)=>{
                    this.errorMessage = "No se pudo enviar su mensaje, por favor intente mas tarde.";
                    console.log("No se pudo enviar mensaje: ", error);
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
    width: 80%;
    border: 1px dotted #ffc107;
    box-shadow: 3px 3px 3px 0 rgba(255, 255, 255, .2);
    font-size: .75rem;
}
textarea{
    color: #20c997;
    width: 80%;
    height: 100%;
    max-height: 200px;
    /* pointer-events: none; */
    resize: none;
    box-shadow: 3px 3px 3px 0 rgba(255, 255, 255, .2);
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
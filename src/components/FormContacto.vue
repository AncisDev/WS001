<template>
    <div class="formContacto">
        <form @submit.prevent="submitForm"
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
    </div>
</template>

<script>
export default{
    name:'FormContacto',
    data:()=>({
        dataContacto:{
            nombre: '',
            apellido: '',
            correo: '',
            asunto: '',
            mensaje: '',
        }
    }),
    methods:{
        submitForm() {
            const formData = new FormData();
            formData.append('name', this.dataContacto.nombre+' '+this.dataContacto.apellido);
            formData.append('email', this.dataContacto.correo);
            formData.append('message', this.dataContacto.message);

            fetch('send_email.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
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
    width: 75%;
    border: 1px dotted #ffc107;
    box-shadow: 3px 3px 3px 0 rgba(255, 255, 255, .2);
    font-size: .75rem;
}
textarea{
    color: #20c997;
    width: 75%;
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
</style>
<template>
    <div class="loginModal">
        <div class="dropdown ms-2 me-md-3">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-success" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
            </button>

            <!-- Dropdown box -->
        
            <div style="min-width: 300px;max-width: 80%;" 
            class="dropdown-menu mt-3 p-3 bg-dark border border-success"
            >
                <form @submit.prevent="logIn">
                    <h5 class="text-center text-warning p-0 m-0">Iniciar sesión</h5>
                    <hr class="border-success border-2 p-0">
                    <div class="input-group mb-2 rounded-pill overflow-hidden">
                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input type="text"
                        v-model="user"
                        style="font-size: .65rem;"
                        class="form-control px-3 py-2 fw-bolder" 
                        placeholder="Usuario" 
                        aria-label="Usuario" 
                        aria-describedby="basic-addon1">
                    </div>       

                    <div class="input-group rounded-pill overflow-hidden">
                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-key" aria-hidden="true"></i></span>
                        <input type="password"
                        v-model="pass"
                        style="font-size: .65rem;"
                        class="form-control px-3 py-2 fw-bolder" 
                        placeholder="Contraseña" 
                        aria-label="Contraseña" 
                        aria-describedby="basic-addon1">
                    </div>
                    <hr class="border-success border-2 p-0">
                    <button type="submit" class="btn btn-sm btn-warning w-100 rounded-pill">Entrar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// import firebase from 'firebase';
// import '@/utils/firebase'

export default{
    name:'LoginModal',
    props:{
        
    },
    data: () => ({
        user: '',
        pass:'',
    }),
    methods:{
        logIn(){
            console.log(this.user+" - "+this.pass)
        }
    }
}
</script>
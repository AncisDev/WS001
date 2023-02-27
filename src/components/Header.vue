<template>
    <div class="w-100 bg-dark text-light border-bottom border-success d-flex justify-content-between align-items-center sticky-top border-bottom m-0 p-0">
        <div class="w-100 w-md-25 px-1 p-0 m-0 text-start fs-1 ">
            <router-link :to="{name: 'Inicio'}"
            class="btn btn-outline-success btn-lg border-0 rounded-0 w-100 m-0 p-0 fs-2 text-start d-block"
            >
                <img src="../assets/img/mySites/logo_2.png" 
                alt="TravelDev Trip" 
                class="border-0 m-0 p-1"
                style="max-width: 200px;;"
                >
            </router-link>
        </div>

        <!-- Nombre vista -->
        <div ref="titleView" class="text-center text-warning fw-bold text-uppercase fs-5 w-100">{{$route.name}}</div>

        <nav  
        class="w-100 mw-md-25 m-0 d-none d-md-flex justify-content-end align-items-center"
        >
            <div v-for="r in rutas">
                <button v-if="r.subRuta"
                class="btn btn-sm btn-outline-success border-0 rounded-pill mx-1 py-2 px-3 dropdown-toggle mx-1 p-1" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                    {{ r.nombre }}
                </button>

                <button v-else v-on:click="insertarRuta(r.ruta)"
                class="btn btn-sm btn-outline-success border-0 rounded-pill mx-1 py-2 px-3"
                >
                    {{r.nombre}}
                </button>

                <ul class="dropdown-menu bg-success">
                    <li v-for="sr in r.subRuta" >
                        <a class="btn btn-sm border-0 dropdown-item" 
                        v-on:click="insertarSubRuta(sr.nombre)" 
                        >
                            {{ sr.nombre }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        
        <loginModal></loginModal>

        <!-- Menu flotante -->
        <div class="btn-group d-md-none w-25 mx-3">
            <!-- boton menu flotante -->
            <button type="button" 
            class="btn btn-outline-success dropdown-toggle" 
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ></button>
            <ul class="dropdown-menu mt-3 border border-success bg-dark">
                <li v-for="r in rutas">
                    <a class="btn btn-outline-success d-block rounded-0 border-0" 
                    v-on:click="insertarRuta(r.ruta)" 
                    href="#"
                    >
                        {{ r.nombre }}
                    </a>
                    <hr class="dropdown-divider m-0 p-0"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import LoginModal from '../components/LoginModal.vue'

export default{
    name: 'Header',
    components:{
        LoginModal
    },
    props:{
    },
    data:()=>({
        rutas:[
            {nombre: 'Inicio', ruta:'/', titulo: 'Pagina principal'},
            {nombre: 'Nosotros', ruta:'/nosotros', titulo: 'about'},
            {nombre: 'Wiki', ruta:'/wiki', titulo: '', 
                subRuta:[
                    {nombre:'Digimon', ruta:'/digimon', titulo: 'Digi Wiki'},
                    {nombre:'Pokemon', ruta:'/Pokemon', titulo: 'Poke Wiki'},
            ]},
            {nombre: 'Contacto', ruta:'/contacto'}
        ],
    }),
    methods:
    {
        insertarRuta(ruta){
            this.$store.state.load = true;
            this.$router.push(ruta);
            setTimeout(() => {
               this.$store.state.load = false; 
            }, 1000);
        },
   
        insertarSubRuta(ruta){
            this.$store.state.load = true;
            
            // setTimeout(() => {
                this.$router.push({name:ruta});
            // }, 600);
            // this.$store.state.load = false;
        },
    },
    mounted(){
        setTimeout(() => {
           this.$store.state.load = false; 
        }, 600);
    }
}
</script>

<style scoped>
*{
    color:white;
}
nav a:active {
  color: #42b983;
  font-weight: bold;
}
</style>
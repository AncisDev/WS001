<template>
    <div class="w-100 bg-dark text-light border-bottom border-success d-flex justify-content-between align-items-center sticky-top border-bottom m-0 p-0">
        <div class="w-100 w-md-25 px-1 p-0 m-0 text-start fs-1 ">
            <router-link :to="{name: 'Inicio'}"
            class="btn btn-outline-success btn-lg border-0 rounded-0 w-100 fs-2 text-start d-block"
            >
                Empresa {{ scTop }}
            </router-link>
        </div>

        <div ref="titleView" class="text-center text-warning fs-5 w-100">{{$route.name}}</div>

        <div class="btn-group d-md-none w-50 ms-5 me-4">
            <button type="button" 
            class="btn btn-outline-success dropdown-toggle" 
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ></button>
            <ul class="dropdown-menu text-light bg-dark mt-1">
                <li v-for="r in rutas">
                    <a class="dropdown-item" href="#">{{ r.nombre }}</a>
                    <hr class="dropdown-divider m-0 p-0"/>
                </li>
            </ul>
        </div>
        
        <nav  
        class="w-100 mw-md-25 m-0 d-none d-md-flex justify-content-end align-items-center"
        >
            <div v-for="r in rutas">
                <button v-if="r.subRuta"
                class="btn btn-sm btn-outline-success dropdown-toggle mx-1 p-1" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                    {{ r.nombre }}
                </button>

                <button v-else v-on:click="insertarRuta(r.ruta)"
                class="btn btn-sm btn-outline-success mx-1 p-1"
                >
                    {{r.nombre}}
                </button>

                <ul class="dropdown-menu bg-success">
                    <li v-for="sr in r.subRuta" >
                        <a class="btn btn-sm border-0 dropdown-item" 
                        v-on:click="insertarSubRuta(sr.nombre,sr.nombre)" 
                        >
                            {{ sr.nombre }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

export default{
    name: 'Header',
    props:{
        scTop:String,
    },
    data:()=>({
        rutas:[
            {nombre: 'Inicio', ruta:'/', titulo: 'Pagina principal'},
            {nombre: 'Nosotros', ruta:'/nosotros', titulo: 'about'},
            {nombre: 'Wiki', ruta:'/wiki', titulo: '', 
                subRuta:[
                    {nombre:'Digimon', ruta:'/digimon', titulo: 'Digi Wiki'},
                    {nombre:'Pokemon', ruta:'/pokemon', titulo: 'Poke Wiki'},
            ]},
            {nombre: 'Contacto', ruta:'/contacto'}
        ],
    }),
    methods:
    {
        insertarRuta(ruta){
            this.$router.push(ruta);
        },
   
        insertarSubRuta(ruta,subRuta){
            this.$router.push({name: ruta, params:{ id: subRuta }});
        },
    },
    mounted(){

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
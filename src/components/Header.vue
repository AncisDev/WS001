<template>
    <div  class="w-100 bg-dark text-light border-bottom border-success d-flex justify-content-between sticky-top border-bottom m-0 p-0">
        <div class="px-4 text-start fs-1">
            Empresa
        </div>
        <nav class="w-md-50 d-flex justify-content-evenly align-items-center">
            <div
                 v-for="r in rutas" 
                 class="btn"
                 >
                    
                    <button v-if="r.subRuta "
                    class="btn btn-outline-success dropdown-toggle" 
                    type="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false">
                        {{ r.nombre }}
                    </button>
                    <button v-else v-on:click="insertarRuta(r.ruta)"
                    class="btn btn-outline-success"
                    >
                        {{r.nombre}}
                    </button>
                    <ul class="dropdown-menu bg-success">
                        <li v-for="sr in r.subRuta" >
                            <a class="dropdown-item" 
                            v-on:click="insertarRuta(sr.ruta)" 
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

    },
    data:()=>({
        rutas:[
            {nombre: 'Inicio', ruta:'/'},
            {nombre: 'Nosotros', ruta:'/nosotros'},
            {nombre: 'Wiki', ruta:'/wiki', 
                subRuta:[
                    {nombre:'Digimon', ruta:'/digimon'},
                    {nombre:'Pokemon', ruta:'/pokemon'},
            ]},
            {nombre: 'Contacto', ruta:'/contacto'}
        ]
    }),
    methods:
    {
        insertarRuta(ruta){
        this.$router.push(ruta);
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
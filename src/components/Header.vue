<template>
    <div  class="bg-dark text-light border-bottom border-success d-flex justify-content-between sticky-top border-bottom m-0 p-0">
        <div class="px-4 text-start d-block fs-1">
            Empresa
        </div>
        <nav class="w-50 d-flex justify-content-evenly align-items-center">
            <div
                 v-for="item in rutas"
                 v-on:click="insertarRuta(item.ruta)" 
                 class="btn"
                 >{{item.nombre}}</div>
        </nav>
    </div>
</template>

<script>
import HomeView from '@/views/Inicio.vue';


export default{
    name: 'Header',
    props:{

    },
    data:()=>({
        rutas:[
            {nombre: 'Inicio', ruta:'/'},
            {nombre: 'Nosotros', ruta:'/nosotros'},
            {nombre: 'Productos', ruta:'/productos'},
            {nombre: 'Contacto', ruta:'/contacto'}
        ]
    }),
    methods:
    {
        insertarRuta(ruta){
        this.$router.push(ruta);
        }
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
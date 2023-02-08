<template>
    <div  class="w-100 bg-dark text-light border-bottom border-success d-flex justify-content-between sticky-top border-bottom m-0 p-0">
        <div class="px-4 text-start fs-1">
            Empresa
        </div>
        <nav class="w-md-50 d-flex justify-content-evenly align-items-center">
            <div
                 v-for="r in rutas"
                 v-on:click="insertarRuta(r.ruta)" 
                 class="btn"
                 >{{r.nombre}}</div>
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
            {nombre: 'Wiki', ruta:'/productos', 
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

        addClass(clase){
        this.$router.push(clase);
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
<template>
  <div class="inicio">
    <div class="text-bg-dark d-flex align-items-center overflow-auto ">
      <a v-for="site in mySites" 
      :href="site.url" target="_blank" 
      class="btn btn-sm btn-outline-success border-0 rounded-pill text-light text-decoration-none my-2 ms-2 px-3"
      >
        {{ site.nombre }}
      </a>
    </div>

    <header class="py-3 border-bottom border-success d-flex justify-content-center align-items-center text-bg-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
        <span class="fs-1">ienvenido a '' </span>
    </header>

    <div v-for="(r,i) in rutas" :key="i" 
    :id="'bank-card'+(i+1)"
    class="w-100 border-top d-flex align-items-center"
    >

      <div v-if="i > 0" class="w-50 h-100 d-flex align-items-center">
        <img v-if="r.img"
        :src="r.img" 
        alt="TravelDev Trip" 
        class="border-0 ms-auto d-block"
        style="max-width: 20rem;"
        >
      </div>

      <div v-if="i > 0"
        class="py-5 w-50" 
      >
        <h2 class="py-2">{{ r.titulo }}</h2>
        <p class="py-4">{{ r.detalle }}.</p>

        <button v-on:click="insertarRuta(r.nombre,id)"
        class="btn btn-dark d-block mx-auto px-5 py-2"
        >{{ r.nombre }}</button>

        <div v-if="r.subRuta">
          <hr class="border-light w-50 mx-auto"/>
          <button v-for="sr in r.subRuta"
          v-on:click="insertarRuta(sr.nombre,sr.id)"
          class="btn btn-outline-dark text-light border-0"
          >{{ sr.nombre }}</button>
        </div>
      </div>
    </div>

    <div class="align-items-md-stretch">
      <div class="">
        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Inicio',
  components: {
  },
  props:{
  },
  data:()=>({
    imgs:[
      {Nosotros:'../assets/img/mySites/logo_2.png', },
      {Wiki:'',},
      {Contacto:''}
    ],
    rutas:[
      {nombre: 'Inicio', id:'', titulo: 'Pagina principal', detalle: ''},
      {nombre: 'Nosotros', id:'nosotros', titulo: 'Sobre nosotros', detalle: 'Informate sobre nosotros y nuestro objetivo'},
      {nombre: 'Wiki', id:'', titulo: 'Catalogo Anime', detalle: 'Encuentra informacion de personajes de anime', 
        subRuta:[
          {nombre:'Digimon', id:'digimon', titulo: 'DigiWiki', detalle: 'Catalogo de personajes de Digimon'},
          {nombre:'Pokemon', id:'pokemon', titulo: 'PokeWiki', detalle: 'Catalogo de personajes de Pokemon'},
      ]},
      {nombre: 'Contacto', id:'contacto', titulo: 'Contactanos', detalle:'Informacion y formulario de contacto'}
    ],
    mySites:[
      {nombre: 'AnimeFLV', id: 'animeflv', url: 'https://www3.animeflv.net/'},
      {nombre: 'Disney+', id: 'youtube', url: 'https://www.disneyplus.com/'},
      {nombre: 'Star+', id: 'youtube', url: 'https://www.starplus.com/'},
      {nombre: 'Prime Video', id: 'youtube', url: 'https://www.primevideo.com/'},
      {nombre: 'Youtube', id: 'youtube', url: 'https://www.youtube.com/'},
    ]
  }),
  methods:{
    insertarRuta(ruta,idx){
      this.$router.push({name:ruta, params:{ id: idx}});
    },
  },
  mounted(){
    
  }
}
</script>

<style scoped>
#bank-card1{
  color: white;
  background: rgb(177,58,255);
  background: linear-gradient(90deg, rgba(177,58,255,1) 0%, rgba(71,18,124,1) 70%, rgba(105,15,215,1) 100%);
}
#bank-card2{
  color: white;
  background: rgb(58,255,108);
  background: linear-gradient(90deg, rgba(58,255,108,1) 0%, rgba(18,124,52,1) 47%, rgba(15,215,77,1) 100%);
}
#bank-card3{
  color: white;
  background: rgb(255,58,58);
  background: linear-gradient(90deg, rgba(255,58,58,1) 0%, rgba(124,18,18,1) 47%, rgba(215,15,15,1) 100%);
}
#bank-card4{
  color: white;
  background: rgb(177,58,255);
  background: linear-gradient(90deg, rgba(177,58,255,1) 0%, rgba(71,18,124,1) 70%, rgba(105,15,215,1) 100%);
}
#bank-card5{
  color: white;
  background: rgb(58,255,108);
  background: linear-gradient(90deg, rgba(58,255,108,1) 0%, rgba(18,124,52,1) 47%, rgba(15,215,77,1) 100%);
}
#bank-card6{
  color: white;
  background: rgb(255,58,58);
  background: linear-gradient(90deg, rgba(255,58,58,1) 0%, rgba(124,18,18,1) 47%, rgba(215,15,15,1) 100%);
}
</style>

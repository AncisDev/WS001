<template>
  <div class="inicio">
      <div id="bank-card1" class="w-100 vh-100" >
        <Tarjeta 
          v-for="digi in digimons"
          titulo=""'{{ digi.name }}'
        ></Tarjeta>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Tarjeta from "@/components/Tarjeta.vue";

export default {
  name: 'Inicio',
  components: {
    Tarjeta
  },
  props:{
  },
  data(){
    return{
      digimons:[]
    }
  },
  mounted(){
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then((res)=>res.json())
    .then((res)=>this.digimons=res)
  }
}
</script>

<style>
#bank-card1{
  background: rgb(177,58,255);
  background: linear-gradient(90deg, rgba(177,58,255,1) 0%, rgba(71,18,124,1) 70%, rgba(105,15,215,1) 100%);
}
</style>
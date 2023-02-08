<template>
  <div class="inicio">
      <div id="bank-card1" class="container-fluid w-100">
        <h1 class="text-light p-3">{{ nivel.fresh }}</h1>
        <Tarjeta :digiNivel="nivel.fresh"></Tarjeta>
      </div>
      <div id="bank-card2" class="container-fluid w-100">
        <h1 class="text-light p-3">{{ nivel.bebe }}</h1>
        <Tarjeta :digiNivel="nivel.bebe"></Tarjeta>
      </div>
      <div id="bank-card3" class="container-fluid w-100">
        <h1 class="text-light p-3">{{ nivel.bebe2 }}</h1>
        <Tarjeta :digiNivel="nivel.bebe2"></Tarjeta>
      </div>
      <div id="bank-card1" class="container-fluid w-100">
        <h1 class="text-light p-3">{{ nivel.infantil }}</h1>
        <Tarjeta :digiNivel="nivel.infantil"></Tarjeta>
      </div>
      <div id="bank-card2" class="container-fluid w-100">
        <h1 class="text-light p-3">{{ nivel.adulto }}</h1>
        <Tarjeta :digiNivel="nivel.adulto"></Tarjeta>
      </div>
      <div id="bank-card3" class="container-fluid w-100">
        <h1 class="text-light p-3">{{ nivel.definitivo }}</h1>
        <Tarjeta :digiNivel="nivel.definitivo"></Tarjeta>
      </div>
      <div id="bank-card1" class="container-fluid w-100">
        <h1 class="text-light p-3">{{ nivel.armor }}</h1>
        <Tarjeta :digiNivel="nivel.armor"></Tarjeta>
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
  data:()=>({
    nivel: {
                fresh:"Fresh",
                bebe:"In Training",
                bebe2:"Training",
                infantil: "Rookie",
                adulto: "Champion",
                perfecto:"Ultimate",
                definitivo:"Mega",
                armor:"Armor"
            },
  })
}
</script>

<style>
#bank-card1{
  background: rgb(177,58,255);
  background: linear-gradient(90deg, rgba(177,58,255,1) 0%, rgba(71,18,124,1) 70%, rgba(105,15,215,1) 100%);
}
#bank-card2{
  background: rgb(58,255,108);
  background: linear-gradient(90deg, rgba(58,255,108,1) 0%, rgba(18,124,52,1) 47%, rgba(15,215,77,1) 100%);
}
#bank-card3{
  background: rgb(255,58,58);
  background: linear-gradient(90deg, rgba(255,58,58,1) 0%, rgba(124,18,18,1) 47%, rgba(215,15,15,1) 100%);
}
</style>

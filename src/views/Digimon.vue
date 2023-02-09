<template>
  <div class="digimon">
    <div class="container-fluid bg-dark text-light fw-bolder">
      <p class="h1 m-0 py-4">{{$route.name}}</p>
    </div>

    <hr class="opacity-100 border-success m-0 p-0">
    
    <div id="bank-card1" class="container-fluid p-0 w-100">
      <span class="text-light py-3 bg-dark d-block fs-3">{{ nivel.fresh }} {{ wdTop }}</span>
      <DigiCards :digiNivel="nivel.fresh"></DigiCards>
    </div>

    <div id="bank-card2" class="container-fluid p-0 w-100">
      <span class="text-light py-3 bg-dark d-block fs-3">{{ nivel.bebe }}</span>
      <DigiCards :digiNivel="nivel.bebe"></DigiCards>
    </div>

    <div id="bank-card3" class="container-fluid p-0 w-100">
      <span class="text-light py-3 bg-dark d-block fs-3">{{ nivel.bebe2 }}</span>
      <DigiCards :digiNivel="nivel.bebe2"></DigiCards>
    </div>

    <div id="bank-card1" class="container-fluid p-0 w-100">
      <span class="text-light py-3 bg-dark d-block fs-3">{{ nivel.infantil }}</span>
      <DigiCards :digiNivel="nivel.infantil"></DigiCards>
    </div>

    <div id="bank-card2" class="container-fluid p-0 w-100">
      <span class="text-light py-3 bg-dark d-block fs-3">{{ nivel.adulto }}</span>
      <DigiCards :digiNivel="nivel.adulto"></DigiCards>
    </div>

    <div id="bank-card3" class="container-fluid p-0 w-100">
      <span class="text-light py-3 bg-dark d-block fs-3">{{ nivel.definitivo }}</span>
      <DigiCards :digiNivel="nivel.definitivo"></DigiCards>
    </div>

    <div id="bank-card1" class="container-fluid p-0 w-100">
      <span class="text-light py-3 bg-dark d-block fs-3">{{ nivel.armor }}</span>
      <DigiCards :digiNivel="nivel.armor"></DigiCards>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DigiCards from "@/components/DigiCards.vue";

export default {
  name: 'Digimon',
  components: {
    DigiCards
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
  }),
  methods:{

  }
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

<template>
  <div class="digimon">
    <div class="container-fluid bg-dark text-light fw-bolder">
      <p class="h1 m-0 py-4">{{$route.name}}</p>
    </div>

    <hr class=" border-success m-0 p-0">
    
    <div v-for="(nv,i) in nivel" :key="i" 
    :id="'bank-card'+(i+1)"
    class=""
    >
      <span class="text-light py-3 bg-dark d-block fs-4">{{ nv }}</span>
      <div class="p-0 w-100">
        <DigiCards :digiNivel="nv"></DigiCards>
      </div>
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
    nivel: [
      "Fresh",
      "In Training",
      "Training",
      "Rookie",
      "Champion",
      "Ultimate",
      "Mega",
      "Armor"
    ],
  }),
  methods:{

  }
}
</script>

<style scoped>
#bank-card0{
  color: white;
  background: rgb(177,58,255);
  background: linear-gradient(90deg, rgba(177,58,255,1) 0%, rgba(71,18,124,1) 70%, rgb(115, 0, 255) 100%);
}
#bank-card1{
  color: white;
  background: rgb(177,58,255);
  background: linear-gradient(90deg, rgba(177,58,255,1) 0%, rgba(71,18,124,1) 70%, rgb(115, 0, 255) 100%);
}
#bank-card2{
  color: white;
  background: rgb(58,255,108);
  background: linear-gradient(90deg, rgba(58,255,108,1) 0%, rgba(18,124,52,1) 47%, rgb(0, 255, 81) 100%);
}
#bank-card3{
  color: white;
  background: rgb(255,58,58);
  background: linear-gradient(90deg, rgba(255,58,58,1) 0%, rgba(124,18,18,1) 47%, rgb(255, 0, 0) 100%);
}
#bank-card4{
  color: white;
  background: rgb(177,58,255);
  background: linear-gradient(90deg, rgba(177,58,255,1) 0%, rgba(71,18,124,1) 70%, rgb(115, 0, 255) 100%);
}
#bank-card5{
  color: white;
  background: rgb(58,255,108);
  background: linear-gradient(90deg, rgba(58,255,108,1) 0%, rgba(18,124,52,1) 47%, rgb(0, 255, 81) 100%);
}
#bank-card6{
  color: white;
  background: rgb(255,58,58);
  background: linear-gradient(90deg, rgba(255,58,58,1) 0%, rgba(124,18,18,1) 47%, rgb(255, 0, 0) 100%);
}
#bank-card7{
  color: white;
  background: rgb(177,58,255);
  background: linear-gradient(90deg, rgba(177,58,255,1) 0%, rgba(71,18,124,1) 70%, rgb(115, 0, 255) 100%);
}
#bank-card8{
  color: white;
  background: rgb(58,255,108);
  background: linear-gradient(90deg, rgba(58,255,108,1) 0%, rgba(18,124,52,1) 47%, rgb(0, 255, 81) 100%);
}
#bank-card9{
  color: white;
  background: rgb(255,58,58);
  background: linear-gradient(90deg, rgba(255,58,58,1) 0%, rgba(124,18,18,1) 47%, rgb(255, 0, 0) 100%);
}
</style>

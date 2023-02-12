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

  },
  beforeMount(){
    this.$store.state.load = true; 
  },
  mounted(){
    setTimeout(() => {
      this.$store.state.load = false; 
    }, 600);
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="digimon">
    <!-- <div class="container-fluid bg-dark text-light fw-bolder">
      <p class="h1 m-0 py-4">{{$route.name}}</p>
    </div>

    <hr class=" border-success m-0 p-0"> -->

    
    <div v-for="(nv,i) in nivel" :key="i"
    :id="'bank-card'+(i+1)"
    style="max-width: 100%;"
    class=""
    >
      <div class="w-100 text-center p-5 fs-4 text-bg-dark">{{ nv }}</div>
      <div class="container d-flex flex-wrap justify-content-center py-5">
        <DigiCards 
        :digiNivel="nv"
        ></DigiCards>
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
    // setTimeout(() => {
    //   this.$store.state.load = false; 
    // }, 600);
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="pokemon">
    <div class="container-fluid bg-dark text-light fw-bolder">
      <p class="h1 m-0 p-5">{{$route.name}}</p>
      <button v-on:click="getPokedex('pokedex')"
      class="btn btn-dark" 
      >Lista Pokedex</button>
    </div>
    <div class="list-group w-25">
        <a v-for="dex in pokeDex.results"
        class="list-group-item list-group-item-action"
        >{{ dex.name }}</a>
    </div>
    <div class="container">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PokeCards from "@/components/PokeCards.vue";

export default {
  name: 'Pokemon',
  components: {
    PokeCards
  },
  props:{
  },
  data:()=>({
    pokemonApi:[],
    pokeDex:[],
    pokemons:[],
    abilidades:[],
  }),
  methods:
    {      
      getPokedex(){
        fetch(this.pokemonApi.pokedex)
        .then((res)=>res.json())
        .then((res)=>this.pokeDex=res)
        .then((res)=>console.log(res))
      },
    },
  mounted(){
      fetch("https://pokeapi.co/api/v2/")
      .then((res)=>res.json())
      .then((res)=>this.pokemonApi=res)

      console.log('')
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

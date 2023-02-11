<template>
  <div class="pokemon">
    <div class="container-fluid bg-dark text-light fw-bolder">
      
      <div v-if="pokeMons.descriptions" v-show="show" v-for="desc in pokeMons.descriptions"
      class="bg-dark text-center w-100 m-0 p-0">
        <div v-if="desc.language.name == 'es'" 
        class="badge fs-1 text-warning pe-4 py-2"
        >{{desc.description}}</div>
      </div>
      <h1 v-else class="text-warning">{{ $route.name }}</h1>

      <div class="py-2">
        <button v-on:click="getPokedex()"
        class="btn btn-sm btn-warning mx-1" 
        >REGIONES</button>
        
        <button v-on:click="getPokemons(pokeApi.pokemon), show = false"
        class="btn btn-sm btn-warning mx-1" 
        >POKEMON</button>
      </div>
    </div>
    
    

    <div v-if="pokeDex.results" class="d-flex position-fixed w-100 h-75">
      <div class="col-4 col-md-3 col-xl-2 rounded-0 border-top m-0 p-0 list-group overflow-auto">
        <button v-for="item in pokeDex.results"
        class="list-group-item list-group-item-action rounded-0 border-0 border-bottom text-bg-dark text-uppercase"
        >
          <div v-on:click="getPokemons(item.url)"
          class="w-100"
          >
           {{ item.name }}
          </div>
          <!-- <div v-on:click="getPokeInfo(item.url)"
          class="w-100"
          >
            {{ item.name }}
          </div> -->
        </button>
      </div>
      
      <div class="row m-0 p-0 vh-100 overflow-auto">
        <div v-for="dex in pokeMons.pokemon_entries"
        class="col m-0 p-0"
        >
          <PokeCards 
          :cardTitle="dex.pokemon_species.name"
          :cardBody="''"
          :badgeMsg="'N°'+dex.entry_number" 
          :cardImg="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+Number(dex.entry_number)+'.svg'"
          ></PokeCards>
        </div>
      </div>
    </div>

    <div v-else class="m-auto p-0" style="max-width: 1000px;max-height: 300px;">
      <img src="../assets/img/mySites/anime/pokemon/logo_pokemon.png" 
      alt=""
      class="w-100 h-100"
      >
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
    show:false,
    pokeApi:[],
    pokeDex:[],
    pokeMons:[],
  }),
  methods:
  {      
    getPokedex(){
      this.$store.state.load = true;
      
      fetch(this.pokeApi.pokedex)
      .then((res)=>res.json())
      .then((res)=>this.pokeDex=res)
      .then((res)=>console.log(res))
      .then(()=>this.$store.state.load = false)
    },

    getPokemons(api){
      this.$store.state.load = true;
      console.log(api)
      
      fetch(api)
      .then((res)=>res.json())
      .then((res)=>this.pokeMons=res)
      .then((res)=>console.log(res))
      .then(()=>this.$store.state.load = false)
      .then(()=>this.show = true)
    },

    
  },
  beforeMount(){
    
  },
  mounted(){
    fetch(this.$store.state.pokeApi)
    .then((res)=>res.json())
    .then((res)=>this.pokeApi=res)
    .then((res)=>console.log(res))
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

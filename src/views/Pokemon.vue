<template>
  <div class="pokemon">
    <div class="container-fluid bg-dark text-light fw-bolder">
      <p class="h1 m-0 py-4">{{$route.name}}</p>
      <button v-on:click="getRegiones('pokedex')"
      class="btn btn-sm btn-dark" 
      >REGIONES</button>
      
      <button v-on:click="getPokemons(urlApi+'pokemon')"
      class="btn btn-sm btn-dark" 
      >POKEMON</button>
    </div>

    <div class="d-flex position-fixed w-100 h-75">
      <div class="col-4 col-md-3 col-xl-2 m-0 p-0 list-group overflow-auto">
        <button v-for="item in pokeLista"
        class="list-group-item list-group-item-action rounded-0 text-uppercase"
        >
          <div v-on:click="getDex(item.url)"
          class="w-100"
          >
            {{ item.name }}
          </div>
          <div  v-on:click="getDex(item.url)"
          class="w-100"
          >
            {{ item.name }}
          </div>
        </button>
      </div>
      
      <div class="row m-0 p-0 vh-100 overflow-auto">
        <div>
          <!-- <h1>{{pokeDescripcion[2].description}}</h1> -->
        </div>

        <div v-for="dex in pokeDex.pokemon_entries"
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
    urlApi:"https://pokeapi.co/api/v2/",
    pokeLista:[],
    pokeDescripcion:[],
    pokeApi:[],
    pokeRegion:[],
    pokeDex:[],
    pokemons:[],
    abilidades:[],
    prevDexCount:[
      {
        
      }
    ],
  }),
  methods:
    {      
      getRegiones(){
        fetch(this.pokeApi.pokedex)
        .then((res)=>res.json())
        .then((res)=>this.pokeRegion=res)
        .then((res)=>this.pokeLista=res.results)
        // .then((res)=>console.log(res))
      },
      getDex(region){
        fetch(region)
        .then((res)=>res.json())
        .then((res)=>this.pokeDex=res)
        .then((res)=>this.pokeDescripcion=res.descriptions)
        .then((res)=>console.log(res))
      },
      getPokemons(pokemons){
        fetch(pokemons)
        .then((res)=>res.json())
        .then((res)=>this.pokemons=res)
        .then((res)=>this.pokeLista=res.results)
        .then((res)=>console.log(res))
      },
      getPokeInfo(urlInfo){
       fetch(urlInfo)
       .then((res)=>res.json())
       .then((res)=>this.pokemons=res)
       .then((res)=>console.log(res))
     },
  },
  mounted(){
    fetch(this.urlApi)
    .then((res)=>res.json())
    .then((res)=>this.pokeApi=res)
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

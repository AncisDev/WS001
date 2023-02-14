<template>
  <div class="pokemon">
    <div class="bg-dark text-light border-bottom border-secondary fw-bolder">
      
      <div>
        <div v-if="pokeMons.descriptions" v-show="show" v-for="desc in pokeMons.descriptions"
        class="bg-dark text-center w-100 m-0 p-0"
        >
          <span v-if="desc.language.name == 'es'" 
          class="badge fs-2 text-warning text-wrap py-2"
          >{{desc.description}}</span>
        </div>
        <h2 v-else class="text-warning text-center fw-bolder py-2">¡Atrapalos todos!</h2>
      </div>

      <!--cambiar por v-for de botones de lista-->
      <div class="pb-2 text-center">
        <button v-on:click="getRegion(pokeApi.pokedex+'?limit=30'), showImg = false"
        class="btn btn-sm btn-warning rounded-pill p-1 m-1" 
        >REGIONES</button>
        
        <button v-on:click="getPokemons(pokeApi.pokemon), showImg = false"
        class="btn btn-sm btn-warning rounded-pill p-1 m-1" 
        >POKEMON</button>
      </div>
    </div>
    
    <div  v-if="lista" class="row m-0 p-0 position-fixed w-100 h-100">
      <div id="lista" 
      class="col-4 col-md-3 col-xl-2 rounded-0 bg-dark m-0 px-0 list-group h-100  text-center"
      >
        <div class="h-75 overflow-auto">
          <button v-for="item in lista"
          class="list-group-item list-group-item-action m-0 px-0 rounded-0 border-0 border-secondary border-bottom text-warning bg-dark text-uppercase"
          >
            <div v-on:click="getPokeInfo(item.url)">
            {{ item.name }}
            </div>
          </button>
        </div> 
      </div>
      
      <div v-if="pokeInfo.pokemon_entries"
      style="max-height: 80%;" 
      class="col w-100 m-0 p-0 overflow-auto"
      >
        <div class="row m-0 mb-4 p-0 ">
          <PokeCards v-for="pk in pokeInfo.pokemon_entries"
          class="col my-4" 
          :cardTitle="pk.pokemon_species.name"
          :cardBody="''"
          :badgeMsg="'N°'+pk.entry_number" 
          :cardImg="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+Number(pk.entry_number)+'.png'"
          :btnShow="true"
          ></PokeCards>
        </div>
      </div>
      <div v-else-if="pokeInfo.moves"
      class="col m-0 mb-5 p-0 pb-5 h-100 bg-light border border-dark overflow-auto"
      style="font-size: .8rem;"
      >
        <div class="row border-bottom border-dark bg-danger m-0 p-0">
          <PokeCards class="col col-md-6 m-0 p-0"
          style="transform: scale(0.7);"
          :cardTitle="pokeInfo.name"
          :cardBody="''"
          :badgeMsg="'N°'+pokeInfo.id" 
          :cardImg="pokeInfo.sprites.other.dream_world.front_default"
          ></PokeCards>
          <div class="col-12 col-md d-flex justify-content-start align-items-center m-0 p-0">
            <h3 class="mx-2">Tipos</h3>
            <div v-for="tipo in pokeInfo.types" >
              <span  class="text-bg-warning rounded-pill mx-2 p-2">{{ tipo.type.name }}</span>
            </div> 
          </div>
        </div>

        <div class="row border-top border-dark m-0 mb-5 px-5 py-3">
          <div class="col-md-6 my-2 px-0">
            <h3 class="tex-bg-dark">Estadisticas</h3>
            <hr>
            <div  v-for="stat in pokeInfo.stats" 
            class="d-flex justify-content-between text-start"
            >
              <p class="w-50">{{ stat.stat.name }}</p>
              <p class="w-50">: {{ stat.base_stat }}</p>
            </div>
          </div>

          <div class="col-md-6 my-2 p-0 ">
            <h3>Movimientos</h3>
            <hr>
            <div style="max-height: 220px;max-width: 700px;"
            class="border border-dark rounded overflow-y-auto bg-light-subtle py-2 px-2">
              <p v-for="move in pokeInfo.moves" 
              style="font-size: .7rem;"
              class="btn btn-sm btn-outline-primary d-block mx-auto text-start text-uppercase rounded-pill"
              >{{ move.move.name }}</p>
            </div>
          </div>

          <div class="col-12 m-0  p-0">
            <div class="row my-2 p-0 pb-5 d-flex justify-content-evenly align-items-center">
              <h5 class="">Exp. Base</h5>
              <hr >
              <span class="text-bg-primary text-end rounded-pill mx-auto py-2 px-4">{{ pokeInfo.base_experience }}XP</span>
            </div>
          </div>

          <hr class="mb-5">
        </div>
      </div>
    </div>

    <div v-show="showImg" class="w-100 h-75 position-absolute">
      <img src="../assets/img/mySites/anime/pokemon/logo_pokemon.png" 
      alt=""
      class="position-absolute start-50 top-50 translate-middle"
      style="max-width: 100%;max-height: 50%;"
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
    showImg:true,
    show:false,
    lista:'',
    pokeApi:[],
    pokeDex:[],
    pokeMons:[],
    pokeInfo:[],
    colorTipo:[
      {grass: 'green'},
      {fire: 'red'},
      {water: 'blue'},
      {electric: 'yellow'},
      {fly: 'verde'},
      {ground: 'verde'},
      {rock: 'verde'},
      {psych: 'verde'},
    ],
  }),
  methods:
  {      
    getRegion(api){
      this.$store.state.load = true;
      console.log('----getRegiones()----')
      fetch(api)
      .then((res)=>res.json())
      .then((res)=>this.pokeDex=res)
      .then(()=>this.lista=this.pokeDex.results)
      .then(()=>setTimeout(() => {
        this.$store.state.load = false
      }, 1000))
    },

    getPokemons(api){
      this.$store.state.load = true;
      console.log('----getPokemons()----')
      fetch(api)
        .then((res)=>res.json())
        .then((res)=>this.pokeMons=res)
        .then(()=>this.lista=this.pokeMons.results)
        .then(()=>this.show = true)
        .then(()=>setTimeout(() => {
        this.$store.state.load = false
      }, 1000))
    },

    getPokeInfo(api){
      this.$store.state.load = true;
      console.log('----getPokeInfo()----') 
      fetch(api)
        .then((res)=>res.json())
        .then((res)=>this.pokeInfo=res)     
        .then(()=>setTimeout(() => {
        this.$store.state.load = false
      }, 1000))
    }
  },
  beforeMount(){
    this.$store.state.load = true; 
  },
  mounted(){
    fetch(this.$store.state.pokeApi)
      .then((res)=>res.json())
      .then((res)=>this.pokeApi=res)
      .then((res)=>console.log(res))
      .then(()=>setTimeout(() => {
        this.$store.state.load = false
      }, 1000))
  }
}
</script>

<style scoped>


</style>

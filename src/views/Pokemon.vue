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
        <button v-on:click="getRegion(pokeApi.pokedex), showImg = false"
        class="btn btn-sm btn-warning rounded-pill p-1 m-1" 
        >REGIONES</button>
        
        <button v-on:click="getPokemons(pokeApi.pokemon), showImg = false"
        class="btn btn-sm btn-warning rounded-pill p-1 m-1" 
        >POKEMON</button>
      </div>
    </div>
    
    

    <div  v-if="lista" class="row position-fixed m-0 p-0 w-100 h-100">
      <div class="col-4 col-md-3 rounded-0 bg-dark m-0 p-0 list-group overflow-auto text-center">
        <button v-for="item in lista"
        class="list-group-item list-group-item-action m-0 p-0 rounded-0 border-0 border-secondary border-bottom text-warning bg-dark text-uppercase"
        >
          <div v-on:click="getPokeInfo(item.url)"
          class="w-100 py-1"
          >
           {{ item.name }}
          </div>
        </button>
      </div>
      
      <div v-if="pokeInfo.pokemon_entries" class="col m-0 p-0 overflow-auto">
        <div v-for="pk in pokeInfo.pokemon_entries"
        class="col m-0 p-0"
        >
          <PokeCards 
          :cardTitle="pk.pokemon_species.name"
          :cardBody="''"
          :badgeMsg="'N°'+pk.entry_number" 
          :cardImg="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+Number(pk.entry_number)+'.png'"
          :btnShow="true"
          ></PokeCards>
        </div>
      </div>
      <div v-else-if="pokeInfo.moves"
      class="col m-0 p-0 overflow-auto h-100"
      style="font-size: .8rem;"
      >
        <div class="col-12 border border-dark bg-danger m-0 p-0 sticky-top">
          <PokeCards 
          class="mx-auto"
          :cardTitle="pokeInfo.name"
          :cardBody="''"
          :badgeMsg="'N°'+pokeInfo.id" 
          :cardImg="pokeInfo.sprites.other.dream_world.front_default"
          ></PokeCards>
        </div>

        <div class="col-12 border border-dark bg-light m-0 p-5 w-100 h-75 overflow-auto">
          <div class="row">
            <div class="col m-0 p-0">
              <h3 class="tex-bg-dark">Stats</h3>
              <hr>
              <div  v-for="stat in pokeInfo.stats" 
              class="d-flex justify-content-between text-start"
              >
                <p class="w-50">{{ stat.stat.name }}</p>
                <p class="w-50">: {{ stat.base_stat }}</p>
              </div>
            </div>

            <div class="col m-0 p-0 ">
                <h3>Movimiento</h3>
                <hr>
                <div style="max-height: 220px;font-size: 5.rem;"
                class="border border-dark rounded overflow-y-auto bg-light-subtle p-2">
                  <p v-for="move in pokeInfo.moves" class="btn d-block text-start rounded-pill">{{ move.move.name }}</p>
                </div>
            </div>
          </div>

          <div class="row m-0 p-0">
            <div class="col-6">
              <h3>Tipos</h3>
              <hr>
              <div class="d-flex justify-content-evenly align-items-center">
                <div v-for="tipo in pokeInfo.types" >
                <span  class="text-bg-warning rounded-pill mx-auto p-2">{{ tipo.type.name }}</span>
              </div> 
              </div> 
            </div>
            <div class="col ">
              <h3 class="">Exp. Base</h3>
              <hr>
              <div class="d-flex justify-content-evenly align-items-center">
                <span class="text-bg-warning rounded-pill mx-auto p-2">{{ pokeInfo.base_experience }}XP</span>
              </div>
            </div>
          </div>
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
      .then((res)=>console.log(res))
      .then(()=>this.$store.state.load = false)
    },

    getPokemons(api){
      this.$store.state.load = true;
      console.log('----getPokemons()----')
      
      setTimeout(() => {
        fetch(api)
        .then((res)=>res.json())
        .then((res)=>this.pokeMons=res)
        .then(()=>this.lista=this.pokeMons.results)
        .then((res)=>console.log(res))
        .then(()=>this.$store.state.load = false)
        .then(()=>this.show = true)
      }, 1300);
    },

    getPokeInfo(api){
      this.$store.state.load = true;
      console.log('----getPokeInfo()----')
      console.log(api)
      
      setTimeout(() => {
        fetch(api)
        .then((res)=>res.json())
        .then((res)=>this.pokeInfo=res)
        // .then((res)=>console.log(res))
        // .then(()=>this.lista=this.pokeInfo.results)
        .then((res)=>console.log(res))
        .then(()=>this.$store.state.load = false)
      }, 1300);
    }
  },
  beforeMount(){
    this.$store.state.load = true; 
  },
  mounted(){
    setTimeout(() => {
      fetch(this.$store.state.pokeApi)
      .then((res)=>res.json())
      .then((res)=>this.pokeApi=res)
      .then((res)=>console.log(res))
      .then(()=>this.$store.state.load = false); 
    }, 600);
  }
}
</script>

<style scoped>


</style>

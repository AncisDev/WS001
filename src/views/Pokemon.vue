<template>
  <div class="pokemon">
    <div class="bg-dark text-light border-bottom border-warning fw-bolder">
      
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
        <button @click="lista = regiones, showImg = false, activarAnimacion()"
        class="btn btn-sm btn-warning rounded-pill p-1 m-1" 
        >REGIONES</button>
        
        <button @click="getLista(pokeApi.pokemon), showImg = false, activarAnimacion()"
        class="btn btn-sm btn-warning rounded-pill p-1 m-1" 
        >POKEMON</button>
      </div>
    </div>
    
    <div  v-if="lista" class="row m-0 p-0 position-fixed w-100 h-100 pb-5">
      <!-- lista lateral -->
      <div id="lista" v-if="showOnMobile" 
      class="col-4 col-md-3 col-xl-2 bg-dark d-none d-md-block rounded-0 m-0 px-0 text-center"
      >
      <!-- botones de paginacion -->
        <div v-if="urlApi = this.$store.state.pokeApi+'pokedex'"
        class="w-100 py-2 px-3 fixed-bottom position-relative d-flex justify-content-between align-items-center"
        >
          <button v-on:click="getLista(prev)"
          class="btn btn-sm btn-outline-danger text-light border-0 rounded-circle"
          >
            {{'<<'}}
          </button>
          
          <button v-on:click="getLista(next)"
          class="btn btn-sm btn-outline-danger text-light border-0 rounded-circle"
          >
            {{'>>'}}
          </button>
        </div>

        <div style="max-height:72.8%;" 
        class="overflow-auto h-100 border-top border-bottom border-warning"
        >
          <div v-for="item in lista" v-on:click="getPokeInfo(item.url)"
          class="m-0 p-0 w-100 text-uppercase"
          >
            <p id="btnLista" class="btn btn-sm btn-outline-primary text-light d-block border-0 m-0 px-0">
              {{ item.name }}
            </p>
          </div>
          <br>
        </div>
      </div>

      <!-- boton flotante movil -->
      <div v-else style="z-index: 4000;"
      class="fixed-bottom mx-0 mb-5"
      >
        <div class="dropdown">
          <!-- boton de menu movil -->
          <button id="btnFlotante" type="button"
          data-bs-toggle="dropdown" aria-expanded="false"
          data-bs-auto-close="outside"
          style="box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, .5);"
          :class="{ 'rotate-transition': actAnim, 'giroConLuces-anim': actAnim }"
          class="dropdown-toggle btn btn-dark" >
            <div>
              <i class="fa fa-times fa-lg" aria-hidden="false" 
              @click="girarIcono"
              :style="{ transform: 'rotate(' + angulo + 'deg)' }"
              ></i>
            </div>
          </button>

          <!-- menu flotante movil -->
          <ul class="dropdown-menu overflow-y-auto py-0" style="max-height: 400px;font-size: .8rem;">
            <!-- botones de paginacion en menu flotante -->
            <div v-if="urlApi = this.$store.state.pokeApi+'pokedex'"
            class="w-100 px-3 fixed-bottom position-relative d-flex justify-content-between align-items-center"
            >
              <button v-on:click="getLista(prev)"
              class="btn btn-sm text-gb-warning border-0 rounded-circle"
              >
                {{'<<'}}
              </button>
              
              <button v-on:click="getLista(next)"
              class="btn btn-sm text-gb-warning border-0 rounded-circle"
              >
                {{'>>'}}
              </button>
            </div>

            <hr class="m-0 p-0">

            <li v-for="item in lista" v-on:click="getPokeInfo(item.url)"><a class="dropdown-item text-uppercase" href="#">{{ item.name }}</a></li>
          </ul>
        </div>
      </div>

      <!-- vista de tarjetas -->
      <div v-if="pokeInfo.pokemon_entries"
      style="max-height: 80%;" 
      class="col w-100 m-0 px-0 py-4 h-100 overflow-auto"
      >
        <div class="row m-0 mb-4 p-0 ">
          <PokeCards v-for="(pk,i) in pokeInfo.pokemon_entries" :key="i"
          class="col my-4" 
          :cardTitle="pk.pokemon_species.name"
          :cardBody="''"
          :badgeMsg="'N°'+pk.entry_number" 
          :cardImg="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+(getRegion(pokeInfo,i))+'.png'"
          :btnShow="true"
          :button-method="getPokeInfo"
          ></PokeCards>
        </div>
      </div>
      <div v-else-if="pokeInfo.moves"
      class="col m-0 p-0 pb-5 h-100 bg-light overflow-y-auto"
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
          <div class="col-12 col-md d-flex justify-content-center justify-content-md-start align-items-center m-0 p-0">
            <h3 class="mx-2">Tipos</h3>
            <div v-for="tipo in pokeInfo.types" >
              <span id="spnTipo" :style="{backgroundColor: getBgColor(tipo)}" 
              class="text-light rounded-pill mx-2 p-2">{{ tipo.type.name }}</span>
            </div> 
          </div>
        </div>

        <div class="row border-top border-dark m-0 px-5 py-3">
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
            <div class="row my-2 p-0 d-flex justify-content-evenly align-items-center">
              <h5 class="">Exp. Base</h5>
              <hr >
              <span class="text-bg-primary text-end rounded-pill mx-auto py-2 px-4">{{ pokeInfo.base_experience }}XP</span>
            </div>
          </div>
        </div>

        <hr class="border-light my-5">
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
    angulo: 45,
    actAnim: false, 
    isActive: true,
    showImg:true,
    show:false,
    prev:'',
    next:'',
    lista:'',
    base_url:'',
    pokeApi:[],
    pokeDex:[],
    pokeMons:[],
    pokeInfo:[],
    regiones:[
      {name: 'nacional',id: '0',url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279',desde: 1,hasta: 1279},
      {name: 'kanto',id: '1',url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151',desde: 1,hasta: 151},
      {name: 'johto',id: '2',url: 'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100',desde: 152,hasta: 251},
      {name: 'hoenn',id: '3',url: 'https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135',desde: 252,hasta: 386},
      {name: 'sinnoh',id: '4',url: 'https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107',desde: 387,hasta: 493},
      {name: 'teselia',id: '5',url: 'https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156',desde: 494,hasta: 649},
      {name: 'kalos',id: '6',url: 'https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72',desde: 650,hasta: 721},
      {name: 'alola',id: '7',url: 'https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88',desde: 722,hasta: 809},
      {name: 'galar',id: '8',url: 'https://pokeapi.co/api/v2/pokemon/?offset=809&limit=89',desde: 810,hasta: 898}
    ],
    colorPorTipo:[
      {nombre: 'normal', color: '#A8A878'},
      {nombre: 'fire', color: '#F08030'},
      {nombre: 'water', color: '#6890F0'},
      {nombre: 'electric', color: '#F8D030'},
      {nombre: 'grass', color: '#78C850'},
      {nombre: 'ice', color: '#98D8D8'},
      {nombre: 'fighting', color: '#C03028'},
      {nombre: 'poison', color: '#A040A0'},
      {nombre: 'ground', color: '#E0C068'},
      {nombre: 'flying', color: '#A890F0'},
      {nombre: 'psychic', color: '#F85888'},
      {nombre: 'bug', color: '#A8B820'},
      {nombre: 'rock', color: '#B8A038'},
      {nombre: 'ghost', color: '#705898'},
      {nombre: 'dragon', color: '#7038F8'},
      {nombre: 'dark', color: '#705848'},
      {nombre: 'steel', color: '#B8B8D0'},
      {nombre: 'fairy', color: '#EE99AC'}
    ]
  }),
  methods:
  {      
    getPokemons(api){
      if (api !== null) {
        try {
          this.$store.state.load = true;
          // console.log('----getPokemons()----')
          fetch(api)
            .then((res)=>res.json())
            .then((res)=>this.pokeMons=res)
            .then(()=>{
              this.lista=this.pokeMons.results;
            })
            .then(()=>this.show = true)
            .then(()=>setTimeout(() => {
            this.$store.state.load = false
          }, 1000));
        } catch (error) {
          console.log(error)
        }
      }
    },

    getPokeInfo(api){
      if (api !== null) {
        try {
          this.$store.state.load = true;
          // console.log('----getPokeInfo()----') 
          fetch(api)
            .then((res)=>res.json())
            .then((res)=>this.pokeInfo=res)     
            .then(()=>setTimeout(() => {
            this.$store.state.load = false
          }, 1000))
        } catch (error) {
          console.log(error)
        }
      }
    },

    getLista(api){
      // console.log('--------------------');
      // console.log('base url: '+api);
      // console.log('url next: '+this.next);
      // console.log('url prev: '+this.prev);
      if (api) {
        try {
          if (api !== undefined || api !== null) {
            fetch(api)
            .then((res)=>this.base_url=res.json())
            .then((res)=>{
              // console.log(res);
              this.lista=res.results;
              // console.log(this.lista);
              this.next=res.next;
              // console.log('url next: '+this.next);
              this.prev=res.previous;
              // console.log('url prev: '+this.prev);
              })
          }
        } catch (error) {
          console.log('---ERROR---')
          console.log(error)
        }
      }
      
    },

    getBgColor(tipo) {
      const color = this.colorPorTipo.find(c => c.nombre === tipo.type.name);
      return color ? color.color : '';
    },

    getRegion(reg,i) {
      const region = this.regiones.find(r => r.nombre === reg.name);
      // console.log(reg)
      // console.log(region)
      return (reg ? (region.desde+i) : '');
    },

    girarIcono() {
      this.angulo += 45;
    },

    activarAnimacion() {
      this.actAnim = !this.actAnim;
    },
  },
  computed: {
    showOnMobile() {
      // muestra el elemento cuando el ancho es de 768px o menos
      if (window.innerWidth >= 768) {
        return true  
      }else{
        return false
      }       
    }
  },
  beforeMount(){
    this.$store.state.load = true; 
  },
  mounted(){
    fetch(this.$store.state.pokeApi)
      .then((res)=>res.json())
      .then((res)=>this.pokeApi=res)
      // .then((res)=>console.log(res))
      .then(()=>setTimeout(() => {
        this.$store.state.load = false
      }, 1000))
  }
}
</script>

<style scoped>
.dropdown-toggle::after {
  display: none;
}
#btnFlotante{
  border: 3px solid rgba(0,0,0,0);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 4px;
  transition: all ease-in-out;
}
.fa-times{
  color: yellow;
  transition: transform 500ms ease;
  transform:rotate(45deg);
}

.giroConLuces-anim {
  animation: giroConLuces ease-in-out;
  animation-duration: 1s;
  animation-direction: normal;
  animation-iteration-count: 1;
}

/* keyframes */
@keyframes giroConLuces {
    0%{
      border-top-color: rgb(209, 80, 209);
      transform: rotate(0deg);        
    }

    25%{
      border-top-color: rgb(248, 41, 41);
    }

    50%{
      border-top-color: rgb(40, 170, 40);
    }

    75%{
      border-top-color: rgb(127, 204, 240);
    }

    100%{
      border-top-color: rgb(209, 80, 209);
      transform: rotate(360deg);
    }
}
</style>

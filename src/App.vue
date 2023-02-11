<template>
  <Loading v-if="$store.state.load" :titulo="tituloWeb"></Loading>
  <div>
    <Header></Header>
    <router-view :titulo="tituloWeb"/>
    <footer class="sticky-bottom text-bg-dark position-fixed w-100 py-1 m-0 border-top border-success">
      © 2023
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
// import { onMounted } from 'vue';
// import { auth } from "./utils/firebase.js";


import Loading from '@/components/Loading.vue'

    


export default {
  name: 'App',
  setup(){
    // onMounted(()=>{
    //   auth.onAuthStateChanged((user)=>{
    //     if(user) {
    //       console.log("usuario logueado")
    //     }else{
    //       console.log("usuario no logueado")
    //     }
    //   })
    // })
  },
  components: {
    Header,
    Loading
  },
  data:()=>({
    tituloWeb: process.env.VUE_APP_TITTLE,
    loading: true,
  }),
  methods:{
    loadOff(){
      this.$store.state.load = false;
    }
  },
  async mounted(){
    await this.loadOff();
  }
}
</script>

<style>
*::-webkit-scrollbar{
  width: 7px; 
  background-color: rgba(21, 20, 20, 0.895);
}

*::-webkit-scrollbar-thumb{
  background-color: rgba(245, 195, 14, 0.863);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

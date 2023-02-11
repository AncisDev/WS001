<template>
  <Header></Header>
  <router-view :titulo="tituloWeb"/>
  <footer class="sticky-bottom text-bg-dark position-fixed w-100 py-1 m-0 border-top border-success">
    © 2023
  </footer>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
// import { onMounted } from 'vue';
// import { auth } from "./utils/firebase.js";

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
    Header
  },
  data:()=>({
    tituloWeb: process.env.VUE_APP_TITTLE,
  }),
  methods:{
    
  },
  mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <Header></Header>
  <router-view />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { onMounted } from 'vue';
// import { auth } from "./utils/firebase.js";

export default {
  name: 'App',
  setup(){
    onMounted(()=>{
      // auth.onAuthStateChanged((user)=>{
      //   if(user) {
      //     console.log("usuario logueado")
      //   }else{
      //     console.log("usuario no logueado")
      //   }
      // })
    })
  },
  components: {
    Header
  },
  data:()=>({
    
  }),
  methods:{
    
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

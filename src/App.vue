<template>
  <Loading v-if="$store.state.load" 
  :titulo="tituloWeb"
  ></Loading>
  <div>
    <Header></Header>
    <router-view :titulo="tituloWeb"/>
    <footer class="position-fixed bottom-0 text-bg-dark text-center w-100 py-1 m-0">
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
    // loadOff(){
    //   this.$store.state.load = false;
    // }
  },
  async mounted(){
    // await setTimeout(() => {
    //   this.$store.state.load = false;
    // }, 300);
  }
}
</script>

<style>
*::-webkit-scrollbar{
  width: .3em; 
  background-color: rgba(0, 0, 0, .5);
}
*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
*::-webkit-scrollbar-thumb{
  background-color: rgba(230, 188, 36, 0.863);
}
*{
  font-family: 'Orbitron', sans-serif;
  transition:  all ease-in-out 200ms;
}
#bank-card1{
  color: white;
  background: linear-gradient(90deg, rgba(177,58,255,1) 0%, rgba(71,18,124,1) 70%, rgba(105,15,215,1) 100%);
}
#bank-card2{
  color: white;
  background: linear-gradient(90deg, rgba(255,58,58,1) 0%, rgba(124,18,18,1) 47%, rgba(215,15,15,1) 100%);
}
#bank-card3{
  color: white;
  background: linear-gradient(90deg, rgba(58,255,108,1) 0%, rgba(18,124,52,1) 47%, rgba(15,215,77,1) 100%);
}
#bank-card4{
  color: white;
  background: linear-gradient(90deg, rgb(58, 225, 255) 0%, rgb(18, 82, 124) 70%, rgb(15, 102, 215) 100%);
}
#bank-card5{
  color: white;
  background: linear-gradient(90deg, rgb(208, 228, 94) 0%, rgb(87, 124, 18) 47%, rgb(202, 215, 15) 100%);
}
#bank-card6{
  color: white;
  background: linear-gradient(90deg, rgb(243, 158, 79) 0%, rgb(255, 98, 8) 47%, rgb(255, 185, 81) 100%);
}
#bank-card7{
  color: white;
  background: linear-gradient(90deg, rgb(228, 109, 218) 0%, rgba(71,18,124,1) 70%, rgb(215, 15, 215) 100%);
}
#bank-card8{
  color: white;
  background: linear-gradient(90deg, rgb(58, 255, 196) 0%, rgb(18, 124, 106) 47%, rgb(15, 215, 165) 100%);
}
#bank-card9{
  color: white;
  background: linear-gradient(90deg, rgb(255, 58, 245) 0%, rgb(124, 18, 101) 47%, rgb(208, 15, 215) 100%);
}
button#to{
  background-color: rgba(0, 0, 0, .5);
  color: #ffffff;
}
button#to:hover{
  background-color: rgba(0, 0, 0, 1);
  color: #ffffff;
}
</style>

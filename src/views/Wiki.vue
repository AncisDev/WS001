<template>
  <div class="wiki">
    <h1>This is an Wiki page</h1>
    <div class="container">
      <router-link
      class="btn btn-outline-success d-block" 
      :to="{name: 'Digimon', params:{id:'digimon', title: 'Digi Wiki'}}"
      >Digimon</router-link>

      <router-link
      class="btn btn-outline-success d-block" 
      :to="{name: 'Pokemon', params:{id:'pokemon', title: 'Poke Wiki'}}"
      >Pokemon</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Wiki',
  components: {
  },
  props:{
  },
  data:()=>({
    
  }),
  beforeMount(){
    this.$store.state.load = true; 
  },
  mounted(){
    setTimeout(() => {
      this.$store.state.load = false; 
    }, 600);
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

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

<style scoped>
</style>

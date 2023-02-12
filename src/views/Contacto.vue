<template>
  <div class="about">
    <h1>This is an Contacto page</h1>
  </div>
</template>

<script>

export default{
  name:'Contacto',
  components:{
  },
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

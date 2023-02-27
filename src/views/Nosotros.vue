<template>
  <div class="about">
    <h1>This is an Nosotros page</h1>
  </div>
</template>

<script>
export default{
  name:'Nosotros',
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

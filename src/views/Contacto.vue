<template>
  <div class="about d-flex justify-content-center align-items-center bg-dark-subtle">
      <FormContacto></FormContacto>    
  </div>
</template>

<script>
import FormContacto from '@/components/FormContacto.vue';


export default{
  name:'Contacto',
  components:{
    FormContacto
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

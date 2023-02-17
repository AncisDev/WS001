<template>
    <div v-for="(digi,i) in digimons" :key="i"
    class="digiCards" 
    >
        <div id="card"
        v-if="digi.level == digiNivel"
        class="card m-3 overflow-hidden rounded-circle text-center"
        style="width: 12rem; box-shadow: 3px 3px 2px 0 rgba(0, 0, 0, .6);"
        >
            <div class="card-img-top bg-light p-2">
                <img :src=digi.img 
                class="w-100 h-100" 
                style="transform: scale(.8);"
                :alt="digi.name"
                >
            </div>  

            <span id="badge" class="badge px-2 rounded-0 d-block fw-bold">{{ i+1 }}</span>

            <div id="cardBody" class="card-body">
                <h5 class="card-title fw-bolder fs-6">{{ digi.name }}</h5>
                <p class="card-text " style="font-size: 0.9rem;">Fase: {{ digi.level }}</p>
                <a id="info" :href="'https://digimon.fandom.com/es/wiki/'+digi.name" target="_blank" 
                style="font-size: .8rem;"
                class="btn btn-outline-warning border-0 rounded-0 border-secondary-subtle d-block"
                >Información</a>
            </div>
        </div> 
    </div>
</template>

<script>
export default{
    name: 'DigiCards',
    props:{ 
        digiNivel: String,
    },
    data:()=>({
            digimons:[],
    }),
    mounted(){
        fetch("https://digimon-api.vercel.app/api/digimon")
        .then((res)=>res.json())
        .then((res)=>this.digimons=res)
        .then(()=>setTimeout(() => {
            this.$store.state.load = false; 
        }, 2000))
    }
}
</script>

<style scoped>
#card:hover #badge{
    background-color: #000000;
    color: white;
    
}
#card:hover{
    background-color: rgba(255, 255, 255, 0.63);
    color: black;
    border: 3px double rgba(0, 0, 0,.7);
    
}
#card{
    background-color: rgba(0, 0, 0,.7);
}
#cardBody{
    transition: none;
}
#info,#badge{
    background-color: rgb(255, 193, 7);
    color:black;
}
#info:hover{
    background-color: black;
    color:rgb(255, 193, 7);}
</style>
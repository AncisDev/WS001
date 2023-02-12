<template>
    <div v-for="(digi,i) in digimons" :key="i"
    class="digiCards d-inline-flex justify-content-between" 
    >
        <div id="card"
        v-if="digi.level == digiNivel"
        class="card m-3 overflow-hidden rounded-circle"
        style="width: 12rem;"
        >
            <div class="card-img-top bg-light p-2">
                <img :src=digi.img class="w-100 h-100" alt="">
            </div>  

            <span id="badge" class="badge px-2 rounded-0 d-block fw-bold">{{ i+1 }}</span>

            <div id="" class="card-body">
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
        .then(()=>this.$store.state.load = false)
    }
}
</script>

<style scoped>
#card:hover #badge{
    background-color: #000000;
    color: white;
    
}
#card:hover{
    background-color: white;
    color: black;
    border: 3px double rgba(0, 0, 0,.7);
}
#card{
    background-color: rgba(0, 0, 0,.7);
}
#info,#badge{
    background-color: rgb(255, 193, 7);
    color:black;
}
#info:hover{
    background-color: black;
    color:rgb(255, 193, 7);}
</style>
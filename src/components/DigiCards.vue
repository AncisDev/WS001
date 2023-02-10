<template>
    <div v-for="(digi,i) in digimons" :key="i"
    class="digiCards d-inline-flex justify-content-between" 
    >
        <div 
        v-if="digi.level == digiNivel"
        class="card text-bg-dark m-3"
        style="width: 12rem;"
        >
            <img :src=digi.img class="card-img-top" alt="">
            <div class="card-body">
                <span class="badge rounded-pill text-bg-warning fw-bold">{{ i+1 }}</span>
                <h5 class="card-title fw-bolder fs-6">{{ digi.name }}</h5>
                <p class="card-text " style="font-size: 0.9rem;">Fase: {{ digi.level }}</p>
                <a :href="'https://digimon.fandom.com/es/wiki/'+digi.name" target="_blank" 
                class="btn btn-outline-danger border-0 border-bottom border-end rounded-0 border-secondary-subtle text-light d-block"
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

        console.log(this.digiNivel)
    }
}
</script>
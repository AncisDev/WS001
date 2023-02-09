<template>
    <div class="digiCards d-inline-flex justify-content-evenly mb-5" 
    v-for="(digi,i) in digimons" :key="i"
    >
        <div 
        v-if="digi.level == digiNivel"
        class="card bg-info-subtle m-2"
        style="width: 12rem;"
        >
            <img :src=digi.img class="card-img-top" alt="">
            <div class="card-body">
                <span class="badge rounded-pill text-bg-warning fw-bold">{{ i+1 }}</span>
                <h5 class="card-title fw-bolder">{{ digi.name }}</h5>
                <p class="card-text ">Etapa: {{ digi.level }}</p>
                <a :href="''+digi.name" target="_blank" class="btn btn-outline-dark d-block">Wiki</a>
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
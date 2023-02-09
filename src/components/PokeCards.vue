<template>
    <div class="pokeCards d-inline-flex justify-content-evenly mb-5">
        <div 
        v-if="poke.level == digiNivel"
        class="card bg-info-subtle m-2"
        style="width: 13rem;"
        >
            <img :src=poke.img class="card-img-top" alt="">
            <div class="card-body">
                <span class="badge rounded-pill text-bg-warning fw-bold">{{ i+1 }}</span>
                <h5 class="card-title fw-bolder">{{ digi.name }}</h5>
                <p class="card-text ">Etapa: {{ digi.level }}</p>
                <a :href="''+poke.name" target="_blank" class="btn btn-outline-dark d-block">Wiki</a>
            </div>
        </div> 
    </div>
</template>

<script>
export default{
    name: 'PokeCards',
    props:{ 
    },
    data:()=>({
            pokemons:[],
    }),
    mounted(){
        fetch("")
        .then((res)=>res.json())
        .then((res)=>this.pokemons=res)

        console.log('')
    }
}
</script>
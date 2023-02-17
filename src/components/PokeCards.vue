<template>
    <div class="pokeCards">
        <div id="pCard"
        class="card bg-danger border border-dark text-light mx-auto px-3 py-5"
        style="width: 400px;max-width: 75%;box-shadow: 4px 4px 0 0 rgba(0, 0, 0, .3);"
        >
            <div class="card-header mx-auto rounded-circle border border-dark bg-light"
            style="width: 250px;height: 250px;"
            >
                <img :src=cardImg alt=""
                class="card-img-top" 
                style="transform: scale(1.3);height: 100%;max-height: 300px;"
                > 
            </div>
            <hr class="border-danger">
            <div class="card-body text-center bg-danger">
                <span class="position-absolute top-0 start-100 translate-middle badge z-index rounded-pill border border-light text-bg-warning py-4 fs-6">{{ badgeMsg }}</span>
                <h5 class="card-title fw-bolder text-uppercase">{{ cardTitle }}</h5>
                <p class="card-text ">{{ cardBody }}</p>
                <div v-if="btnShow" v-on:click="emitValue(urlApi)" class="btn btn-primary d-block">info...</div>
            </div>
        </div> 
    </div>
</template>

<script>
export default{
    name: 'PokeCards',
    props:{ 
        cardTitle: String,
        cardBody: String,
        cardImg: String,
        pokeInfo: String,
        badgeMsg: String,
        btnShow: Boolean,
        urlApi: String,
    },
    data:()=>({
        infoPokemon: null,
    }),
    methods:{
        async getPokeInfo(api){
            const response = await fetch(api);
            const results = await response.json();
            // console.log(results)
            return results;
        },
        async emitValue(api) {
            const results = await this.getPokeInfo(api);
            this.$emit('obj', results);
        },

    },
    mounted(){
    
    }
}
</script>

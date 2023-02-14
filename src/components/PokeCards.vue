<template>
    <div class="pokeCards">
        <div id="pCard"
        class="card bg-danger border border-dark text-light mx-auto p-3"
        style="width: 12rem;width:300px;max-width: 75%;"
        >
            <div style="border-radius:100%;max-width: 100%;max-height: 100%;"
            class="mx-auto border border-dark bg-light"
            >
               <img :src=cardImg alt=""
                class="card-img-top w-100 h-100" 
                style="transform: scale(1.1);"
                > 
            </div>
            
            <div class="card-body text-center">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill border border-light text-bg-warning py-3">{{ badgeMsg }}</span>
                <h5 class="card-title fw-bolder text-uppercase">{{ cardTitle }}</h5>
                <p class="card-text ">{{ cardBody }}</p>
                <router-link v-if="btnShow" :to="''" class="btn btn-primary d-block">info...</router-link>
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
    },
    data:()=>({
        
    }),
    mounted(){
    
    }
}
</script>

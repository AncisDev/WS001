<template>
    <div class="pokeCards">
        <div 
        class="card bg-dark text-light mx-auto my-4 py-2"
        style="width: 12rem;width:300px;max-width: 75%;"
        >
            <div style="border-radius:100%;width:200px;height:200px;"
            class="mx-auto border bg-light"
            >
               <img :src=cardImg alt=""
                class="card-img-top w-100 h-100" 
                style=""
                > 
            </div>
            
            <div class="card-body">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger py-3 fs-6">{{ badgeMsg }}</span>
                <h5 class="card-title fw-bolder text-uppercase">{{ cardTitle }}</h5>
                <p class="card-text ">{{ cardBody }}</p>
                <router-link :to="''" class="btn btn-outline-danger d-block">Wiki</router-link>
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
    },
    data:()=>({
        
    }),
    mounted(){
    
    }
}
</script>
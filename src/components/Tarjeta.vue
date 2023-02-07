<template>
    <div class="inicio">
        <div 
        class="card bg-success "
        style="width: 15rem;"
        >
            <img :src=ruta_img class="card-img-top" alt="">
            <div class="card-body text-light">
                <h5 class="card-title">{{ titulo }}</h5>
                <p class="card-text">Etapa: {{ cuerpo }}</p>
                <a :to="{}" class="btn d-block btn-dark">Mas info...</a>
            </div>
        </div> 
    </div>
    
</template>

<script>
export default{
    name: 'Tarjeta',
    props:{
        titulo: "",
        cuerpo: "",
        ruta_img: ""
    }
}
</script>
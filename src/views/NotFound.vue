<template>
    <div class="notFound">
        <div class="row p-0 m-3">
            <div class="col-12 mt-3" style="font-size: .7rem;">
                <h2>Lo sentimos, no encontramos el sitio que buscas.</h2>
                <p>No logramos acceder al sitio que buscas, por favor vuelve a la página principal y navega en nuestro menú.</p>
            </div>
            <div class="col-12">
                <img src="../assets/img/mySites/404/notFound_1.svg" 
                style="max-width: 80%;"
                class="mx-auto d-block"
                alt="">

                <router-link @click="this.$store.state.load = true"
                class="btn btn-dark d-block py-2 mx-auto my-3 w-75" 
                :to="{name: 'Inicio'}"
                >Volver</router-link>
            </div>
        </div>
    </div>
</template>
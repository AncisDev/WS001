<template>
    <div id="spinnerContain" class="container-fluid">
        <div class="position-absolute top-50 start-50 translate-middle">
            <h1 class="text-light mb-2 mx-auto">{{ titulo }}</h1>
            <div id="spinner" class="mx-auto">
                <div id="dotContain" class="rounded-circle bg-secondary-subtle">
                    <div id="dot" class="bg-success rounded-circle position-absolute start-0 top-0"></div>
                    <div id="dot" class="bg-primary rounded-circle position-absolute end-0 top-0"></div>
                    <div id="dot" class="bg-dark rounded-circle position-absolute position-absolute top-50 start-50 translate-middle"></div>
                    <div id="dot" class="bg-danger rounded-circle position-absolute end-0 bottom-0"></div>
                    <div id="dot" class="bg-warning rounded-circle position-absolute start-0 bottom-0"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name:'Loading',
    props:{
        titulo: String,
    },
}

</script>

<style scoped>
#spinnerContain{
    z-index: 10000;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.9);
    transition: all ease-in-out;
}

#spinner{
    border: 10px solid rgba(0,0,0,0);
    width: 200px;
    height: 200px;
    padding: 25px;

    animation: luces 1.5s ease-in-out infinite;
}

#dotContain{
    width: 100%;
    height: 100%;
    
    animation: spin 600ms ease-in-out infinite;
}

#dot{
    width: 30px;
    height: 30px;
}

@keyframes luces {
    0%{
        border-top-color: purple;
        
    }

    20%{
        border-top-color: yellow;
    }

    40%{
        border-top-color: blue;
    }

    60%{
        border-top-color: green;
    }

    80%{
        border-top-color: red;
    }

    100%{
        border-top-color: red;
    }
}

@keyframes spin {
    0%{
        transform: rotate(0deg);
        border-left-color: red;
    }

    50%{
        /* transform: rotate(220deg); */
    }

    100%{
        transform: rotate(360deg);
    }
}

@keyframes spin-reverse {
    0%{
        transform: rotate(0deg);
        border-left-color: red;
    }

    50%{
        /* transform: rotate(220deg); */
    }

    100%{
        transform: rotate(-360deg);
    }
}
</style>
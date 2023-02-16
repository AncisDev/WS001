import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Productos.vue')
  },
  {
    path: '/wiki',
    name: 'Wiki',
    component: () => import(/* webpackChunkName: "about" */ '../views/Wiki.vue')
  },
  {
    path: '/:id/digimon',
    name: 'Digimon',
    component: () => import(/* webpackChunkName: "about" */ '../views/Digimon.vue')
  },
  {
    path: '/:id/pokemon',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pokemon.vue')
  },
  {
    // vista por crear e implementar
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  // this.store.state.load = true;
  let documentTitle = `${ process.env.VUE_APP_TITTLE } | ${ to.name }`
  if(to.params.title){
    console.log(to)
    console.log(to.params)
    documentTitle += ` | ${ to.params.titulo }`
  } 
  document.title = documentTitle
  next()
})

export default router 

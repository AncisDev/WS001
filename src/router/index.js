import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  },
  {
    path: '/wiki',
    name: 'Wiki',
    component: () => import(/* webpackChunkName: "about" */ '../views/Productos.vue')
  },
  {
    path: '/digimon',
    name: 'Digimon',
    component: () => import(/* webpackChunkName: "about" */ '../views/Digimon.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  let documentTitle = `${ process.env.VUE_APP_TITTLE } | ${to.name}`
  if(to.name){
    documentTitle += ` | ${to.name}`
  } 
  document.title = documentTitle
  next()
})

export default router

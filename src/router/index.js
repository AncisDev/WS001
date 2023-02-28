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
    path: '/anime',
    name: 'Wiki',
    component: () => import(/* webpackChunkName: "about" */ '../views/Wiki.vue')
  },
  {
    path: '/wiki/digimon',
    name: 'Digimon',
    component: () => import(/* webpackChunkName: "about" */ '../views/Digimon.vue')
  },
  {
    path: '/wiki/pokemon',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pokemon.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/reset-password',
    name: 'Contraseña',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResetPass.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue')
  },
  {
    path: '/foro',
    name: 'Foro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Foro.vue')
  },
  {
    path: '/panel',
    name: 'Panel',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserPanel.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
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

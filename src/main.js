import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import firebase from './utils/firebase';


createApp(App)
    .use(store)
    .use(router)
    // .use(firebase)
    .mount('#app')

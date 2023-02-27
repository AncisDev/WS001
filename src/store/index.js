import { createStore } from 'vuex'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

export default createStore({
  state: {
    load:true,
    digiApi:"https://digimon-api.vercel.app/api/digimon/",
    pokeApi:"https://pokeapi.co/api/v2/",
    msgError:'',
    user:null,
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        commit("setUser", user);
      } catch (error) {
        this.state.msgError = "No se pudo iniciar sesion";
        console.log("No se pudo iniciar sesion: "+error);
      }
    },
  },
  modules: {
  }
})

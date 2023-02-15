import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

// Configura la conexión a tu proyecto de Firebase
firebase.initializeApp({
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_DOMINIO_DE_AUTENTICACION',
  databaseURL: 'TU_URL_DE_BASE_DE_DATOS',
  projectId: 'TU_ID_DE_PROYECTO',
  storageBucket: 'TU_BUCKET_DE_ALMACENAMIENTO',
  messagingSenderId: 'TU_SENDER_ID'
})

// Ahora puedes utilizar los servicios de Firebase
const db = firebase.database()
const auth = firebase.auth()

// Export
export{auth};
export{db};
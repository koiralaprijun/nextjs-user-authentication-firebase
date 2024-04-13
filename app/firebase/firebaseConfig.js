import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAFgw49022fJHjV8M_QMSsq9wYbow0PP7E",
  authDomain: "dh2642-45.firebaseapp.com",
  databaseURL: "https://dh2642-45-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dh2642-45",
  storageBucket: "dh2642-45.appspot.com",
  messagingSenderId: "352319936590",
  appId: "1:352319936590:web:174c4b6c57e0084bf34b1f",
  measurementId: "G-WJ47ZHVZ27"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth, app }

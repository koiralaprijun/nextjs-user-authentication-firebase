import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB1FHDUjG4dLht7tDfz7Hq35aUcJNakrdo",
  authDomain: "wiki-explorer-66896.firebaseapp.com",
  projectId: "wiki-explorer-66896",
  storageBucket: "wiki-explorer-66896.appspot.com",
  messagingSenderId: "745725114759",
  appId: "1:745725114759:web:1e8da315cf10c6e98e7b22",
  measurementId: "G-LHBRQK7T27"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth, app }

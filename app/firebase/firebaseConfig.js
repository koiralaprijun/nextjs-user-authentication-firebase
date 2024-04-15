import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB1FHDUjG4dLht7tDfz7Hq35aUcJNakrdo",
  authDomain: "wiki-explorer-66896.firebaseapp.com",
  projectId: "wiki-explorer-66896",
  storageBucket: "wiki-explorer-66896.appspot.com",
  messagingSenderId: "745725114759",
  appId: "1:745725114759:web:1e8da315cf10c6e98e7b22",
  measurementId: "G-LHBRQK7T27"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const register = (email, firstName, lastName, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(response => updateProfile(response.user, { displayName: firstName })).then(() => {
    signOut(auth) 
  })
}

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
  return auth.signOut()
}

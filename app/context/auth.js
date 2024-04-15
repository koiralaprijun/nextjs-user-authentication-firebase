import { onAuthStateChanged } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebaseConfig.js"

export const AuthContext = createContext({
  currentUser: null
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser({
          email: user.email,
          firstName: user.displayName
        })
      } else {
        setCurrentUser(null)
      }
    })
  }, [])
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

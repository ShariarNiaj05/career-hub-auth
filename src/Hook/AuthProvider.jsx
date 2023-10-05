import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";


export const AuthContext = createContext(null)


const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)



  const googleSignIn = () => {
    setLoading(true)
  return signInWithPopup(auth, googleProvider)
  }
  
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const singIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser)
      setLoading(false)
    })
    return (() => {
      unSubscribe()
    })
},[])


  const authInfo = {
    googleSignIn,
    signUp,
    singIn,
    logout,
    user,
    loading
}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
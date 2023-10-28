import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContextProvider = createContext(null);

const auth = getAuth(app);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);

  const handleManualRegister = (email, pass) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const handleManualLogin = (email, pass) => {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const handleManualLogout = () => {
    setLoding(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoding(false)
    })

    return ()=> unSubscribe()
  }, []);

 

  const authInfo = {
    user,
    loading,
    handleManualRegister,
    handleManualLogin,
    handleManualLogout
  };
  return (
    <div>
      <AuthContextProvider.Provider value={authInfo}>
        {children}
      </AuthContextProvider.Provider>
    </div>
  );
};

export default AuthContext;

import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Config/Firebase';
export const AuthContext = createContext();
const auth = getAuth(app);

const LoginContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        return signOut(auth);
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser);
              setLoading(false);
            }
          });

          return ()=> {
            return unsubscribe();
          }
    }, [])

    const authinfo = {
        googleLogin,
        user,
        setUser,
        loading,
        logout
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default LoginContext;
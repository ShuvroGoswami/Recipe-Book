import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password);
    };
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const updateUser = (updatedData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
    }
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        setLoading(true);
            return signOut(auth,)
    };
    const forgetPassword = (email)=>{
       return sendPasswordResetEmail(auth, email)
    }


    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false);
     }); 
     return ()=>{
unsubscribe();
     }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        login,
        logOut,
        loading,
        setLoading,
        updateUser,
        googleLogin,
        forgetPassword,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;
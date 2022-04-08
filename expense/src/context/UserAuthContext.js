import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from "firebase/auth";
 import {auth} from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {

    const [user, setUser] = useState("");
    function signUp(email, password, mbudget){
        return createUserWithEmailAndPassword(auth, email, password, mbudget);
    }
    function logIn(email, password){
        console.log("Email", email)
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut(){
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        //cleanup function
        return () => {
            unsubscribe();
        }
    }, []);
    return <userAuthContext.Provider value={{user, signUp, logIn, logOut}}>{children}</userAuthContext.Provider>
    
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
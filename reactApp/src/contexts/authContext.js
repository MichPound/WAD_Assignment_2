// import React, { useContext, useState, useEffect } from 'react'
// import { auth } from '../firebase'

// const AuthContext = React.createContext()

// export function useAuth(){
//     return useContext(AuthContext)
// }

// export function AuthProvider({children }){

//     const [currentUser, setCurrentUser] = useState()
//     const [loading, setLoading] = useState(true)

//     function register(email, password){
//         return auth.createUserWithEmailAndPassword(email, password)
//     }

//     function login(email, password){
//         return auth.signInWithEmailAndPassword(email, password)
//     }

//     function signout(){
//         return auth.signOut()
//     }

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             setCurrentUser(user)
//             setLoading(false)
//         })
        
//         return unsubscribe
//     }, [])

//     const value = {
//         currentUser,
//         register,
//         login,
//         signout
//     }

//     return(
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }

import React, { useState, createContext } from "react";
import { login, signup } from "../api/movie-api"

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
import React, { useState, useEffect, useContext} from 'react'
import { jwtDecode } from "jwt-decode";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider(props){
    const [authUser,setAuthUser] = useState(null)
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const logout = () =>{
        localStorage.removeItem("authUser")
    }

    const login = (token) =>{
        const decoded = jwtDecode(token);
        const authUser = {
            "username":decoded.username,
            "email":decoded.sub
        }
        localStorage.setItem("authUser",JSON.stringify(authUser))
    }

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        logout,
        login
    }

    useEffect(()=>{
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
            setAuthUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    },[])

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )

}


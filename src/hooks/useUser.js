import loginService from '../services/loginService'
import {useEffect, useState} from "react";


export const useUser = () => {
    const [user, setUser] = useState(null)
    
    const login = async ({email, password}) => {
        const userLogin = await loginService.makeLogin({
            email, password
        })
        
        window.localStorage.setItem(
            'logedAdmin', JSON.stringify(userLogin)
        )
        
        await setUser(userLogin)
        
        return userLogin;
    }

    function useLogged({history}){
        useEffect(()=>{
            if(!loginService.isAdminLoged()){
                history.push("/Home");
            }
        },[]);
    }
    
    
    const logout = () => {
        setUser(null)
        window.localStorage.removeItem('logedAdmin')
    }
    
    return{
        user,
        login,
        logout,
        useLogged
    }
}


import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({})

function AuthContextProvider ( { children }) {
    const [isAuth, setIsAuth] = useState({isAuth:false, user:''})
    const navigate = useNavigate();

    function login(){
        setIsAuth(true);
        console.log('Gebruiker is ingelogd');
        navigate('/products')
    }
    function logout(){
        setIsAuth(false);
        console.log('Gebruiker is uitgelogd');
        navigate('/');
    }
    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;
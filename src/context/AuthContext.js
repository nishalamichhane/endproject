import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
export const AuthContext = createContext({})
function AuthContextProvider ( { children }) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    })
    const navigate = useNavigate();
//Mounting effect
    useEffect(() => {
        // retrieve the JWT from Local Storage
        const token = localStorage.getItem('token');
        // if there is a token, get the user data again
        if (token) {
            fetchUserData(token);
        } else {
            // if there is NO token we do nothing, and set the status to 'done'
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);
    function login(JWT){
        localStorage.setItem('token', JWT);
        fetchUserData( JWT, '/profile');
    }
    function logout(){
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        console.log('Gebruiker is uitgelogd!');
    }
    // we use this function in login and mounting effect, it is declared here!
    async function fetchUserData(token, redirectUrl) {
        try {
            // retrieve user data with the user's token and id
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            // put the data in the state
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });
            // if a redirect URL has been provided (we do not do this with the mount effect) we will link to it
            if (redirectUrl) {
                navigate(redirectUrl);
            }
        } catch (e) {
            console.error(e);
            // if something goes wrong? Then We do not put any data in the state
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }
    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };
    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;
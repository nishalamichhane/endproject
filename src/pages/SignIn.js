import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from 'axios';
import "../App.css";
function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);
    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: username,
                password: password,
            });
            // log the result in the console
            console.log(result.data);
            // pass the JWT token to the login function of the context
            login(result.data.accessToken);
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }
    return (
        <>
            <h1>Inloggen</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field">
                    Gebruikersnaam:</label><br/>
                    <input
                        type="text"
                        id="email-field"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /> <br/>
                <label htmlFor="password-field">
                    Wachtwoord: </label><br />
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br/>
                <button
                    type="submit"
                    className="registerbtn"
                >
                    Inloggen
                </button>
            </form>
            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}
export default SignIn;
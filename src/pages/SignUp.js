import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";
import axios from "axios";
function SignUp() {
    //state for the form
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // state for functionality
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        // console.log({
        //     email: email,
        //     gebruikersnaam: username,
        //     wachtwoord: password,
        // });
        try {
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                email: email,
                password: password,
                username: username,
            });

            // Let op: because we don't use axios Canceltoken you will get a memory-leak message here..
            // To see how to implement a cancel token, check out the bonus branch!

            // if everything went well, we link dyoor to the login page

            navigate('/signin')
        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);

        // console.log({
        //     email: email,
        //     gebruikersnaam: username,
        //     wachtwoord: password,
        // });
    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Dit is registreren pagina. </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field">
                    Emailadres:</label><br/>
                    <input
                        type="text"
                        id="email-field"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br/>



                <label htmlFor="username-field">
                    Gebruikersnaam:</label><br/>
                    <input
                        type="text"
                        id="username-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /><br/>


                <label htmlFor="password-field">
                    Wachtwoord:</label><br/>
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
                    Registeren
                </button>

            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}
export default SignUp;
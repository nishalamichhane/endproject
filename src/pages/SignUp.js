import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";
import axios from "axios";
import {useForm} from "react-hook-form";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Button from "../components/button/Button";
function SignUp() {
    //state for the form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // state for functionality
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    async function onFormSubmit(data) {
        toggleError(false);
        toggleLoading(true);
        try {
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                email: data.email,
                password: data.password,
                username: data.username,
            });
            navigate('/signin')
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
        }
    return (
        <>
            <h1>Registreren</h1>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="email-field">
                    Emailadres:</label><br/>
                    <input
                        type="text"
                        id="email-field"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Emailadres is verplicht",
                            },
                            validate: (value) => value.includes('@') || 'Email moet een @ bevatten',
                        })}
                    /><br/>
                {errors.email && <ErrorMessage message = {errors.email.message} />}

                <label htmlFor="username-field">
                    Gebruikersnaam:</label><br/>
                    <input
                        type="text"
                        id="username-field"
                        // onChange={(e) => setUsername(e.target.value)}
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Gebruikersnaam is verplicht",
                            },
                            minLength: {
                                value: 6,
                                message: "Gebruikersnaam moet 6 tekens bevatten",
                            },
                        })}
                    /><br/>
                {errors.username && <ErrorMessage message = {errors.username.message} />}
                <label htmlFor="password-field">
                    Wachtwoord:</label><br/>
                    <input
                        type="password"
                        id="password-field"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Wachtwoord is verplicht",
                            },
                            minLength: {
                                value: 6,
                                message: "Wachtwoord moet 6 tekens bevatten en beter om speciaal karacter ook gebruiken tussen",
                            },
                        })}
                    /><br/>
                {errors.password && <ErrorMessage message = {errors.password.message} />}
                    <Button
                        className="registerbtn"
                        type="submit"
                    >
                        Registreren
                    </Button>
            </form>
            <p>Heb je al een account? Je kun je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}
export default SignUp;
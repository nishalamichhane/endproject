import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import Button from "../components/button/Button";
import axios from 'axios';
import "../App.css";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import {useForm} from "react-hook-form";
function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);
    async function onFormSubmit(data) {
        //e.preventDefault();
        toggleError(false);
        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: data.username,
                password: data.password,
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

            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="email-field">
                    Gebruikersnaam:</label><br/>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    id="email-field"*/}
                    {/*    name="username"*/}
                    {/*    value={username}*/}
                    {/*    onChange={(e) => setUsername(e.target.value)}*/}
                    {/*/> <br/>*/}
                <input
                    type="text"
                    id="username-field"
                    {...register("username", {
                        required: {
                            value: true,
                            message: "Gebruikersnaam is verplicht",
                        },
                    })}
                /><br/>
                {errors.username && <ErrorMessage message = {errors.username.message} />}
                <label htmlFor="password-field">
                    Wachtwoord: </label><br />
                    {/*<input*/}
                    {/*    type="password"*/}
                    {/*    id="password-field"*/}
                    {/*    name="password"*/}
                    {/*    value={password}*/}
                    {/*    onChange={(e) => setPassword(e.target.value)}*/}
                    {/*/><br/>*/}
                {/*<input*/}
                {/*    type="password"*/}
                {/*    id="password-field"*/}
                {/*    {...register("password", {*/}
                {/*        required: {*/}
                {/*            value: true,*/}
                {/*            message: "Wachtwoord is verplicht",*/}
                {/*        },*/}
                {/*    })}*/}
                {/*    // value={password}*/}
                {/*    // onChange={(e) => setPassword(e.target.value)}*/}
                {/*/>*/}
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
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                />
                 {errors.password && <ErrorMessage message = {errors.password.message} />}
                <br/>
                <Button
                    className="registerbtn"
                    children="Log In"
                    type="submit"
                />
            </form>
            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}
export default SignIn;
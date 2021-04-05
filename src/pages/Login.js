import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import API from '../utils/api';

const Login = () => {

    const [loginState, setLoginState] = useState({
        username: "",
        password: ""
    });

    const [userState, setUSerState] = useState({
        username: "",
        password: "",
        token: "",
        isLoggedIn: false
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setLoginState({
            ...loginState,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        API.login(loginState).then(res => {
            console.log(`Here's your user: ${JSON.stringify(res)}`)
        }).catch(err => {
            err ? console.error(`Error creating user: ${err.message}`) : console.log('Success!')
        });

        setLoginState({
            username: "",
            password: ""
        });
    }

    return (
        <div>
            <h1>Here's your dumb login page, dummy.</h1>
            <UserForm handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Login;
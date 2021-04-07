import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import UserForm from '../components/UserForm';
import API from '../utils/api';

const Login = () => {
    let history = useHistory();

    const [loginState, setLoginState] = useState({
        username: "",
        password: ""
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
            console.log(`Here's your user: ${JSON.stringify(res, null, 2)}`)
            // setUSerState({
            //     username: res.data.user.username,
            //     password: res.data.user.password,
            //     token: res.data.token,
            //     isLoggedIn: true
            // });
            setLoginState({
                username: "",
                password: ""
            });
            localStorage.setItem(`token`, res.data.token)
            history.push('/applications')
        }).catch(err => {
            // setUSerState({
            //     username: "",
            //     password: "",
            //     token: "",
            //     isLoggedIn: false
            // });
            localStorage.removeItem(`token`)
            console.error(`Error creating user: ${err.message}`)
        });
    }

    return (
        <div>
            <h1>Here's your dumb login page, dummy.</h1>
            <UserForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>
    )
}

export default Login;
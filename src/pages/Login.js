import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import UserForm from '../components/UserForm';
import API from '../utils/api';
import store from '../config/store';

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
            store.dispatch({
                type: 'USER_ACTION',
                payload: {
                    username: res.data.user.username,
                    password: res.data.user.password,
                    isLoggedIn: true
                }
            });
            setLoginState({
                username: "",
                password: ""
            });
            localStorage.setItem(`token`, res.data.token)
            history.push('/applications')
        }).catch(err => {
            store.dispatch({
                type: 'USER_ACTION',
                payload: {
                    username: "",
                    password: "",
                    isLoggedIn: false
                }
            });
            localStorage.removeItem(`token`)
            console.error(`Error creating user: ${err}`)
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
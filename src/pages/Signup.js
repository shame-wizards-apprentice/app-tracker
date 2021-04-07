import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import API from '../utils/api';

const Signup = () => {

    const [signupState, setSignupState] = useState({
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
        setSignupState({
            ...signupState,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        API.signup(signupState).then(res => {
            console.log(`Here's your user: ${JSON.stringify(res, null, 2)}`)
            localStorage.setItem(`token`, res.data.token)
            setUSerState({
                username: res.data.user.username,
                password: res.data.user.password,
                token: res.data.token,
                isLoggedIn: true
            });
            setSignupState({
                username: "",
                password: ""
            });
        }).catch(err => {
            setUSerState({
                username: "",
                password: "",
                token: "",
                isLoggedIn: false
            });
            localStorage.removeItem(`token`)

            console.error(`Error creating user: ${err.message}`)
        });
    }
    return (
        <div>
            <h1>Here's your dumb signup page, dummy.</h1>
            <UserForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>
    )
}

export default Signup;
// Dependencies
const axios = require('axios');

// API URL prefix for all endpoints
const URL_PREFIX = 'https://rns-app-tracker-api.herokuapp.com'

// API endpoints
const API = {
    wakeup: () => {
        return axios.get(`${URL_PREFIX}/`)
    },
    signup: userData => {
        return axios.post(`${URL_PREFIX}/users/new`, userData)
    },
    login: userData => {
        return axios.post(`${URL_PREFIX}/users`, userData)
    },
    authenticate: token => {
        return axios.get(`${URL_PREFIX}/users`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    createApp: (appData, token) => {
        return axios.post(`${URL_PREFIX}/applications`, appData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    getApp: token => {
        return axios.get(`${URL_PREFIX}/applications`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    updateApp: (id, appData, token) => {
        return axios.put(`${URL_PREFIX}/applications/${id}`, appData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    deleteApp: (id, token) => {
        return axios.delete(`${URL_PREFIX}/applications/${id}`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    }
}

export default API;
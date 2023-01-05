import axios from "axios";

export const API = axios.create({
    baseURL: 'https://dummyjson.com'
})

export const createSession = async(username, password) => {
    return API.post('/auth/login', {
        username: username,
        password: password
    })
}
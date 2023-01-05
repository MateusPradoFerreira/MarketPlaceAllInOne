import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API, createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if(recoveredUser && token) {
            setUser(JSON.parse(recoveredUser));
            API.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setIsLoading(false);
    }, [])

    const login = async (username, password) => {

        const response = await createSession(username, password);
        const loggedUser = response.data;
        const token = response.data.token

        localStorage.setItem('user', JSON.stringify(loggedUser));
        localStorage.setItem('token', token);

        API.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);
        navigate('/');
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        API.defaults.headers.Authorization = null;
        navigate('login');
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider >
    )
} 
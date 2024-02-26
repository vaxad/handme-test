import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext<any>({
    auth: false,
    setAuth: () => {},
    user: null,
    setUser: () => {},
    loading: false,
    setLoading: () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [auth, setAuth] = useState(false);
    return (
        <AuthContext.Provider value = {{auth, setAuth, user, setUser, loading, setLoading}}>
        {children}
        </AuthContext.Provider>
    )
}
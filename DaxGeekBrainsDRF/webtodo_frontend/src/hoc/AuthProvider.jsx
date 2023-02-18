import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // По факту эти функции не делают реальной авторизации
    // Если авторизация должна быть
    // То она и должна производиться в этих 2-х функциях
    // Залогиниться:
    const signin = (newUser, callback) => {
        setUser(newUser);
        callback();
    }
    // Разлогиниться
    const signout = (callback) => {
        setUser(null);
        callback();
    }

    const value = { user, signin, signout }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
import { createContext, useContext, useReducer } from "react";

/*Констаты */
export const LOGIN: string = "LOGIN_ADD";
export const LOGOUT: string = "LOGIN_REMOVE";

/* Интерфейс логирования */
interface IAuth {
    isAuth: boolean;
    login: string;
    password: string;
    token: string;
    logIn: (login: string, password: string, token: string) => void;
    logOut: () => void;
};

/* Создание контекста */
export const ContextAuth = createContext<IAuth>({
    isAuth: false,
    login: '',
    password: '',
    token: '',
    logIn: (login: string, password: string, token: string) => { },
    logOut: () => { }
});

/*Функция для использования контекста в других компонентах */
export const useContextAuth = () => {
    return useContext(ContextAuth);
};
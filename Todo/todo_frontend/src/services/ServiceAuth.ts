/*
СЛУЖБА АУТЕНТИФИКАЦИИ
Сервис использует Axios для HTTP-запросов и локальное хранилище для информации
о пользователе и JWT. Он предоставляет следующие важные методы:

login(): POST {имя пользователя, пароль} и сохранить JWTв локальном хранилище
logout(): удалить JWTиз локального хранилища
// register(): POST {имя пользователя, электронная почта, пароль}
getCurrentUser(): получить сохраненную информацию о пользователе (включая JWT)
*/

// import { createContext, useContext } from "react";
import axios from "axios";
import { IAuth } from '../Intarfaces/IAuth';
import ServicePath from './ServicePath';

const URL_TOKEN = "http://127.0.0.1:8000/api-token-auth/";

// /* Интерфейс логирования */
// interface IAuth {
//     isAuth: boolean;
//     login: string;
//     password: string;
//     token: string;
//     logIn: (login: string, password: string, token: string) => void;
//     logOut: () => void;
// };

// /* Создание контекста */
// export const ContextAuth = createContext<IAuth>({
//     isAuth: false,
//     login: '',
//     password: '',
//     token: '',
//     logIn: (login: string, password: string, token: string) => { },
//     logOut: () => { }
// });

class ServiceAuth {
    login(username: string, password: string) {
        return axios
            .post(URL_TOKEN, {
                username,
                password
            })
            .then(response => {
                // if (response.data.accessToken) {
                if (response.data.token) {
                    // localStorage.setItem("todoappauth", JSON.stringify(response.data.token));
                    localStorage.setItem("todoapp_login", JSON.stringify(username));
                    localStorage.setItem("todoapp_token", JSON.stringify(response.data.token));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("todoapp_login");
        localStorage.removeItem("todoapp_token");
    }

    // register(username: string, email: string, password: string) {
    //     return axios.post(URL_TOKEN, {
    //         username,
    //         email,
    //         password
    //     });
    // }

    getCurrentUser() {
        const userStr = localStorage.getItem("todoapp_login");
        const tokenStr = localStorage.getItem("todoapp_token");
        if (userStr && tokenStr) {
            const res: IAuth = {
                login: JSON.parse(userStr),
                token: JSON.parse(tokenStr)
            }
            return res;
        }

        return null;
    }
}

export default new ServiceAuth();
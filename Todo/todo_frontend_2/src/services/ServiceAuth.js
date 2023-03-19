import axios from "axios";

const URL_TOKEN = "http://127.0.0.1:8000/api-token-auth/";

class ServiceAuth {

    login(username, password) {
        return axios
            .post(URL_TOKEN, {
                username,
                password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("todoapp_login", JSON.stringify(username));
                    localStorage.setItem("todoapp_token", JSON.stringify(response.data.token));
                    return response;
                }
            }).catch(function (error) {
                if (error.response) {
                    // Запрос был сделан, и сервер ответил кодом состояния, который
                    // выходит за пределы 2xx
                    console.log('error.response.data:', error.response.data);
                    console.log('error.response.status', error.response.status);
                    console.log('error.response.headers', error.response.headers);
                } else if (error.request) {
                    // Запрос был сделан, но ответ не получен
                    // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
                    // http.ClientRequest в node.js
                    console.log('error.request', error.request);
                } else {
                    // Произошло что-то при настройке запроса, вызвавшее ошибку
                    console.log('Error.message', error.message);
                }
                console.log('error.config', error.config);
            });
    };

    logout() {
        localStorage.removeItem("todoapp_login");
        localStorage.removeItem("todoapp_token");
    };

    getCurrentUser() {
        const userStr = localStorage.getItem("todoapp_login");
        const tokenStr = localStorage.getItem("todoapp_token");
        if (userStr && tokenStr) {
            const res = {
                login: JSON.parse(userStr),
                token: JSON.parse(tokenStr)
            }
            return res;
        }
        return null;
    };

    isAuth() {
        const userStr = localStorage.getItem("todoapp_login");
        const tokenStr = localStorage.getItem("todoapp_token");

        if (userStr != null && typeof userStr !== "undefined") {
            // Можно какую либо проверку
        } else {
            console.log('No user');
            return false;
        }

        if (tokenStr != null && typeof tokenStr !== "undefined") {
            return true;
        } else {
            console.log('No token');
            return false;
        }

        // Это не работает
        // if (userStr && tokenStr) { return true; };
        // return false;
    };

    instance_token() {
        const token = localStorage.getItem("todoapp_token");
        const instance = axios.create({
            baseURL: 'http://127.0.0.1:8000/todo/',
            timeout: 1000,
            headers: { 'Authorization': 'Token 7cde47bcca188aa557e824e775843f46ca6d4ffb' }
        });
        // headers: { 'Authorization': 'Token ' + token }
        // headers: { 'Authorization': 'Bearer ' + token }
        return instance;
    };

    get(urldop) {
        // var axios = require('axios');
        var response = {};
        var res = [];
        var token = localStorage.getItem("todoapp_token");
        token = 'Token ' + token.slice(1, -1);
        // console.log(token);
        var urlbase = 'http://127.0.0.1:8000/todo';
        // console.log(urlbase + urldop + '/');

        var config = {
            method: 'get',
            url: urlbase + urldop + '/',
            headers: {
                'Authorization': token
            }
        };
        // 'Token 7cde47bcca188aa557e824e775843f46ca6d4ffb'

        const result = axios(config);
        // .then(function (response) {
        //     // res = response.data.results;
        //     return response.data.results;
        //     // console.log(response.data.results);
        //     // prj = JSON.stringify(response.data);
        //     // console.log(JSON.stringify(response.data));
        //     // console.log(projects.length);
        //     // console.log(projects);
        //     // console.log(projects[0].id);
        //     // console.log(projects[0].name);
        //     // console.log(typeof prj);
        // })
        // .catch(function (error) {
        //     console.log(error);
        //     return [];
        // });
        return result.data.results;
    };

};

export default new ServiceAuth();


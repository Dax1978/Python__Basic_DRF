/*
СЛУЖБА ДАННЫХ
У нас также есть методы для получения данных с сервера.
В случае, если мы обращаемся к защищенным ресурсам,
HTTP-запрос требует заголовка авторизации.
*/


export default function ServiceAuthHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr)
        user = JSON.parse(userStr);

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return { Authorization: '' };
    }
}
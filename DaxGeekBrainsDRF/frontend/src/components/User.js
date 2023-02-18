import React from 'react'


const UserItem = ({ user }) => {
    return (
        <tr>
            <td>
                {user.id}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}


const UserList = ({ users }) => {
    return (
        <table>
            <caption>Пользователи</caption>
            <th>
                Id
            </th>
            <th>
                Логин
            </th>
            <th>
                Имя
            </th>
            <th>
                Фамилия
            </th>
            <th>
                Почта
            </th>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}


export default UserList
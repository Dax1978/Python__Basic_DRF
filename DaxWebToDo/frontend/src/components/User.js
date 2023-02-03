import React from 'react'

const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.nameuser}
            </td>
            <td>
                {user.namefirst}
            </td>
            <td>
                {user.namelast}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table class="collapsed">
            <th>
                Alias
            </th>
            <th>
                First name
            </th>
            <th>
                Last Name
            </th>
            <th>
                Email
            </th>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}

export default UserList
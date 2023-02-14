import React from 'react'


const ProjectItem = ({ item }) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.repozitory}</td>
            <td>{item.users}</td>
        </tr>
    )
}

const ProjectList = ({ items }) => {
    return (
        <table>
            <caption>Проекты</caption>
            <tr>
                <th>ID</th>
                <th>Наименование</th>
                <th>Репозиторий</th>
                <th>USERS</th>
            </tr>
            {items.map((item) => <ProjectItem item={item} />)}
        </table>
    )
}

export default ProjectList
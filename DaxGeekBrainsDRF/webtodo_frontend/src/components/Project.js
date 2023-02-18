import React from 'react'
import { NavLink } from 'react-router-dom'


const ProjectItem = ({ item }) => {
    // console.log('---***---')
    // console.log(item.id)
    // console.log('---***---')
    return (
        <tr>
            <td><NavLink key={item.id} to={`project/${item.id}`}>{item.id}</NavLink></td>
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
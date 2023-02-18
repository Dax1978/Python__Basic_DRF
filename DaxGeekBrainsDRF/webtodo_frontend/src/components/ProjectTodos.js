import React from 'react'
import { useParams } from 'react-router-dom'


const TodoItem = ({ item }) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.text}</td>
            <td>{item.status}</td>
            <td>{item.created}</td>
            <td>{item.updated}</td>
            <td>{item.project}</td>
            <td>{item.user}</td>
        </tr>
    )
}

const ProjectTodoList = ({ items }) => {
    // console.log('---*---')
    // console.log(items)
    // console.log('---*---')
    let { id } = useParams();
    let filtered_items = items.filter((item) => item.project == id)
    // console.log('---*---')
    // console.log(id)
    // console.log('---*---')
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Наименование</th>
                <th>Текст</th>
                <th>Статус</th>
                <th>Создана</th>
                <th>Обновлена</th>
                <th>Проект</th>
                <th>USER</th>
            </tr>
            {filtered_items.map((item) => <TodoItem item={item} />)}
        </table>
    )
}

export default ProjectTodoList
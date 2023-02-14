import React from 'react'


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
const TodoList = ({ items }) => {
    console.log(items)
    return (
        <table>
            <caption>Задачи</caption>
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
            {items.map((item) => <TodoItem item={item} />)}
        </table>
    )
}

export default TodoList
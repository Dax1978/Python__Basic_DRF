import React from 'react';
import Todo from '../todo/Todo'

const styleBtn = {
    borderWidth: '1px',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    width: '157px',
    'color': 'rgb(255 255 255)',
    'backgroundColor': 'rgb(55 65 81)',
    '--hover-backgroundColor': 'rgb(148 163 184)',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    fontSize: '18px',
}

const styleBtnAdd = {
    borderWidth: '1px',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    width: '320px',
    'color': 'rgb(255 255 255)',
    'backgroundColor': 'rgb(55 65 81)',
    '--hover-backgroundColor': 'rgb(148 163 184)',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    fontSize: '18px',
}

export default function ProjectTitle(props) {
    if (props.id === -1) {
        return (<p>Проект еще не выбран</p>)
    } else {
        // let tasks = []
        // props.todos.map(task => (task.id === props.id) && tasks.push(task))
        // console.log('pt', props.todos)
        return (
            <div>
                <p>Id проекта: {props.id}</p>
                <div>
                    <div>
                        <button type='button' style={styleBtn} data-hover="btnAdd" onClick={() => {
                            props.handleModalActive(true);
                            props.handleModalType('prjFormAdd');
                        }}>
                            <style>{`[data-hover="btnAdd"]:hover {background-color: rgb(148 163 184) !important;}`}</style>
                            Добавить
                        </button>
                        <span> </span>
                        <button type='button' style={styleBtn} data-hover="btnEdit" onClick={() => {
                            props.handleModalActive(true);
                            props.handleModalType('prjFormEdit');
                        }}>
                            <style>{`[data-hover="btnEdit"]:hover {background-color: rgb(148 163 184) !important;}`}</style>
                            Редактировать
                        </button>
                        <span> </span>
                        <button type='button' style={styleBtn} data-hover="btnDel" onClick={() => {
                            props.handleModalActive(true);
                            props.handleModalType('prjFormDel');
                        }}>
                            <style>{`[data-hover="btnDel"]:hover {background-color: rgb(148 163 184) !important;}`}</style>
                            Удалить
                        </button>
                    </div>
                    <div style={{ marginTop: '5px', }}>
                        <button type='button' style={styleBtnAdd} data-hover="btnAddTodo">
                            <style>{`[data-hover="btnAddTodo"]:hover {background-color: rgb(148 163 184) !important;}`}</style>
                            Новая задача
                        </button>
                    </div>
                    {/* Здесь должны быть задачи */}
                    {/* {props.todos.map(task => (task.id === props.id) && tasks.push(task))} */}
                    {/* {console.log(props.id)}
                    {console.log(props.todos)}
                    {props.todos?.map(task => (task.id === props.id) && <p>{task.title}</p>)} */}
                    {<div>
                        {/* {props.todos?.map((task) => (task.project == props.id) && <li key={task.id} > */}
                        {props.todos?.map((task) => (task.project === props.id) && <Todo todo={task} key={task.id} />)}
                    </div>}
                </div>
            </div>
        )
    }
}
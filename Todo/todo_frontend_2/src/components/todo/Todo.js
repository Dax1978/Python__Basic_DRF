import React from 'react';

const todoStyle = {
    marginTop: '37px',
    marginLeft: (window.innerWidth - 777 - 777) / 2,
    // width: window.innerWidth - 777,
    width: 777,
    padding: '17px',
    fontSize: '18px',
    color: 'black',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
};

export default function Todo(props) {
    return (
        < div style={todoStyle}>
            <p style={{ marginTop: '17px', }}>{props.todo.id}</p>
            <p style={{ marginTop: '17px', }}>{props.todo.title}</p>
            <p style={{ marginTop: '17px', }}>{props.todo.text}</p>
        </div>
    )
}
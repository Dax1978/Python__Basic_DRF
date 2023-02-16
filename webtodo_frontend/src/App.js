import React from 'react';
import axios from 'axios'

import './App.css'
import ProjectList from './components/Project.js'
import TodoList from './components/Todos.js'
import ProjectTodoList from './components/ProjectTodos'

import { Routes, Route, Link, Navigate } from 'react-router-dom'

import { Pageblog } from './pages/Pageblog'
import { Pagecreatepost } from './pages/Pagecreatepost'
import { Pageeditpost } from './pages/Pageeditpost'
import { Pagesingle } from './pages/Pagesingle'
import { Pageabout } from './pages/Pageabout'
import { Pagenotfound } from './pages/Pagenotfound'
import { Layout } from './components/Layout'


const NotFound404 = ({ location }) => {
  return (
    <div>
      <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      'projects': [],
      'todos': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/todo/project/')
      .then(response => {
        const projects = response.data.results
        // console.log(projects)
        this.setState(
          {
            'projects': projects
          }
        )
      }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/todo/todo/')
      .then(response => {
        const todos = response.data.results
        // const todos = response.data.results вместо const todos = response.data
        // т.к. на бэке запущена пагинация
        // console.log(todos)
        this.setState(
          {
            'todos': todos
          }
        )
      }).catch(error => console.log(error));

  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ProjectList items={this.state.projects} />} />
            <Route path='todo' element={<TodoList items={this.state.todos} />} />
            <Route path="project/:id" element={<ProjectTodoList items={this.state.todos} />} />
            <Route path="projects" element={<Navigate to="/" />} />

            <Route path='about' element={<Pageabout />} />
            <Route path='posts' element={<Pageblog />} />
            <Route path='posts/:id' element={<Pagesingle />} />
            <Route path='posts/new' element={<Pagecreatepost />} />
            <Route path='posts/:id/edit' element={<Pageeditpost />} />
            <Route path='posts/:category/:title' element={<Pagesingle />} />
            <Route path='*' element={<Pagenotfound location={window.location} />} />
          </Route>
        </Routes>
      </div>
    )
  }

}

// <Route element={NotFound404} />
// <Route path='/' element={<ProjectList items={this.state.projects} />} />
// <Route exact path='/' component={() => <ProjectList items={this.state.projects} />} />
// <Route path='/' element={<ProjectList items={this.state.projects} />} />

// <h1>Привет!</h1>
// <div>
//   <ProjectList items={this.state.projects} />
// </div>
// <p></p>
// <div>
//   <TodoList items={this.state.todos} />
// </div>

export default App;

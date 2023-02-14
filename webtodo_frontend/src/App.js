import React from 'react';
import axios from 'axios'

import ProjectList from './components/Project.js'
import TodoList from './components/Todos.js'

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
        const projects = response.data
        // console.log(projects)
        this.setState(
          {
            'projects': projects
          }
        )
      }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/todo/todo/')
      .then(response => {
        const todos = response.data
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
      <div>

        <h1>Привет!</h1>
        <div>
          <ProjectList items={this.state.projects} />
        </div>
        <p></p>
        <div>
          <TodoList items={this.state.todos} />
        </div>

      </div>
    )
  }

}

export default App;

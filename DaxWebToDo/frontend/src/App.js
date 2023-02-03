import React from 'react';
import './App.css';
import axios from 'axios'

import UserList from './components/User.js'
import './components/User.css'
import Dropdown from './components/Dropdown.js'
import MainMenu from './components/MainMenu.js'
import './components/MainMenu.css'
import Footer from './components/Footer.js'
import './components/Footer.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/UsersApp/')
      .then(response => {
        const users = response.data
          this.setState(
            {
              'users': users
            }
          )
      }).catch(error => console.log(error))
  }

  /*
  componentDidMount() {
    const users = [
      {
        'nameuser': 'Идиот',
        'namefirst': 'Фёдор',
        'namelast': 'Достоевский',
        'email': 'idiot@dostoevsky.ru'
      },
      {
        'nameuser': 'Алые паруса',
        'namefirst': 'Александр',
        'namelast': 'Грин',
        'email': 'parusa@grin.ru'
      },
    ]

    this.setState(
      {
        'users': users
      }
    )
  }
  */
  
  render () {
    return (
      <div>
        <MainMenu />
        <UserList users={this.state.users} />
        <Footer />
      </div>
    )
  }
}

export default App;

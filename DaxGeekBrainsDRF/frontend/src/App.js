import React from 'react';
import axios from 'axios'

// import logo from './logo.svg';
import './App.css';

import Dropdown from './components/Dropdown.js'
import MainMenu from './components/MainMenu.js'
import './components/MainMenu.css'
import AuthorList from './components/Author.js'
import UserList from './components/User.js'
import './components/User.css'
import Footer from './components/Footer.js'
import './components/Footer.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      'authors': [],
      'users': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/authors')
      .then(response => {
        const authors = response.data
        this.setState(
          {
            'authors': authors
          }
        )
      }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/users/')
      .then(response => {
        const users = response.data
        this.setState(
          {
            'users': users
          }
        )
      }).catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <div>
          <MainMenu />
        </div>
        <p></p>
        <div>
          <AuthorList authors={this.state.authors} />
        </div>
        <p></p>
        <div>
          <UserList users={this.state.users} />
        </div>
        <p></p>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;

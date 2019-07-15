import React, { Component } from 'react'
import './assets/bootstrap.min.css';
import Login from './components/Login';
import './App.css';
import History from './components/History';


export default class App extends Component {

  state = {
    userData: [],
    login: false
  }

  dataUser = (data) => {
    const userData = data.data;
    this.setState({
      userData,
      login: true
    })
  }

  render() {
    const { login } = this.state;
    if (login) {
      return (
        <div className="container">
          <History />
        </div>
      )
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="text-center mb-5 mt-5 bg-primary rounded">
                <img src="http://hostingwebmex.com/z3h/logo.png" alt="3 Hermanos Logo" />
              </div>
              <div className="card pb-3">
                <Login dataUser={this.dataUser} />
              </div>
            </div>
          </div>
        </div>
      )
    }

  }
}


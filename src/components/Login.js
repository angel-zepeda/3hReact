import React, { Component } from 'react'
import axios from 'axios';


export default class Login extends Component {
  state = {
    user: {
      email: '',
      password: ''
    },
    error: false
  }


  handleChange = (e) => {
    const user = { ...this.state.user, [e.target.name]: e.target.value }
    this.setState({
      user
    })

  }

  handelSubmit = (e) => {
    const { email, password } = this.state.user;
    e.preventDefault();
    if (email === '' || password === '') {
      this.setState({
        error: true
      })
      return;
    } else {
      this.login();
    }

  }

  login = async () => {
    const response = await axios.post('http://157.230.81.230:5000/api/user/login', this.state)
    this.props.dataUser(response);
  }


  render() {
    const { error } = this.state;
    return (
      <div>
        {
          error ?
            <div className="alert alert-primary">
              <strong>Oops!</strong> Contraseña o Email incorrecto
          </div> :
            null
        }
        <form onSubmit={this.handelSubmit}>
          <div className="text-center m-3 text-primary">
            <h1>Bienvenido</h1>
            <h3>Supervisión 3Hermanos</h3>
          </div>
          <div className="form-group col-md-8 mx-auto mt-4">
            <label htmlFor="email">Email</label>
            <input
              className="form-control col-md-12 mx-auto"
              type="text"
              name="email"
              autoFocus={true}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-8 mx-auto mt-3">
            <label htmlFor="password">Contraseña</label>
            <input
              className="form-control col-md-12 mx-auto"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-8 mx-auto">
            <input
              type="submit"
              className="btn btn-primary col-md-12 col-sm-12 col-lg-12 mt-3 mb-3"
              value="Iniciar sesión"
            />
          </div>
        </form >
      </div>
    )
  }
}

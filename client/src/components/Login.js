import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Background, Card, Form, Input, Title, Button, Label } from '../lib/index'
import { login } from '../services/auth'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  async onSubmit (event) {
    event.preventDefault()
    try {
      const response = await login(this.state.email, this.state.password)
      window.localStorage.setItem('token', response.data.token)
      window.location.href = '/'
    } catch (err) {
      console.log(err)
      this.setState({ password: '' })
    }
  }

  handleChange (name, event) {
    this.setState({
      [name]: event.target.value
    })
  }

  render () {
    const { email, password } = this.state
    return (
      <Background>
        <Card>
          <Form onSubmit={this.onSubmit.bind(this)}>
            <Title>LOGIN</Title>
            <Input
              type='text'
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange.bind(this, 'email')}
            />
            <Input
              type='password'
              name='password'
              value={password}
              placeholder='Password'
              onChange={this.handleChange.bind(this, 'password')}
            />
            <Button>ENTER</Button>
            <Label><Link to='/signup'>Cadastrar nova conta</Link></Label>
          </Form>
        </Card>
      </Background>
    )
  }
}

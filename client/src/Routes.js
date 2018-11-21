import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Todo from './components/Todo'
import Login from './components/Login'
import Signup from './components/Signup'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/' component={Todo} />
    </Switch>
  </BrowserRouter>
)

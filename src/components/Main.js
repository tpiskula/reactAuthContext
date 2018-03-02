import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'
import User from './User'
import Login from './Login'
import AuthRoute from './AuthRoute'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
      <Switch>
        <AuthRoute exact path='/' component={Home}/>
        <AuthRoute path='/roster' component={Roster}/>
        <AuthRoute path='/schedule' component={Schedule} />
        <AuthRoute path='/user' component={User} />
        <Route path='/login' component={Login}/>
      </Switch>
  </main>
)

export default Main

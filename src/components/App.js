import React from 'react'
import Header from './Header'
import Main from './Main'
import Auth from '../services/Auth'
import { AuthProvider } from './AuthProvider'

const authService = new Auth();

const App = () => (
  <div>
    <AuthProvider service={authService}>
      <Header />
      <Main />
    </AuthProvider>
  </div>
)

export default App

import React from 'react'
import { AuthAndUserConsumer } from './AuthProvider'

const WithUser = ({ children }) => {
  return (
    <AuthAndUserConsumer>
      {
        ({ user }) => children(user)
      }
    </AuthAndUserConsumer>
  )
}

export default WithUser

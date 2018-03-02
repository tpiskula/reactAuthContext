import React from 'react'
import { UserConsumer } from './AuthProvider'

const Home = () => (
  <div>
    <UserConsumer>
      {(user) => <h1>Welcome to the Tornadoes Website{user ? `, ${user.name}` : ''}!</h1>}
    </UserConsumer>
  </div>
)

export default Home

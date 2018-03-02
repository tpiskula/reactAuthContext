import React from 'react'
import { Link } from 'react-router-dom'

import WithAuth from './WithAuth'

const NavUser = () => {
  return (
    <WithAuth>
      {
        (auth) => {
          return (
            auth.isAuthenticated() ?
            (<span style={{float:'right'}}>
                <Link to='/user'>{auth.getUser().name}</Link>
                <button onClick={() => auth.logout()} >Logout</button>
            </span>)
            : null
          )
        }
      }
    </WithAuth>
  )
}

export default NavUser

import React from 'react'
import WithAuth from './WithAuth'

const NavUser = () => {
  return (
    <WithAuth>
      {
        (auth) => {
          return (
            auth.isAuthenticated() ?
            (<span style={{float:'right'}}>
                {auth.getUser().name}
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

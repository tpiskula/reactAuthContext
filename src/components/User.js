import React from 'react'
import { Redirect } from "react-router";
import WithAuth from './WithAuth'

const User = () => {
  return (
    <WithAuth>
    {
        (auth) => {
        return (
        <div>
            <div>
                {JSON.stringify(auth.getUser())}
                <button onClick={() => auth.logout()} >Logout</button>
            </div>
        </div>
      )
      }
    }
    </WithAuth>
)}

export default User

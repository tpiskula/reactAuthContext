import React from 'react'
import { Redirect } from "react-router";
import WithUser from './WithUser'

const User = () => {
  return (
    <WithUser>
    {
        (user) => {
        return (
        <div>
            <div>
                {Object.keys(user).map(k => <li>{k}: {user[k].toString()}</li>)}
            </div>
        </div>
      )
      }
    }
    </WithUser>
)}

export default User

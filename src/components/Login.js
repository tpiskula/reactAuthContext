import React from 'react'
import { Redirect } from "react-router";
import WithAuth from './WithAuth'


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImV4cCI6MTUzMjk1NjAyNzA4OX0.fbUy7AIxKCctgL8rePwR6lc2dKY8Y5xp9XbJMLlkkmc";


const Login = () => {
  return (
    <WithAuth>
      {
        (auth) => {
          return (
            <div>
              {!auth.isAuthenticated() ?
                <div>
                  <button onClick={() => auth.setToken(token)}>Login</button>
                </div>
                : <Redirect to="/" />}
            </div>
          )
        }
      }
    </WithAuth>
)}

export default Login

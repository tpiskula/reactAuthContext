import React from 'react'
import { Redirect } from "react-router";
import WithAuth from './WithAuth'


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImV4cCI6MTUxOTk5NTQwMTg2NX0.hXjCqJVVd4KhubnE1D3pXv52DznBP1hT6xwE_5D_csM";


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

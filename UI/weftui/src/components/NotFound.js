import React from 'react'
import { useAuth } from "react-oidc-context"
function NotFound() {
    const auth = useAuth()
  return (
    <div>
      You cannot access this page. Its prohibated
      <a href='/landingpage'>Click here</a>
      <a href='/logout' onClick={() => auth.signoutRedirect()} >Click here to logout</a>
    </div>
  )
}

export default NotFound

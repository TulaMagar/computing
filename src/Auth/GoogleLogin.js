import React, { Component } from 'react'

export default class GoogleLogin extends Component {
  render() {
    return (
        <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
    />
    )
  }
}

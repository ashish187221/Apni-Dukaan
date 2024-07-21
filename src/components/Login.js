import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    
  return (
    <>
      <div className="login-page">
          <div className="login">
            <label htmlFor="username">What's your email ?</label>
            <br />
            <input type="text" id="username" placeholder="Email" required="" />
            <label htmlFor="password" required>Your password ?</label>
            <br />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              required=""
            />
            <Link to="/" id="lg-btn">Login</Link>
            <div className="footer-links">
              <a href="">Create Account</a>
              <a href="" style={{position : 'relative', left : '30px'}}>Forgot your password?</a>
            </div>
          </div>
        </div>
    </>
  )
}

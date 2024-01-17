import React from 'react'
import "./Login.css"
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <NavLink to={"/"}>
      <h2>uzum markek</h2>
      </NavLink>
      <input type="email" placeholder='email...' />
      <input type="password" placeholder='password' />
      <button>sing up</button>
      <NavLink to={"/"}>
      <span>ortga qaytish</span>
      </NavLink>
    </div>
  )
}

export default Login
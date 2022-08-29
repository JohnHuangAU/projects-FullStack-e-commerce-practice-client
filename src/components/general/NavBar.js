import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav class="navbar bg-main">
      <h1>
        <a href="">
          <i class="fas fa-store"></i> e-Shop
        </a>
      </h1>
      <ul>
        <li><a href="">Login</a></li>
        <li><a href="">Merchants</a></li>
        <li><a href="">Register</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
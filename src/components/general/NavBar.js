import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar bg-main">
      <h1>
        <Link to="">
          <i className="fas fa-store"></i> e-Shop
        </Link>
      </h1>
      <ul>
        <li><Link to="">Login</Link></li>
        <li><Link to="">Merchants</Link></li>
        <li><Link to="">Register</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
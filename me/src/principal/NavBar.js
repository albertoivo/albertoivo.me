import React from 'react'
import { Link } from 'react-router-dom'
import { GoX } from 'react-icons/lib/go'

const NavBar = () => (
  <nav id="nav">
    <a className="toggle close" href="#">
      <GoX />
    </a>
    <ul>
      <li>
        <Link to="/curriculum">Curriculum Vitae</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <a href="https://www.instagram.com/nossasrotas/">Nossas Rotas</a>
      </li>
    </ul>
  </nav>
)

export default NavBar

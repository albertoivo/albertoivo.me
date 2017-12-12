import React from 'react'
import { Link } from 'react-router-dom'
import { GoX } from 'react-icons/lib/go'

const NavBar = () => (
  <nav id="nav" role="navigation">
    <a className="toggle close" href="#">
      <GoX />
    </a>
    <ul>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/curriculum">Curriculum Vitae</Link>
      </li>
      <li>
        <a href="https://www.instagram.com/nossasrotas/">
          Nossas Rotas Instagram
        </a>
      </li>
    </ul>
  </nav>
)

export default NavBar

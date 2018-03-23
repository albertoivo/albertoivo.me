import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <nav id="nav">
    <a className="toggle close" href="#">x</a>
    <ul>
      <li>
        <Link to="/curriculum">Curriculum Vitae</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <a
          href="https://www.instagram.com/nossasrotas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nossas Rotas
        </a>
      </li>
    </ul>
  </nav>
)

export default NavBar

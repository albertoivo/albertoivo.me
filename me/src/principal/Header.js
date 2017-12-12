import React from 'react'
import { GoThreeBars } from 'react-icons/lib/go'

const Header = () => (
  <header className="princ-header">
    <a className="toggle open" href="#nav">
      <GoThreeBars size={40} />
    </a>
  </header>
)

export default Header

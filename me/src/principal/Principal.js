import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Info from './Info'
import Contact from './Contact'
import Footer from './Footer'
import { GoThreeBars } from 'react-icons/lib/go'
import './principal.css'

const Principal = () => (
  <div className="princ-container">
    <NavBar />
    <Header />
    <Info />
    <Contact />
    <Footer css={'princ-footer'} />
  </div>
)

export default Principal

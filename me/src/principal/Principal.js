import React from 'react'
import About from './About'
import Footer from './Footer'
import './principal.css'

const Principal = () => (
  <div className="princ-container">
    <header className="princ-header" />

    <About />

    <div className="sections" />

    <div className="sections" />

    <Footer css={'princ-footer'} />
  </div>
)

export default Principal

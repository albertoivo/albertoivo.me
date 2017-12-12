import React from 'react'
import Info from './Info'
import Footer from './Footer'
import './principal.css'

const Principal = () => (
  <div className="princ-container">
    <header className="princ-header" />

    <Info />

    <div className="sections" />

    <div className="sections" />

    <Footer css={'princ-footer'} />
  </div>
)

export default Principal

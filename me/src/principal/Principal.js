import React from 'react'
import About from './About'
import './principal.css'

const Principal = () => (
  <div className="princ-container">
    <header className="princ-header" />

    <About />

    <div className="sections" style={{ backgroundColor: 'green' }} />
    <div className="sections" style={{ backgroundColor: 'pink' }} />
    <footer style={{ backgroundColor: 'blue' }} />
  </div>
)

export default Principal

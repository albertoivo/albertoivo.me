import React from 'react'
import Footer from '../principal/Footer'
import './portfolio.css'

const Portfolio = () => (
  <div>
    <div className="port-container">
      <div className="port-menu">oi</div>
      <div id="photos">
        <img src="https://placekitten.com/234/234" alt="1" />
        <img src="https://placekitten.com/494/232" alt="2" />
        <img src="https://placekitten.com/434/132" alt="3" />
        <img src="https://placekitten.com/404/332" alt="4" />
        <img src="https://placekitten.com/224/432" alt="5" />
        <img src="https://placekitten.com/344/432" alt="6" />
        <img src="https://placekitten.com/434/432" alt="7" />
        <img src="https://placekitten.com/438/332" alt="8" />
        <img src="https://placekitten.com/234/432" alt="9" />
      </div>
    </div>
    <Footer css={'port-footer'} />
  </div>
)

export default Portfolio

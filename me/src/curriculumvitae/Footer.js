import React from 'react'
import { FaFacebookSquare, FaInstagram } from 'react-icons/lib/fa'

const Footer = () => (
  <div>
    <p>Find me on social media</p>
    <FaFacebookSquare />
    <FaInstagram />
    <p>
      Powered by{' '}
      <a href="http://albertoivo.me" target="_blank" rel="noopener noreferrer">
        albertoivo.me
      </a>
    </p>
  </div>
)

export default Footer

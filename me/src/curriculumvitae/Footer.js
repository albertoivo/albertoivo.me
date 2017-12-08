import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinSquare
} from 'react-icons/lib/fa'

const Footer = () => (
  <div>
    <p>Find me on social media</p>
    <FaFacebookSquare /> <FaInstagram /> <FaLinkedinSquare />
    <p>
      Powered by{' '}
      <a href="http://albertoivo.me" target="_blank" rel="noopener noreferrer">
        albertoivo.me
      </a>
    </p>
  </div>
)

export default Footer

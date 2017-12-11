import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinSquare
} from 'react-icons/lib/fa'

const Footer = ({ css }) => (
  <div className={css}>
    <p>Find me on social media</p>
    <FaFacebookSquare /> <FaInstagram /> <FaLinkedinSquare />
    <p>
      Powered by <Link to="/">albertoivo.me</Link>
    </p>
  </div>
)

export default Footer

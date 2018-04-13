import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinSquare,
  FaGithub
} from 'react-icons/lib/fa'

const Footer = ({ css }) => (
  <div className={css}>
    <p>Find me on social media</p>
    <FaFacebookSquare /> <FaInstagram /> <FaLinkedinSquare /> <FaGithub />
    <p>
      Powered by <Link to="/">AlbertoIvo.me</Link>
    </p>
  </div>
)

export default Footer

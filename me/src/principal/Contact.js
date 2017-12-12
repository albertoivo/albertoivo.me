import React from 'react'
import {
  FaMapMarker,
  FaEnvelope,
  FaLinkedinSquare,
  FaPaperPlane
} from 'react-icons/lib/fa'

const Contact = () => (
  <div>
    <p className="section-title">Contact</p>
    <p className="section-subtitle">Lets get in touch. Send me a message:</p>
    <div id="contact">
      <div id="contact-info">
        <p>
          <FaMapMarker /> Brasília, Brazil
        </p>
        <p>
          <FaEnvelope /> albertoivo@gmail.com
        </p>
        <p>
          <FaLinkedinSquare /> /alberto-ivo-vieira
        </p>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Name" required name="Name" />
          <input type="text" placeholder="Email" required name="Email" />
          <input type="text" placeholder="Subject" required name="Subject" />
          <input type="text" placeholder="Message" required name="Message" />
          <button type="submit">
            <FaPaperPlane /> SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  </div>
)

export default Contact

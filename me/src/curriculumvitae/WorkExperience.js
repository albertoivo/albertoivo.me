import React from 'react'
import { FaSuitcase, FaCalendar } from 'react-icons/lib/fa'

const WorkExperience = () => (
  <div>
    <h2>
      <FaSuitcase size={30} /> Work Experience
    </h2>
    <div id="cv-content">
      <h3>
        <b>Full Stack Developer / serpro.gov.br</b>
      </h3>
      <h5>
        <FaCalendar />Sep 2012 - <span class="tag">Current</span>
      </h5>
      <p>
        Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
        deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea
        et odio, unde doloremque repellendus iure, iste.
      </p>

      <hr />

      <h3>
        <b>Graphic Designer / designsomething.com</b>
      </h3>
      <h5>
        <FaCalendar />Jun 2010 - Mar 2012
      </h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
    </div>
  </div>
)

export default WorkExperience

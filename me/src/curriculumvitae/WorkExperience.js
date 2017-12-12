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
        <FaCalendar />2012 - <span class="tag">Current</span>
      </h5>

      <hr />

      <h3>
        <b>Java Web Developer / cnpq.br</b>
      </h3>
      <h5>
        <FaCalendar />2010 - 2012
      </h5>

      <hr />

      <h3>
        <b>Java Web Developer / petrobras.com.br</b>
      </h3>
      <h5>
        <FaCalendar />2008 - 2009
      </h5>

      <hr />

      <h3>
        <b>Test Engineer / UFPE - Motorola</b>
      </h3>
      <h5>
        <FaCalendar />2008
      </h5>
    </div>
  </div>
)

export default WorkExperience

import React from 'react'
import './Project.scss';

import ProjectBox from './Projectbox';
import scan from "../../images/scan.png"
import asistant from "../../images/asistant.png"
import ecommerce from "../../images/ecommerce.png"
import weather from "../../images/weather1.png"
import weather1 from "../../images/weather.jpg"

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox
          projectPhoto={scan}
          projectName="Scan Application"
          githubLink=""
        />
        <ProjectBox
          projectPhoto={asistant}
          projectName="Assistant Application"
          githubLink="https://github.com/amaansodagar786/asistant"
        />
        <ProjectBox
          projectPhoto={ecommerce}
          projectName="E-Commerce Website"
          githubLink="https://github.com/amaansodagar786/E-commerce"
        />
        <ProjectBox
          projectPhoto={weather1}
          projectName="Weather App"
          githubLink="https://github.com/amaansodagar786/Weather-App"
        />

      </div>

    </div>

  )
}

export default Projects


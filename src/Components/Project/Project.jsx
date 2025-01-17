import React from 'react'
import './Project.scss';

import ProjectBox from './Projectbox';
import scan from "../../images/scan.png"
import asistant from "../../images/asistant.png"
import ecommerce from "../../images/ecommerce.png"
import hroroject from "../../images/hrproject.jpg"
import chatapp from "../../images/chatapp.png"


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox
          projectPhoto={chatapp}
          projectName="Real-Time Chat Application"
          githubLink="https://github.com/amaansodagar786/frontend_chat"
        />
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
        {/* <ProjectBox
          projectPhoto={weather1}
          projectName="Weather App"
          githubLink="https://github.com/amaansodagar786/Weather-App"
        /> */}

        <ProjectBox
          projectPhoto={hroroject}
          projectName="HR Management Project"
          githubLink="https://newproject-xi-eight.vercel.app/"
        />

      </div>

    </div>

  )
}

export default Projects


import React from 'react'
import './Project.scss';

import ProjectBox from './Projectbox';
import scan from "../../images/scan.png"
import asistant from "../../images/asistant.png"
import ecommerce from "../../images/ecommerce.png"
import hroroject from "../../images/hrproject.jpg"
import chatapp from "../../images/chatapp.jpg"
import weather from "../../images/Weather.png"


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox
          projectPhoto={chatapp}
          projectName="Real-Time Chat Application"
          githubLink="https://github.com/amaansodagar786/frontend_chat"
          liveLink="https://chat-app-flame-zeta.vercel.app"
        />

        <ProjectBox
          projectPhoto={ecommerce}
          projectName="E-Commerce Website"
          githubLink="https://github.com/amaansodagar786/E-commerce"
          liveLink="https://e-commerce-three-tawny-31.vercel.app"
        />

        <ProjectBox
          projectPhoto={weather}
          projectName="Weather Application"
          githubLink="https://github.com/amaansodagar786/weatherapp"
          liveLink="https://weatherapp-kohl-two.vercel.app"
        />


        <ProjectBox
          projectPhoto={hroroject}
          projectName="HR Management Project"
          githubLink="https://github.com/amaansodagar786/newproject"
          liveLink="https://newproject-xi-eight.vercel.app"
        />
        <ProjectBox
          projectPhoto={asistant}
          projectName="Assistant Application"
          githubLink="https://github.com/amaansodagar786/asistant"
          liveLink="https://github.com/amaansodagar786/asistant"
        />
        <ProjectBox
          projectPhoto={scan}
          projectName="Scan Application"
          githubLink="https://github.com/amaansodagar786/scanshop_app"
          liveLink="https://github.com/amaansodagar786/scanshop_app"
        />


      </div>

    </div>

  )
}

export default Projects


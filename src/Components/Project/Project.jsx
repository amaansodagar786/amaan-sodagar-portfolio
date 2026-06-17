import React from 'react';
import './Project.scss';


import ProjectBox from './Projectbox';
import scan from "../../images/scan_app.png";
import asistant from "../../images/virtual_app.png";
import ecommerce from "../../images/e_commerce.png";
import hroroject from "../../images/hr_manage.png";
import chatapp from "../../images/realtime_chat.png";
import weather from "../../images/weather_app.png";

const Projects = () => {
  return (
    <div className='projects-wrapper'>

      {/* Ambient blobs — same as Contact */}
      <div className="blob blob--1" />
      <div className="blob blob--2" />

      <div className='projects-header'>
        <span className='projects-overline'>What I've Built</span>
        <h1 className='projects-heading'>
          My <span className='stroke-text'>Projects.</span>
        </h1>
      </div>

      <div className='projects-grid'>
        <ProjectBox
          projectPhoto={chatapp}
          projectName="Real-Time Chat Application"
          githubLink="https://github.com/amaansodagar786/frontend_chat"
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
          // liveLink="https://github.com/amaansodagar786/asistant"
        />
        <ProjectBox
          projectPhoto={scan}
          projectName="Scan Application"
          githubLink="https://github.com/amaansodagar786/scanshop_app"
          // liveLink="https://github.com/amaansodagar786/scanshop_app"
        />
      </div>

    </div>
  );
};

export default Projects;

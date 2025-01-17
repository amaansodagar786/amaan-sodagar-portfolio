import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import './Projectbox.scss';


const Projectbox = ({ projectPhoto, projectName , githubLink , liveLink}) => {


  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>


        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <button className='projectbtn'><CiGlobe /> Live</button>
        </a>



      </div>
    </div>
  )
}

export default Projectbox

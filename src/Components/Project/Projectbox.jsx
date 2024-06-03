import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import './Projectbox.scss';


const Projectbox = ({ projectPhoto, projectName , githubLink}) => {


  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>


        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>



      </div>
    </div>
  )
}

export default Projectbox

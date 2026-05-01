import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import './Projectbox.scss';

const Projectbox = ({ projectPhoto, projectName, githubLink, liveLink }) => {
  return (
    <div className='project-box'>
      <div className='project-box__img-wrap'>
        <img className='project-box__photo' src={projectPhoto} alt={projectName} />
        <div className='project-box__overlay' />
      </div>

      <div className='project-box__body'>
        <h3 className='project-box__name'>{projectName}</h3>

        <div className='project-box__btns'>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className='project-box__btn'>
            <FaGithub /> Github
          </a>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className='project-box__btn project-box__btn--live'>
              <CiGlobe /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projectbox;
import React from 'react'
import './Project.scss' ;

import ProjectBox from './Projectbox';
// import chunkymonkey from "../../images/chunkymonkey.png"
// import fashionstore from "../../images/fashionstore.png"
// import starbattle from "../../images/starbattle.png"
// import dict from "../../images/vocabulary.gif"
import scan from "../../images/scan.png"
import asistant from "../../images/asistant.png"

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={scan} projectName="Scan Application"  />
        <ProjectBox projectPhoto={asistant} projectName="Asistant Application"  />
      
      </div>

    </div>
    
  )
}

export default Projects


import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";
import './Projectbox.scss' ;


const  Projectbox = ({projectPhoto, projectKey, projectName}) => {
  
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            

              {/* <button className='projectbtn'><FaGithub/> Github</button> */}
            

            
            
        </div>
    </div>
  )
}

export default  Projectbox

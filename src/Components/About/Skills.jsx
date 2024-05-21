import React from 'react'; 
import "./Skills.scss" ;
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact,  FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHtml5, FaJava } from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel, SiCss3, SiPython, SiArduino  } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Html: <FaHtml5/>,
        css: <SiCss3/>,
        python: <SiPython/>,
        arduino: <SiArduino/>, 
        Java :<FaJava />,
        
        


    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills

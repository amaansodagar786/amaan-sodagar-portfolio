import React from 'react';
import Skills from '../About/Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"

import "./About.scss";
import webani2 from '../Lottie/animation.json'

  
const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hi, I'm Amaan Sodagar. and I am from Vadodara, Gujarat , India. <br /> <br />
            Recently I've Completed my B-Tech in CSE From parul University , Vadodara with 7.98 CGPA.
            <br /><br />
            I've Completed my Diploma in Computer Engineering from Shree KJ Polytechnic , Bharuch with 7.98 CGPA.
            <br /> <br />
            
             I'm a FULL stack web developer and currently doing an internship in V-Ex Tech Solution as Full Stack developer.
            
          </p>
        </div>

        <div>
          <div className='animation'>
          <Tilt>
                    <Lottie  animationData={webani2} />
                </Tilt>
          </div>
        </div>

      </div>
      <h1 className='SkillsHeading'>Experience</h1>
      <div className='experience'>


        <div className='experience-box'>

          <p className='exp-text firsttext'>Full Stack Developer</p>
          <p className='exp-text'>V-Ex Tech Solution</p>
          <p className='exp-text'>Jan - Apr (2024)</p>
          <p className='exp-text'>(Works on E-Commerce )</p>
          


    
        </div>

      </div>
      <h1 className='SkillsHeading'>Professional Skills</h1>
      <div className='skills'>

        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='MongoDb' />
        <Skills skill='Express' />
        
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Java' />
        
        <Skills skill='Html' />
        <Skills skill='css' />
      </div>

      <h1 className='SkillsHeading'>Education</h1>
      {/* <div className="maineducation"> */}
        <div className='education'>
          <div className='education-box'>
            <p className='edu-text firsttext'>Parul University</p>
            <p className='edu-text'>B-tech Computer Science</p>
            <p className='edu-text'>CGPA - 7.61 </p>
            <p className='edu-text'>2021 - 2024</p>
          </div>
        

        
          <div className='education-box'>
            <p className='edu-text firsttext'>Shree KJ Polytechnic</p>
            <p className='edu-text'>Diploma in Computer Engineering</p>
            <p className='edu-text'>CGPA - 7.98</p>
            <p className='edu-text'>2018 - 2021</p>
          </div>
        

       
          <div className='education-box'>
            <p className='edu-text firsttext'>New Sunrise School</p>
            <p className='edu-text'>GSEB</p>
            <p className='edu-text'>Passing Year - 2018</p>
            <p className='edu-text'>SSC - 69%</p>
          </div>
        </div>
        
      </>
      )
}

      export default About

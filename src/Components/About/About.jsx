import React from 'react';
import Skills from '../About/Skills';
// import Tilt from 'react-parallax-tilt';
// import Lottie from "lottie-react"
// import Coder from '../LottieFiles/coder.json';
// import Coder from '../LottieFiles/coder.json';
import "./About.scss";

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Naman Jain</b> and I am from Chennai, India.
            I'm a <b>FULL stack web developer</b> and a school student pursuing <b>in grade 12 </b>. <br /><br />
            I am interested in learning <b>new languages</b> which can help me with my projects and increase my skills.
            I love to create projects with beautiful designs, you can check out some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, Links in the <b>Footer</b> section.<br />
            Apart from coding I love to play videogames, and travle.
          </p>
        </div>

        <div>
          <div className='illustration'>
            Hello
          </div>
        </div>

      </div>
      <h1 className='SkillsHeading'>Experience</h1>
      <div className='experience'>


        <div className='experience-box'>

          <p className='exp-text firsttext'>Full Stack Developer</p>
          <p className='exp-text'>V-Ex Tech Solution</p>
          <p className='exp-text'>Jan - Apr (2024)</p>
          <span>
            As a Full Stack Web Developer, I played a key
            role in building an e-commerce website. My
            responsibilities included creating the frontend
            interface, developing backend functionalities,
            and designing an intuitive admin panel for
            streamlined management. this experience
            enhanced my proficiency in web development
            across various technologies.
          </span>



        </div>

      </div>
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='python' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='arduino' />
        <Skills skill='Npm' />
        <Skills skill='Html' />
        <Skills skill='css' />
      </div>
    </>
  )
}

export default About

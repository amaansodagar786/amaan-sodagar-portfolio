import React from 'react';
import Skills from '../About/Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import "./About.scss";
import webani2 from '../Lottie/animation.json';

const About = () => {
  return (
    <div className='about-wrapper'>

      {/* Blobs */}
      <div className="blob blob--1" />
      <div className="blob blob--2" />

      {/* ── HERO ── */}
      <section className='about-hero'>
        <div className='about-text'>
          <span className='about-overline'>Who I Am</span>
          <h1 className='about-heading'>
            Get to <span className='stroke-text'>Know</span> Me!
          </h1>
          <p className='about-bio'>
            Hi, I'm <strong>Mohammad Amaan Sodagar</strong>, a passionate Full Stack Developer
            based in Vadodara, Gujarat, India. <br /><br />
            I completed my B.Tech in Computer Science from Parul University (CGPA 7.61),
            and my Diploma in Computer Engineering from KJ Polytechnic, Bharuch (CGPA 7.98).
            I completed my schooling under GSEB from New Sunrise School, Vadodara. <br /><br />
            I have practical experience in full stack development using the MERN stack.
            I began my journey with an internship at V-Ex Tech Solutions, and currently work at
            <strong> Techorses</strong> as a Full Stack Developer, building efficient, scalable,
            and user-friendly web applications. <br /><br />
            My core skills include React, Node.js, Express.js, MongoDB, JavaScript, AWS, MySQL,
            along with C and C++.
          </p>
        </div>
        <div className='about-lottie'>
          <Tilt>
            <Lottie animationData={webani2} />
          </Tilt>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className='about-section'>
        <div className='section-header'>
          <span className='about-overline'>Where I've Worked</span>
          <h2 className='section-heading'>Experience</h2>
        </div>
        <div className='experience-grid'>
          <div className='info-card'>
            <span className='info-card__role'>Full Stack Developer (Intern)</span>
            <span className='info-card__company'>V-Ex Tech Solution</span>
            <span className='info-card__period'>Jan - Apr 2024</span>
            <span className='info-card__note'>Works on E-Commerce</span>
          </div>
          <div className='info-card'>
            <span className='info-card__role'>Full Stack Developer</span>
            <span className='info-card__company'>Techorses</span>
            <span className='info-card__period'>Feb 2025 - Present</span>
            <span className='info-card__note'>MERN Stack Dev</span>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className='about-section'>
        <div className='section-header'>
          <span className='about-overline'>Tech Stack</span>
          <h2 className='section-heading'>Professional Skills</h2>
        </div>
        <div className='skills-grid'>
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
      </section>

      {/* ── EDUCATION ── */}
      <section className='about-section'>
        <div className='section-header'>
          <span className='about-overline'>Academic Background</span>
          <h2 className='section-heading'>Education</h2>
        </div>
        <div className='education-grid'>
          <div className='info-card'>
            <span className='info-card__role'>Parul University</span>
            <span className='info-card__company'>B.Tech — Computer Science</span>
            <span className='info-card__period'>2021 - 2024</span>
            <span className='info-card__note'>CGPA 7.61</span>
          </div>
          <div className='info-card'>
            <span className='info-card__role'>Shree KJ Polytechnic</span>
            <span className='info-card__company'>Diploma - Computer Engineering</span>
            <span className='info-card__period'>2018 - 2021</span>
            <span className='info-card__note'>CGPA 7.98</span>
          </div>
          <div className='info-card'>
            <span className='info-card__role'>New Sunrise School</span>
            <span className='info-card__company'>GSEB - SSC</span>
            <span className='info-card__period'>Passing Year 2018</span>
            <span className='info-card__note'>69%</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
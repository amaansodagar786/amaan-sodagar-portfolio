import React from 'react'
import "./Home.scss";
import Tilt from 'react-parallax-tilt';
import Typed from '../TypeEffect/Type';
import mypic from '../../images/home.jpeg'
import webani from '../Lottie/webdev.json'
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context/Context';

const Home = () => {

    const Navigate = useNavigate();
    const { hello } = useContext(Context);

    const contactnavigate = () => Navigate('/contact');

    const logResumeDownload = async () => {
        try {
            await fetch("https://backnd-portfolio.onrender.com/log-resume-download", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userAgent: navigator.userAgent,
                    timestamp: new Date().toISOString()
                }),
            });
        } catch (error) {
            console.error("Error logging resume download:", error);
        }
    };

    const handleDownload = () => {
        logResumeDownload();
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/Resume.pdf';
        link.download = "Resume - Amaan Sodagar";
        link.click();
    };

    return (
        <div className='home-wrapper'>

            {/* Blobs */}
            <div className="blob blob--1" />
            <div className="blob blob--2" />

            {/* ── HERO ── */}
            <section className='home-hero'>
                <div className='home-text'>
                    <span className='home-overline'>Welcome to my portfolio</span>
                    <h1 className='home-heading'>
                        Hello! I'm <span className='stroke-text'>Amaan Sodagar</span>
                    </h1>
                    <div className='home-typed'>
                        <Typed />
                    </div>
                    <div className='home-btns'>
                        <button className='home-btn home-btn--primary' onClick={contactnavigate}>
                            Contact Me
                        </button>
                        <button className='home-btn home-btn--outline' onClick={handleDownload}>
                            Resume ↓
                        </button>
                    </div>
                </div>

                <div className='home-illustration'>
                    <div className='home-img-ring'>
                        <img src={mypic} alt="Amaan Sodagar" />
                    </div>
                </div>
            </section>

            {/* ── BRIEF ABOUT ── */}
            <section className='home-about'>
                <div className='home-about__text'>
                    <span className='home-overline'>A little about me</span>
                    <h2 className='home-about__heading'>
                        Brief <span className='stroke-text'>Introduction</span>
                    </h2>
                    <p className='home-about__bio'>
                        Hi, I'm <strong>Mohammad Amaan Sodagar</strong>, a Full Stack Web Developer
                        from Vadodara, Gujarat, India. <br /><br />
                        Currently working as a Full Stack Developer at <strong>Techorses</strong>, where I build
                        scalable backend systems and modern, responsive web applications using the MERN stack. <br /><br />
                        I also have hands-on industry experience from my internship at <strong>V-Ex Tech Solutions</strong>,
                        where I worked on real-world projects and improved my development and problem-solving skills.
                    </p>
                </div>
                <Tilt className='home-about__lottie'>
                    <Lottie animationData={webani} />
                </Tilt>
            </section>

        </div>
    );
};

export default Home;
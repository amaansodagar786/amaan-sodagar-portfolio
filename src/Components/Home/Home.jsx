import React from 'react'
import "./Home.scss";
// import Avatar from '../../images/Avatar.png'
// import { IoLogoGameControllerB } from "react-icons/io";
import Tilt from 'react-parallax-tilt';
import Typed from '../TypeEffect/Type';
// import myimg from '../../images/my image.jpg'
// import mypic from '../../images/mypic.jpg' 
import mypic from '../../images/home.jpeg'
import webani from '../Lottie/webdev.json'
import Lottie from 'lottie-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context/Context';




const Home = () => {

    const Navigate = useNavigate();
    const location = useLocation();
    const { hello } = useContext(Context);



    const contactnavigate = () => {
        Navigate('/contact');
    };





    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/Resume.pdf';
        link.download = "Resume - Amaan Sodagar";
        link.click();
    };
    return (
        <div >
            <div className='HomePage'>

                <div className='HomeText'>
                    <h1>Hello!</h1>
                    <h1>I'M <b>AMAAN SODAGAR</b></h1>
                    <Typed />
                    <div className="btns">
                        <button type="button" onClick={contactnavigate}>Contact Me</button>
                        <button type="button" onClick={handleDownload}>Resume</button>



                        {/* <button type="button">Resume</button> */}
                    </div>
                </div>

                <div className='illustration'>

                    <img src={mypic} alt="" />

                </div>

            </div>


            <div className='AboutPage'>
                <div className='AboutText'>
                    <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
                    <p>
                        Hi, I'm Mohammad Amaan Sodagar, a Full Stack Web Developer from Vadodara, Gujarat, India. <br /><br />

                        Currently, I am working as a Full Stack Developer at Techorses, where I build
                        scalable backend systems and modern, responsive web applications using the MERN stack. <br /><br />

                        I also have hands-on industry experience from my internship at V-Ex Tech Solutions,
                        where I worked on real-world projects and improved my development and problem-solving skills.
                    </p>
                </div>
                <Tilt className='Avatar'>
                    <Lottie animationData={webani} />
                </Tilt>
                {/* <Tilt>
                    <img className='Avatar' src={Avatar} alt="" />
                </Tilt> */}
            </div>
        </div>
    )
}

export default Home

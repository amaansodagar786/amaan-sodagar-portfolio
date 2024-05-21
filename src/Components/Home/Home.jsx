import React  from 'react'
import "./Home.scss";
// import Avatar from '../../images/Avatar.png'
// import { IoLogoGameControllerB } from "react-icons/io";
import Tilt from 'react-parallax-tilt';
import Typed from '../TypeEffect/Type';
// import myimg from '../../images/my image.jpg'
import mypic from '../../images/mypic.jpg'
import webani from '../Lottie/webdev.json'
import Lottie from 'lottie-react';
import { useNavigate , useLocation} from 'react-router-dom';




const Home = () => {

    const Navigate = useNavigate();
    const location = useLocation();



    const contactnavigate = () => {
        Navigate('/contact');
    };

    // useEffect(() => {
    //     if (location.pathname === '/') {
    //         setActivestate('home');
    //     } else {
    //         setActivestate('');
    //     }
    // }, [location]);



    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/Resume.pdf';
        link.download = "Amaan's Resume";
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
                    <Tilt>
                        <img src={mypic} alt="" />
                    </Tilt>
                </div>

            </div>


            <div className='AboutPage'>
                <div className='AboutText'>
                    <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
                    <p>
                        Hi, I'm Amaan Sodagar. and I am from Vadodara, Gujarat , India. <br /> <br />
                        Recently I've Completed my B-Tech in CSE From parul University , Vadodara with 7.98 CGPA.
                        <br /><br />
                        I've Completed my Diploma in Computer Engineering from Shree KJ Polytechnic , Bharuch with 7.98 CGPA.
                        <br /> <br />

                        I'm a FULL stack web developer and currently doing an internship in V-Ex Tech Solution as Full Stack developer.

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

import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
// import { BsPerson, BsCodeSlash } from "react-icons/bs";
// import { CgFileDocument } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activestate, setActivestate] = useState('');
    const Navigate = useNavigate();



    

    const showMenu = () => {
        setMenuOpen(!menuOpen);
        const ham = document.getElementsByClassName("NavbarLinks")[0];
        ham.classList.toggle("showNavbar");
    }

    const hideMenu = (id) => {
        setMenuOpen(false);
        const ham = document.getElementsByClassName("NavbarLinks")[0];
        ham.classList.remove("showNavbar");
        setActivestate(id);
        
    }
    const navigatetohome = (id) => {
        Navigate('/')
        setActivestate(id);
        
    }

    return (
        // <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
        <nav className='Navbar'>
            <h1
                // onClick={() => Navigate('/')}
                onClick={() => navigatetohome('home')}

                className='Logo'
            >
                AMAAN
            </h1>
            <div className='Hamburger' onClick={showMenu}>
                {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
            </div>

            <ul className='NavbarLinks'>
                <li id='home' className={activestate === 'home' ? 'active' : ''} onClick={() => hideMenu('home')}>
                    <Link to="/">Home</Link>
                </li>
                <li id='about' className={activestate === 'about' ? 'active' : ''} onClick={() => hideMenu('about')}>
                    <Link to="/about"> About</Link>
                </li>
                <li id='project' className={activestate === 'project' ? 'active' : ''} onClick={() => hideMenu('project')}>
                    <Link to="/project"> Project</Link>
                </li>
                <li id='contact' className={activestate === 'contact' ? 'active' : ''} onClick={() => hideMenu('contact')}>
                    <Link to="/contact"> Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

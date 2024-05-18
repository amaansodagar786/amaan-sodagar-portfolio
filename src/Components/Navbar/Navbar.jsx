import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const [navbarblur, setnavbarblur] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const Navigate = useNavigate();



    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY >= 20) {
                setnavbarblur(true);
            } else {
                setnavbarblur(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const showMenu = () => {
        setMenuOpen(!menuOpen);
        const ham = document.getElementsByClassName("NavbarLinks")[0];
        ham.classList.toggle("showNavbar");
    }

    const hideMenu = () => {
        setMenuOpen(false);
        const ham = document.getElementsByClassName("NavbarLinks")[0];
        ham.classList.remove("showNavbar");
    }

    return (
        <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
<h1 
      onClick={() => Navigate('/')} 
      className='Logo'
    >
      AMAAN
    </h1>
            <div className='Hamburger' onClick={showMenu}>
                {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
            </div>

            <ul className='NavbarLinks'>
                <li onClick={hideMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
                <li onClick={hideMenu}><Link to="/about"><BsPerson /> About</Link></li>
                <li onClick={hideMenu}><Link to="/project"><BsCodeSlash /> Project</Link></li>
                <li onClick={hideMenu}><Link to="/resume"><CgFileDocument /> Resume</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;

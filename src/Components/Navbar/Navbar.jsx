import React, { useState } from 'react';
import "./Navbar.scss";
import { Link, useNavigate } from 'react-router-dom';
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
        Navigate('/');
        setActivestate(id);
    }

    return (
        <nav className='Navbar'>
            <h1 onClick={() => navigatetohome('home')} className='Logo'>
                AMAAN
            </h1>

            <div className='Hamburger' onClick={showMenu}>
                {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
            </div>

            <ul className='NavbarLinks'>
                {[
                    { id: 'home', to: '/', label: 'Home' },
                    { id: 'about', to: '/about', label: 'About' },
                    { id: 'project', to: '/project', label: 'Project' },
                    { id: 'contact', to: '/contact', label: 'Contact' },
                ].map(({ id, to, label }) => (
                    <li
                        key={id}
                        id={id}
                        className={activestate === id ? 'active' : ''}
                        onClick={() => hideMenu(id)}
                    >
                        <Link to={to}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
import React from "react";
import '../styles/Nav.css';
import logo from '../assets/logo_example.jpeg';
import {Link} from 'react-scroll';

const Nav = () => {
    return(
        <>
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo"/>
                <div className="menu">
                    <Link className="menuItem">Home</Link>
                    <Link className="menuItem">About</Link>
                    <Link className="menuItem">Projects</Link>
                    <Link className="menuItem">Contact</Link>
                </div>
                <button className="menuButton">Resume</button>
            </nav>
        </>
    )
}

export default Nav;
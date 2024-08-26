import React from "react";
import '../styles/Hero.css';
import { Link } from "react-scroll";
import avatar from '../assets/avatar_placeholder.PNG';

const Hero = () => {
    return(
        <>
        <section className="intro">
            <div className="heroContent">
                <span className="hello">Hello,</span>
                <span className="heroText">I'm <span className="heroName">Anzhelika</span><br/> Software Developer</span>
                <p className="heroDesc">Specializing in C#, Unity, and web technologies. Passionate about creating<br /> interactive web solutions and immersive Unity experiences.</p>
                <Link><button className="heroButton">Hire me</button></Link>
            </div>
            <div className="heroImage">
                <img src={avatar} alt="Profile" className="heroBg" />
            </div>
        </section>
        </>
    )
}

export default Hero;
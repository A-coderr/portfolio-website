import React from "react";
import '../styles/Hero.css';
import { Link } from "react-scroll";
import avatar from '../assets/avatar_placeholder.PNG';
import { LinearGradient } from 'react-text-gradients'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/facebook'

const Hero = () => {
    return(
        <>
        <section className="intro">
            <div className="heroContent">
                <span className="hello">Hello,</span>
                <span className="heroText">I'm <span className="heroName"><LinearGradient gradient={['to left', '#ff9720 ,#fc0865']}>
                Anzhelika</LinearGradient></span><br/> Software Developer</span>
                <p className="heroDesc">Specializing in C#, Unity, and web technologies. Passionate about creating<br /> interactive web solutions and immersive Unity experiences.</p>
                <div className="heroSocial">
                    <SocialIcon className="heroIcon" url="https://www.instagram.com/a_akcio/?hl=en" />
                    <SocialIcon className="heroIcon" url="https://github.com/A-coderr" />
                    <SocialIcon className="heroIcon" url="https://www.facebook.com/profile.php?id=100011369881132" />
                    <SocialIcon className="heroIcon" url="http://www.linkedin.com/in/anzhelika-kostyuk-a2b388194" />
                </div>
            </div>
            <div className="heroImage">
                <img src={avatar} alt="Profile" className="heroBg" />
            </div>
        </section>
        </>
    )
}

export default Hero;
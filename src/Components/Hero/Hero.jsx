import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/profile_img.png'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt='' />
            <h1><span>Howdy! I'm João Vaz,</span> software engineer based in Portugal.</h1>
            <p>I am a software engineer and game developer with multiple years of experience.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero
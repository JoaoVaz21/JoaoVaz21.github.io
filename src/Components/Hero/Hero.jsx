import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/profile_img.png'
import cv from '../../assets/cv.pdf'
const Hero = () => {
    const openInNewTab = (url) => {
        window.open(url, "_blank");
    };
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt='' />
            <h1><span>Howdy! I'm João Vaz,</span> software engineer based in Portugal.</h1>
          
        </div>
    )
}

export default Hero
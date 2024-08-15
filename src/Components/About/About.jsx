import React from 'react'
import './About.css'
import about_img from "../../assets/about_img.png"
const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I've started my journey in the industry on a 3d visualization and measurement software company where I've gained deep knowledge on C#
                            as well as knowledge in meshes.</p>
                        <p>
                            But I'm also a huge nerd and gamer so I've always wanted to learn more about games and do some of my own. For that reason not only did I participate
                            in multiple game jams and did some personal projects, but also entered the gaming industry so I could do what I love.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className='skills-tittle'>Skills</h2>

            <div className="about-skills">
                <div className="about-skill">
                    <p>C#</p>
                    <p>Typescript</p>
                    <p>C++</p>
                    <p>Unity</p>
                    <p>pixi.js</p>
                    <p>Unreal</p>
                </div>
            </div>


        </div>
    )
}

export default About
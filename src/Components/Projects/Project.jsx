import React, { useState } from 'react'
import './Projects.css'
import ProjectModal from './ProjectModal';


const Project = ({ projectData, index }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div >
            <div className='project' onClick={() => { setIsOpen(true) }}>
                <img src={projectData.p_image} key={index} ></img>
                <h2>{projectData.p_name}</h2>
                <p>{projectData.p_small_description}</p>
            </div>
            {isOpen && <ProjectModal setIsOpen={setIsOpen}  projectData = {projectData} />}
        </div>
    )
}

export default Project
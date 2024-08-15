import React from 'react'
import './Projects.css'
import professional_projects_data from '../../assets/professional_projects_data'
import personal_projects_data from '../../assets/personal_projects_data'
import Project from './Project'

const Projects = () => {
    return (
        <div id='projects' className="projects">
            <div className="projects-title">
                <h1>Projects</h1>
                <p>Here you can find some of my projects, both professional and personal.</p>
            </div>
            <h2>Professional work</h2>
            <div className='professional-projects-container'>
                {professional_projects_data.map((project, index) => {
                    return <Project projectData={project} index={index} key={index} />
                })}
            </div>

            <h2>Personal work</h2>
            <div className='personal-projects-container'>
                {personal_projects_data.map((project, index) => {
                    return <Project projectData={project} index={index} key={index} />
                })}
            </div>
        </div>
    )
}
export default Projects
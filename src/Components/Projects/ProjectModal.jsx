import React from "react";
import "./ProjectModal.css";
import Carousel from "../Carousel/Carousel";


function ProjectModal({ setIsOpen, projectData }) {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <>
            <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <h5 className='heading'>{projectData.p_name}</h5>
                    </div>
                    {projectData.p_images && <Carousel className= 'carousel' media = {projectData.p_images}/>}
                    <div className='modalContent'>
                    {projectData.p_big_description.map((paragraph, index) => {
                    return <p key={index} >{paragraph}</p>
                })}
                    </div>
                    <div className='modalActions'>
                        <div className='actionsContainer'>
                            {projectData.p_demo_link != null && <button className='playNowBtn' onClick={() => openInNewTab(projectData.p_demo_link)}>
                                Play Now
                            </button>}
                            {projectData.p_source_code != null && <button
                                className='codeBtn'
                                onClick={() => openInNewTab(projectData.p_source_code)}>
                                Code
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectModal;
// src/components/Projects.js
import React from 'react';

const Projects = () => {
    const projectList = [
        { name: 'HSBC Capital Management and Stress Testing Manager', description: '2023 - Current' },
        { name: 'BOCHK Credit Risk Modelling Manager', description: '2021 - 2023' },
        { name: 'CCBA Credit Risk Manger', description: '2018 - 2021' },
    ];

    return (
        <section id="projects">
            <h2>My Work Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {projectList.map((project, index) => (
                    <div key={index} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
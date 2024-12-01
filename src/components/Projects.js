// src/components/Projects.js
import React from 'react';

const Projects = () => {
    const projectList = [
        { name: 'Project 1', description: 'Description of Project 1' },
        { name: 'Project 2', description: 'Description of Project 2' },
        { name: 'Project 3', description: 'Description of Project 3' },
    ];

    return (
        <section id="projects">
            <h2>My Projects</h2>
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
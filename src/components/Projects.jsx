import React from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <>
        <section className="projects">
            <span className="projectsTitle">Projects</span>
            <ProjectCard/>
        </section>     
    </>
  )
}

export default Projects
import React from "react";
import "../styles/ProjectCard.css";
import placeholder from "../assets/karate_website_thumbnail.webp";
import projects from "../data.json";

function ProjectCard() {
  return (
    <>
      <div className="projectCardSection">
        {projects.map((project) => (
          <div className="projectCard">
            <img src={project.thumbnail} alt="Thumbnail" className="CardImage" />
            <span className="projectCardTitle">{project.name}</span>
            <span className="projectCardDesc">{project.desc}</span>
            <div className="projectCardTech">
              {project.tech.map((item) => {
                return <span className="projectCardTechItem">{item.name}</span>;
              })}
            </div>
            <div className="projectCardButtonContainer">
              <button className="projectCardButtonPreview">
                {project.previewLink}
              </button>
              <button className="projectCardButtonPreview">
                {project.sourceLink}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectCard;

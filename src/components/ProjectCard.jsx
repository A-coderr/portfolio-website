import React from 'react';
import '../styles/ProjectCard.css';
import placeholder from '../assets/karate_website_thumbnail.webp';

const projects = [
    {
        thumbnail: 'Image Link',
        name: 'Karate Website', 
        desc: 'lorem ipsum', 
        tech: [
            {
                name: 'HTML'
            },
            {
                name: 'CSS'
            }
        ],
        previewLink: 'preview link',
        sourceLink: 'source link'
  },
  {
    thumbnail: 'Image Link',
    name: 'StarWars Website', 
    desc: 'lorem ipsum', 
    tech: [
        {
            name: 'HTML'
        },
        {
            name: 'CSS'
        }
    ],
    previewLink: 'preview link',
    sourceLink: 'source link'
}
];

function ProjectCard() {

    /* const handleClick = async () => {
        openLink();
    };

    const openLink = async () => {
        window.open(props.url, "_blank");
    }; */

  return (
    <>
        <div className="projectCardSection">
            <div className="projectCard">
                <img src={placeholder} alt="Thumbnail" className="CardImage" />
                    <span className="projectCardTitle">Karate Website</span>
                    <span className="projectCardDesc">Software Developer | Passionate about Building Scalable Solutions | C# & Unity Specialist | Web Technologies Enthusiast</span>
                    <div className="projectCardTech">
                        <span className="projectCardTechItem">HTML</span>
                        <span className="projectCardTechItem">CSS</span>
                    </div>
                    <div className="projectCardButtonContainer">
                        <button className="projectCardButtonPreview">Preview</button>
                        <button className="projectCardButtonPreview">Source</button>
                    </div> 
            </div> 
            <div className="projectCard">
            <img src={placeholder} alt="Thumbnail" className="CardImage" />
                    <span className="projectCardTitle">Karate Website</span>
                    <span className="projectCardDesc">Software Developer | Passionate about Building Scalable Solutions | C# & Unity Specialist | Web Technologies Enthusiast</span>
                    <div className="projectCardTech">
                        <span className="projectCardTechItem">HTML</span>
                        <span className="projectCardTechItem">CSS</span>
                    </div>
                    <div className="projectCardButtonContainer">
                        <button className="projectCardButtonPreview">Preview</button>
                        <button className="projectCardButtonPreview">Source</button>
                    </div> 
            </div> 
            <div className="projectCard">
            <img src={placeholder} alt="Thumbnail" className="CardImage" />
                    <span className="projectCardTitle">Karate Website</span>
                    <span className="projectCardDesc">Software Developer | Passionate about Building Scalable Solutions | C# & Unity Specialist | Web Technologies Enthusiast</span>
                    <div className="projectCardTech">
                        <span className="projectCardTechItem">HTML</span>
                        <span className="projectCardTechItem">CSS</span>
                    </div>
                    <div className="projectCardButtonContainer">
                        <button className="projectCardButtonPreview">Preview</button>
                        <button className="projectCardButtonPreview">Source</button>
                    </div>                  
            </div> 
            <div className="projectCard">
            <img src={placeholder} alt="Thumbnail" className="CardImage" />
                    <span className="projectCardTitle">Karate Website</span>
                    <span className="projectCardDesc">Software Developer | Passionate about Building Scalable Solutions | C# & Unity Specialist | Web Technologies Enthusiast</span>
                    <div className="projectCardTech">
                        <span className="projectCardTechItem">HTML</span>
                        <span className="projectCardTechItem">CSS</span>
                    </div>
                    <div className="projectCardButtonContainer">
                        <button className="projectCardButtonPreview">Preview</button>
                        <button className="projectCardButtonPreview">Source</button>
                    </div> 
            </div>
            <div className="projectCard">
            <img src={placeholder} alt="Thumbnail" className="CardImage" />
                    <span className="projectCardTitle">Karate Website</span>
                    <span className="projectCardDesc">Software Developer | Passionate about Building Scalable Solutions | C# & Unity Specialist | Web Technologies Enthusiast</span>
                    <div className="projectCardTech">
                        <span className="projectCardTechItem">HTML</span>
                        <span className="projectCardTechItem">CSS</span>
                    </div>
                    <div className="projectCardButtonContainer">
                        <button className="projectCardButtonPreview">Preview</button>
                        <button className="projectCardButtonPreview">Source</button>
                    </div> 
            </div>
        </div>          
    </>
  )
}

export default ProjectCard
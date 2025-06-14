import React, { useState, useEffect } from "react"
import sanityClient from "../client.js"
import Project from './Project.js'
import Video from './Video.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Projects({passedDownone, poop}) {
    const [projectsData, setProjects] = useState(null)
    const [toggle,setToggle] = useState(true)
    useEffect(()=> {
        sanityClient
            .fetch(`*[_type == "project"]{
                title,
                link,
                bgcolor,
                year,
                anchor,
                category,
                order
            }`
    )
    .then((data)=>setProjects(data))
    .catch(console.error);
},[]);

function handleClick({onChange}) {
    setToggle(!toggle);
  }
    return (
        <div className="flex">
            <div className="container" style={{width:{}}}>
                <div onClick={handleClick} className="toggle">
                    {toggle ? (<FontAwesomeIcon icon="fa-solid fa-arrow-left" />):<FontAwesomeIcon icon="fa-solid fa-arrow-right" />}
                </div>
                    {toggle ? (
                    <div className="menu">
                        {projectsData && projectsData.filter(proj=>proj.category.toLowerCase().includes('reel')).sort((a, b) => (a.order > b.order ? 1 : -1)).map((project, index) =>( <Project key={index} title={project.title} anchor={project.anchor} year={project.year} background={poop}/>))}
                        <div className="sec">Ads // comerciales</div>
                            {projectsData && projectsData.filter(proj=>proj.category.toLowerCase().includes('ads')).sort((a, b) => (a.order > b.order ? 1 : -1)).map((project, index) =>( <Project key={index} title={project.title} anchor={project.anchor} year={project.year} background={poop}/>))}
                        <div className="sec">Music Videos // Videoclips</div>
                            {projectsData && projectsData.filter(proj=>proj.category.toLowerCase().includes('clips')).sort((a, b) => (a.order > b.order ? 1 : -1)).map((project, index) =>( <Project title={project.title} anchor={project.anchor} year={project.year} background={poop} />))}
                        <div className="sec">Short Films // Cortometrajes</div>
                            {projectsData && projectsData.filter(proj=>proj.category.toLowerCase().includes('film')).sort((a, b) => (a.order > b.order ? 1 : -1)).map((project, index) =>( <Project title={project.title} anchor={project.anchor} year={project.year}/>))}
                    </div>
                    ) : null}
                    <div>


                    </div>

            </div>

            <div className="content">
                <div className="option">
                    {projectsData && projectsData
                        .sort((a, b) => (a.order > b.order ? 1 : -1))
                        .map((project, index) =>( <Video  key={index} title={project.title} link={project.link} anchor={project.anchor} bgcolor={project.bgcolor}  passedDowntwo={passedDownone}/>))}
                </div>
            </div>


        </div>
    )
}
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

  console.log(poop+ "is the thing")
//   passedDownone()
    return (
        <div className="flex">
            <div class="container" style={{width:{}}}>
                <div onClick={handleClick} className="toggle">
                    {toggle ? (<FontAwesomeIcon icon="fa-solid fa-arrow-left" />):<FontAwesomeIcon icon="fa-solid fa-arrow-right" />}
                </div>
                    {toggle ? (
                    <div className="menu">
                        
                        Music Videos // Videoclips
                            {/* {projectsData && projectsData.map((project, index) =>( <Project title={project.title} anchor={project.anchor} year={project.year} category={project.category} />))} */}
                            {projectsData && projectsData.filter(proj=>proj.category.toLowerCase().includes('clips')).sort((a, b) => (a.order > b.order ? 1 : -1)).map((project, index) =>( <Project title={project.title} anchor={project.anchor} year={project.year} background={poop} />))}
                        Short Films // Cortometrajes
                            {projectsData && projectsData.filter(proj=>proj.category.toLowerCase().includes('film')).sort((a, b) => (a.order > b.order ? 1 : -1)).map((project, index) =>( <Project title={project.title} anchor={project.anchor} year={project.year}/>))}

                    </div>
                    ) : null}
                    <div>


                    </div>

                
            </div>

            <div className="content">
                <div className="option">
                    {projectsData && projectsData.map((project, index) =>( <Video title={project.title} link={project.link} anchor={project.anchor} bgcolor={project.bgcolor}  passedDowntwo={passedDownone}/>))}
                </div>
            </div>


        </div>
    )
}
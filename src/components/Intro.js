import React, { useState, useEffect } from "react"
import sanityClient from "../client.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Intro() {
    const [introducopt,setIntroducopt] = useState(null)
    const [introduc,setIntroduc] = useState(null)


    useEffect(()=> {
        sanityClient
            .fetch(`*[_type == "intro"]{
                content,
                lang
            }`
    )
    .then((data)=>{
        setIntroducopt(data)
        setIntroduc(data.filter(intro=>intro.lang.includes('ESP')))
        

    })
    .catch(console.error)
    
},[])

    function turnEnglish(){
     setIntroduc(introducopt.filter(intro=>intro.lang.includes('ENG')))
    }

   function turnSpanish(){
    setIntroduc(introducopt.filter(intro=>intro.lang.includes('ESP')))
    }

    return (
        <div id='intro' className="pad">
            <div id='name' >
                <img src="wordmark.svg" className="word"/>
                
            </div>


            <button onClick={turnSpanish} className = {(introduc && introduc[0].lang=="ESP") ? "selected" : 
            "unselected" }>
                ESP
            </button>

            <button onClick={turnEnglish} className = {(introduc && introduc[0].lang=="ENG") ? "selected" : 
            "unselected" }>
                ENG
            </button>


            <p id='description'>
            {introduc && introduc[0].content}
            </p>
        </div>


    )
}
// {projectsData && projectsData.filter(proj=>proj.category.toLowerCase().includes('film'))}

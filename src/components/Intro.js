import React, { useState, useEffect } from "react"
import sanityClient from "../client.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Intro() {
    const [introduc,setIntroduc] = useState(null)
    useEffect(()=> {
        sanityClient
            .fetch(`*[_type == "intro"]{
                content,
            }`
    )
    .then((data)=>setIntroduc(data))
    .catch(console.error);
},[]);
    return (
        <div id='intro' class="pad">
            <div id='name' >
                MO&copy;OSO
                
            </div>
            <p id='description'>
            {introduc && introduc[0].content}
            </p>
            

        </div>


    )
}
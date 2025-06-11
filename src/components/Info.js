import React, { useState, useEffect } from "react"
import sanityClient from "../client.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Info()
 {
    const [toggle,setToggle] = useState(false)

    function handleClick({onChange}) {
        setToggle(!toggle);
      }


    if (!toggle) {
        return (
            <div className="info glassy " style={{width: "20px", textAlign: "center"} } onClick={handleClick}>
                <FontAwesomeIcon icon="fa-solid fa-info" />
            </div>
        )
    }
    else {
        return (
            <div className="info moreglassy">
                <div onClick={handleClick} style={{textAlign: "right"} }><FontAwesomeIcon icon="fa-solid fa-info" /></div>
                <h1>Patricio Trejo-Lerdo</h1>
                <p>hi@mocoso.co</p>
                <img className="headshot" src="https://yt3.ggpht.com/ytc/AMLnZu8AbPT987abAUHY43z7m-nMqydLXaiOSNG0cUxUpw=s900-c-k-c0x00ffffff-no-rj"></img>
Guided through life by inspiration, my work is an ongoing search for new experiences and challenges. For the last 7 years, I've worked and learned from the audiovisual world, working freelance with small production companies as well as larger ad agencies. I'm currently living in San Francisco.
<br></br>
<br></br>
I’m currently living in San Francisco.
           </div>
        )
    }

}

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
            <div className="info glassy">
                <div onClick={handleClick} style={{textAlign: "right"} }><FontAwesomeIcon icon="fa-solid fa-info" /></div>
                <h1>email</h1>
                <h2>instagram</h2>
                <img className="headshot" src="https://yt3.ggpht.com/ytc/AMLnZu8AbPT987abAUHY43z7m-nMqydLXaiOSNG0cUxUpw=s900-c-k-c0x00ffffff-no-rj"></img>
Bio about our guy PAto            </div>
        )
    }

}

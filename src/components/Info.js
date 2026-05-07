import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Info() {
    const [toggle, setToggle] = useState(false)

    return (
        <div
            className={`info ${toggle ? "info--open moreglassy" : "glassy"}`}
            onClick={!toggle ? () => setToggle(true) : undefined}
        >
            <div
                className="info__icon"
                style={{ textAlign: toggle ? "right" : "center", cursor: "pointer" }}
                onClick={toggle ? () => setToggle(false) : undefined}
            >
                <FontAwesomeIcon icon="fa-solid fa-info" />
            </div>
            <div className="info__content">
                <h1>Patricio Trejo-Lerdo</h1>
                <p>hi@mocoso.co</p>
                <img className="headshot" src="https://yt3.ggpht.com/ytc/AMLnZu8AbPT987abAUHY43z7m-nMqydLXaiOSNG0cUxUpw=s900-c-k-c0x00ffffff-no-rj" alt="Patricio Trejo-Lerdo" />
                With 8+ years of film and commercial practice in productions of all sizes, I consider my work an ongoing search for new challenges and experiences.
                <br /><br />
                Bilingual — Based in the San Francisco Bay Area<br />
                Open to working anywhere.
            </div>
        </div>
    )
}

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
                Guided through life by inspiration, my work is an ongoing search for new experiences and challenges. For the last 7 years, I've worked and learned from the audiovisual world, working freelance with small production companies as well as larger ad agencies.
                <br /><br />
                I'm currently living in San Francisco.
            </div>
        </div>
    )
}

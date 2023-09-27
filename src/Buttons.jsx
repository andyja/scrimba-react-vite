import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Buttons() {
    return (
        <>
            <button>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                Email
            </button>
            <button>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                LinkedIn
            </button>
            <button>
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                Portfolio Site
            </button>
        </>
    )
}

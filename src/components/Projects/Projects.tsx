import React from "react"
import "./Projects.css"

import SimpleProject from "../SimpleProject/SimpleProject"
import RollDownButton from "../RollDownButton/RollDownButton"

const Projects: React.FC = () => {
    return (
        <div className="projects container">
            <div className="title d-flex justify-content-center">
                <h1>Projects I am proud of</h1>
            </div>
            <div className="projects-inner">
                <SimpleProject 
                    title="First project" 
                    tech1="technology 1"
                    tech2="technology 2"
                    tech3="technology 3"
                    description="Short description of project in two sentences"
                    imgPath="blank.png" />

                <SimpleProject 
                    title="Second project" 
                    tech1="technology 1"
                    tech2="technology 2"
                    tech3="technology 3"
                    description="Short description of project in two sentences"
                    imgPath="blank.png" />
            </div>
            <div className="col-12 d-flex justify-content-center">
                <RollDownButton />
            </div>
        </div>
    )
}

export default Projects;
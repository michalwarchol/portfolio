import React from 'react'
import "./SimpleProject.css"
import image from "../../static/img/blank.png"

interface Props {
    title: string,
    tech1: string,
    tech2: string,
    tech3: string,
    description: string,
    imgPath: string
}

const SimpleProject: React.FC<Props> = ({title, tech1, tech2, tech3, description, imgPath}) => {
    return (
        <div className="simpleProject d-flex flex-column flex-sm-row">
            <div className="img col-12 col-sm-4">
                <img src={image} alt="not found"/>
            </div>
            <div className="info col-12 col-sm-8 d-flex flex-column">
                <span className="project-title">{title}</span>
                <span className="tech"> -{tech1}</span>
                <span className="tech"> -{tech2}</span>
                <span className="tech"> -{tech3}</span>
                <span className="description">{description}</span>
            </div>
        </div>
    )
}

export default SimpleProject;
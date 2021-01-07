import React from 'react'
import "./About.css"

interface SkillProps {
    name: string,
    stack: Array<string>
}

const Skill: React.FC<SkillProps> = ({name, stack}) => {
    return(
        <div className={name.toLowerCase()+"col-12 col-sm-4"}>
            <h3>{name}</h3>
            <ul>
                {stack.map(elem=><li>{elem}</li>)}
            </ul>
        </div>
    )
}

const About: React.FC = () => {
    return (
        <div className="about container">
            <div className="title d-flex justify-content-center">
                <h1>Let's get to know each other!</h1>
            </div>
            <div className="about-inner">
                <div className="about-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis faucibus rutrum felis, ut sollicitudin lorem rutrum ac. 
                Etiam blandit, enim eget laoreet efficitur, felis libero congue nulla, quis blandit neque nulla ut nulla. 
                Curabitur pretium iaculis magna, sed faucibus sapien. 
                Morbi in justo pretium, tempor arcu ut, dictum ligula.
                </div>
            </div>
            <div className="skills d-flex flex-column flex-sm-row">
                <Skill name="Frontend" stack={["JavaScript", "TypeScript", "React", "CSS/LESS/SASS", "Bootstrap"]} />
                <Skill name="Backend" stack={["NodeJS", "Express.js", "Java/Spring Boot", "SQL"]} />
                <Skill name="Databases" stack={["MongoDB", "PostgreSQL"]} />
            </div>
        </div>
    )
}

export default About;
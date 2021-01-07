import React from 'react'
import Banner from "../Banner/Banner"
import Projects from "../Projects/Projects"

const Main:React.FC = () => {
    return (
        <div className="main">
            <Banner />
            <Projects />
        </div>
    )
}

export default Main;
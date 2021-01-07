import React from 'react'
import Banner from "../Banner/Banner"
import Projects from "../Projects/Projects"
import About from "../About/About"

const Main:React.FC = () => {
    return (
        <div className="main">
            <Banner />
            <Projects />
            <About />
        </div>
    )
}

export default Main;
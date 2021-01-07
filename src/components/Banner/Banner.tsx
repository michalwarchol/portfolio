import React from "react"
import "./Banner.css"

const Banner: React.FC = () => {
    return (
        <div className="banner d-flex align-items-stretch">
            <div className="banner-inner container d-flex flex-column flex-md-row">
                <div className="leftside-title col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <h1>Software</h1>
                    <h3>made with passion</h3>
                </div>
                <div className="rightside-title col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-md-end">
                    <h1>Michał Warchoł</h1>
                    <h3>Frontend Development</h3>
                    <h3>Backend Development</h3>
                    <h3>Databases</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner;
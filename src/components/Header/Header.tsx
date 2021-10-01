import React from 'react'
import GlassPanel from '../GlassPanel/GlassPanel';
import styles from "./Header.module.scss";
import { BsFillGearFill, BsWrench } from "react-icons/bs";
import {GoPencil} from "react-icons/go"

const Header:React.FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.backgroundText}>
                <h1>
                    Great code from a great dev
                </h1>
                <h2>
                    Michał Warchoł - fullstack developer
                </h2>
            </div>
            <div className={styles.panels}>
            <GlassPanel animationDelay={"0.5s"} MyIcon={BsFillGearFill}>
                <h1>
                    Projects
                </h1>
            </GlassPanel>
            <GlassPanel animationDelay={"0.7s"} MyIcon={BsWrench}>
                <h1>
                    TechStack
                </h1>
            </GlassPanel>
            <GlassPanel animationDelay={"0.9s"} MyIcon={GoPencil}>
                <h1>
                    About Me
                </h1>
            </GlassPanel>
            </div>
        </header>
    )
}
export default Header;
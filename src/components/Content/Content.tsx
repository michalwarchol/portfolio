import React from 'react'
import GlassPanel from '../GlassPanel/GlassPanel';
import styles from "./Content.module.scss"
import {ImFacebook} from "react-icons/im"
import {BsFillGearFill} from 'react-icons/bs'
import EmptyGlass from '../EmptyGlass/EmptyGlass';

const Content:React.FC = () => {
    return(
        <div className={styles.content}>
            <div className={styles.blueCircle}></div>
            <div className={styles.panels}>
                <GlassPanel animationDelay={"0.5s"} MyIcon={ImFacebook}>
                    <h1>
                        Clonebook
                    </h1>
                </GlassPanel>
                <GlassPanel animationDelay={"0.7s"} MyIcon={BsFillGearFill}>
                    <h1>
                        #
                    </h1>
                </GlassPanel>
            </div>
            <EmptyGlass width={200} height={200} x={20} y={30}/>
            <EmptyGlass width={400} height={200} x={60} y={20} />
            <EmptyGlass width={450} height={150} x={30} y={5} text="My projects"/>
            <EmptyGlass width={450} height={180} x={55} y={55} />
            <EmptyGlass width={250} height={180} x={25} y={75} />
            <EmptyGlass width={250} height={300} x={40} y={65} />
            <EmptyGlass width={300} height={300} x={35} y={25} />
        </div>
    )
}
export default Content;
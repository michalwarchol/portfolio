import React, { useEffect, useState } from 'react'
import styles from "./EmptyGlass.module.scss";

interface Props {
    width: number;
    height: number;
    x: number;
    y: number;
    text?: string; 
}

const EmptyGlass:React.FC<Props> = ({width, height, x, y, text}) => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(()=>{
        setWindowWidth(window.innerWidth)
        window.addEventListener("resize", ()=>{
            setWindowWidth(window.innerWidth);
        })
    }, [])
    let divider = 1;
    let positionDivider = 1;

    if(windowWidth<1000){
        divider=2;
        if(x<30){
            positionDivider = 1.5;
        }else if(x>30 && x< 60){
            positionDivider=1
        }
        else{
            positionDivider=0.9;
        }
    }

    

    return(
        <div 
        className={styles.glass}
        style={{width: width/divider,
         height: height/divider, 
         top: y+"%", 
         left: Math.floor(x/positionDivider)+"%"}}>
             {text && 
                <h1>
                    {text}
                </h1>
             }
        </div>
    )
}
export default EmptyGlass;
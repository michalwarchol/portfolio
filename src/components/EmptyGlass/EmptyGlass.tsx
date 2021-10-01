import React from 'react'
import styles from "./EmptyGlass.module.scss";

interface Props {
    width?: number;
    height?: number;
    x?: string;
    y?: string;
}

const EmptyGlass:React.FC<Props> = ({width, height, x, y}) => {
    return(
        <div 
        className={styles.glass}
        style={{width, height, top: y, left: x}}>

        </div>
    )
}
export default EmptyGlass;
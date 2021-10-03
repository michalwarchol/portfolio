import React from 'react'
import styles from "./GlassHeader.module.scss";

const GlassHeader:React.FC = ({children}) => {
    return(
        <div className={styles.glassHeader}>
            {children}
        </div>
    )
}
export default GlassHeader;
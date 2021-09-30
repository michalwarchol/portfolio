import React from 'react'
import styles from "./Header.module.scss";

const Header:React.FC = () => {
    return(
        <header className={styles.header}>
            Hello World from header!
        </header>
    )
}
export default Header;
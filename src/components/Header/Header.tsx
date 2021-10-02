import React from 'react'
import styles from "./Header.module.scss";

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
            <div className={styles.blueCircle}></div>
        </header>
    )
}
export default Header;
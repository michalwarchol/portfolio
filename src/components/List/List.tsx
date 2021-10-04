import React from 'react'
import styles from "./List.module.scss";

interface Props {
    title: string;
}

const List:React.FC<Props> = ({title, children}) => {
    return(
        <div className={styles.article}>
            <div className={styles.innerArticle}>
                <div className={styles.title}>
                    <span>{title}</span>
                </div>
                <div>
                {children}
                </div>
            </div>
        </div>
    )
}
export default List;
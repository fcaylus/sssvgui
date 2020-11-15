import styles from "./LoadingIcon.module.css";
import clsx from "clsx";
import React from 'react';

const LoadingIcon = (props: { className?: string }) => {
    return (
        <span className={clsx(styles.root, props.className)}>
            <span className={styles.bounce1}/>
            <span className={styles.bounce2}/>
            <span className={styles.bounce3}/>
        </span>
    );
};

export default LoadingIcon;

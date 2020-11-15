import styles from "./ErrorToast.module.css";
import clsx from "clsx";
import React from 'react';

export interface ErrorToastProps {
    error: string;
    onClose?: () => void;
}

const ErrorToast = (props: ErrorToastProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.close} onClick={props.onClose}>&times;</div>
            <div className={styles.text}>{props.error}</div>
        </div>
    );
};

export default ErrorToast;

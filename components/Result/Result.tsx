import React, { FunctionComponent } from 'react';
import styles from './Result.module.css';
import clsx from 'clsx';

export interface ResultInterface {
    className?: string;
    svg: string;
    svgName: string;
}

const Result: FunctionComponent<ResultInterface> = (props) => {
    const imageLink = (b64Data: string) => `data:image/svg+xml;base64,${b64Data}`;

    const resultFileName = () => {
        if (props.svgName.length > 0) {
            return `${props.svgName.replaceAll('.svg', '')}-super-slim.svg`;
        }
        return 'super-slim.svg';
    };

    return (
        <div className={clsx(styles.root, props.className)}>
            <div className={styles.svgContainer}>
                <img className={styles.svg} alt="Super Slim SVG" src={imageLink(props.svg)} />
            </div>
            <a className={clsx('button', styles.downloadButton)}
               href={imageLink(props.svg)}
               download={resultFileName()}>
                Download the Super Slim SVG !
            </a>
        </div>
    );
};

export default Result;

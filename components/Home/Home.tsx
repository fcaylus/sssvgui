import styles from './Home.module.css';
import Dropzone from '../Dropzone/Dropzone';
import React, { useState } from 'react';
import Result from '../Result/Result';

export interface HomeProps {

}

export default function Home(props: HomeProps) {
    const [loading, setLoading] = useState(false);

    const [optimizedSvg, setOptimizedSvg] = useState<string | undefined>(undefined);

    const onFileAdded = (file: File) => {
        // Upload the svg file
        const body = new FormData();
        body.append('file', file);

        setLoading(true);

        fetch('/api/optimize', {
            method: 'POST',
            body
        }).then((res) => {
            if (res.status >= 300) {
                console.error(res.text());
            } else {
                return res.json();
            }
        }).then((res) => {
            setOptimizedSvg(res.svg);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <React.Fragment>
            {!optimizedSvg && (
                <Dropzone className={styles.container}
                          classNameHighlight={styles.containerHighlight}
                          onFileAdded={onFileAdded}
                          loading={loading} />
            )}
            {optimizedSvg && (
                <Result className={styles.container} svg={optimizedSvg} />
            )}
            <div className={styles.credits}>🛠  Engineered @ <a href="https://doky.fr" target="_blank"> Doky</a></div>
        </React.Fragment>
    );
}

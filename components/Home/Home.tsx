import styles from './Home.module.css';
import Dropzone from '../Dropzone/Dropzone';
import React, { useState } from 'react';
import Result from '../Result/Result';
import ErrorToast from '../ErrorToast/ErrorToast';

export interface HomeProps {

}

export default function Home(props: HomeProps) {
    const [loading, setLoading] = useState(false);

    const [optimizedSvg, setOptimizedSvg] = useState<string | undefined>(undefined);
    const [optimizedSvgName, setOptimizedSvgName] = useState('');
    const [error, setError] = useState<string | undefined>(undefined);

    const onErrorToastClose = () => {
        setError(undefined);
        setOptimizedSvg(undefined);
    }

    const onFileAdded = (file: File) => {
        // Upload the svg file
        const body = new FormData();
        body.append('file', file);

        setLoading(true);
        fetch('/api/optimize', {
            method: 'POST',
            body
        }).then(async (res) => {
            if (res.status >= 300) {
                const err = await res.text();
                console.error(err);
                setError(err);
            } else {
                setOptimizedSvgName(file.name);
                setOptimizedSvg((await res.json()).svg);
                setError(undefined);
            }
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
                <Result className={styles.container} svg={optimizedSvg} svgName={optimizedSvgName} />
            )}
            {error && (<ErrorToast error={error} onClose={onErrorToastClose} />)}
            <div className={styles.credits}>🛠  Engineered @ <a href="https://doky.fr" target="_blank"> Doky</a></div>
        </React.Fragment>
    );
}

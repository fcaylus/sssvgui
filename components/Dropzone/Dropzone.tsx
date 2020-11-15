import React, { Component, FunctionComponent, useRef, useState } from 'react';
import styles from './Dropzone.module.css';
import clsx from 'clsx';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

export interface DropzoneInterface {
    className?: string;
    classNameHighlight?: string;
    onFileAdded: (file: File) => void;
    loading?: boolean;
}

const Dropzone: FunctionComponent<DropzoneInterface> = (props) => {
    const [highlight, setHighlight] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>();

    const openFileDialog = () => {
        fileInputRef.current.click();
    };

    const onFilesAdded: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const files = event.target.files;

        if (files.length > 0) {
            props.onFileAdded(files.item(0));
        }
    };

    const onDragOver: React.DragEventHandler = (event) => {
        event.preventDefault();
        setHighlight(true);
    };

    const onDragLeave: React.DragEventHandler = () => {
        setHighlight(false);
    };

    const onDrop: React.DragEventHandler = (event) => {
        event.preventDefault();

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            props.onFileAdded(files.item(0));
        }

        setHighlight(false);
    };

    return (
        <div
            className={clsx(styles.root, props.className, highlight ? props.classNameHighlight : undefined)}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}>
            <input
                ref={fileInputRef}
                className={styles.fileInput}
                type="file"
                accept=".svg"
                onChange={onFilesAdded} />
            <h1 className={styles.title}>Super Slim SVGs UI</h1>
            <button className={clsx('button', styles.uploadButton, 'big')} onClick={openFileDialog} disabled={props.loading}>
                Upload an SVG
                {props.loading && <LoadingIcon className={styles.loading}/>}
            </button>
            <p>
                ... or drop a file !
            </p>
            {props.children}
        </div>
    );
};

export default Dropzone;

import React from 'react';
import styles from './AddBtn.module.css';

const AddBtn = ({ checkTitle }) => {
    return (
        <>
            <button
                className={styles.button}
                onClick={checkTitle}
            >+ Add</button>
        </>
    );
}

export default AddBtn;
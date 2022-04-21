import React from 'react';
import styles from './ItemForm.module.css';
import AddBtn from './AddBtn';

const ItemForm = ({ title, desc, price }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div>
                    <h3>Title</h3>
                    <p>decsacwqcqwcqwcq d wqd d qwd qc </p>
                    <h3>$22.99</h3>
                </div>
                <div>
                    <div className={styles['container-amount']}>
                        <label className={styles.label}>Amount</label>
                        <input type='number' className={styles.input} />
                    </div>
                    <AddBtn />
                </div>
            </div>
        </>
    );
}

export default ItemForm;
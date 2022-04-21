import React from 'react';
import styles from './ItemForm.module.css';
import AddBtn from './AddBtn';

const ItemForm = ({ title, desc, price }) => {

    const checkTitle = () => {
        console.log(title);
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles['dish-details']}>
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <div>
                        <span className={styles.desc}><p>{desc}</p></span>
                    </div>
                    <div>
                        <span className={styles.price}><h3>${price}</h3></span>
                    </div>
                </div>
                <div className={styles['dish-cart-details']}>
                    <div className={styles['container-amount']}>
                        <label className={styles.label}>Amount</label>
                        <input type='number' className={styles.input} />
                    </div>
                    <AddBtn checkTitle={checkTitle} />
                </div>
            </div>
        </>
    );
}

export default ItemForm;
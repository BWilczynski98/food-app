import React from 'react';
import styles from './Description.module.css';

const Description = () => {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <h2>Delicious Food, Delivered To You</h2>
                </div>
                <div>
                    <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
                </div>
                <div>
                    <p>All uor meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
                </div>
            </div>
        </>
    );
}

export default Description;
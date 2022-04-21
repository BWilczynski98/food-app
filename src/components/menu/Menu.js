import React from 'react';
import styles from './Menu.module.css';
import ItemForm from '../UI/ItemForm';

const Menu = () => {
    return (
        <>
            <div className={styles.container}>
                <ItemForm />
            </div>
        </>
    );
}

export default Menu;
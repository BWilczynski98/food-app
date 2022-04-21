import React from 'react';
import styles from './Menu.module.css';
import ItemForm from '../UI/ItemForm';

const Menu = () => {
    const DUMMY_DISH = [
        {
            name: 'Sushi',
            desc: 'Finest fish and veggies',
            price: '22.99',
            id: 1
        },
        {
            name: 'Schnitzel',
            desc: 'A german specialty!',
            price: '16.50',
            id: 2
        },
        {
            name: 'Barbecue Burger',
            desc: 'American, raw, meaty',
            price: '12.99',
            id: 3
        },
        {
            name: 'Green Bowl',
            desc: 'Healthy... and green...',
            price: '18.99',
            id: 4
        },
    ];

    return (
        <>
            <div className={styles.container}>
                {DUMMY_DISH.map(el => <ItemForm
                    key={el.id}
                    title={el.name}
                    desc={el.desc}
                    price={el.price}
                />)}
            </div>
        </>
    );
}

export default Menu;
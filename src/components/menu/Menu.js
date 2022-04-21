import React, { useContext } from 'react';
import styles from './Menu.module.css';
import ItemForm from '../UI/ItemForm';
import { Dish } from '../../store/VariablesStorage';

const Menu = () => {
    const [DUMMY_DISH] = useContext(Dish);

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
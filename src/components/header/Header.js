import React, { useContext } from 'react';
import styles from './Header.module.css';
import { HiShoppingCart } from 'react-icons/hi';
import mealsImage from '../../assets/meals.jpg'
import { Dish } from '../../store/VariablesStorage';

const Header = () => {
    const [DUMMY_DISH, userCart] = useContext(Dish);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div>
                        <h1>ReactMeals</h1>
                    </div>
                    <div className={styles.cart}>
                        <div>
                            <HiShoppingCart className={styles.icon} />
                        </div>
                        <div>
                            <h4>Your Cart</h4>
                        </div>
                        <div className={styles['box-count-items']}>
                            <h4>{userCart.length}</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={mealsImage} />
                </div>
            </div>
        </>
    );
}

export default Header;
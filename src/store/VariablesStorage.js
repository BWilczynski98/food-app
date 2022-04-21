import React, { useState, createContext } from 'react';

export const Dish = createContext();

export const VariableStorage = (props) => {
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

    const [userCart, setDishToCart] = useState([])

    return (
        <Dish.Provider
            value={[DUMMY_DISH, userCart, setDishToCart]}>
            {props.children}
        </Dish.Provider>
    );
}


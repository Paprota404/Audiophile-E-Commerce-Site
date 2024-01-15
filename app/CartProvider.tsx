'use client'
import {CartInfo} from './CartInfo';
import {useState} from "react";

export default function CartProvider({children}){
    const [cartItems,setCartItems] = useState([]);

    return (
        <CartInfo.Provider value = {{cartItems,setCartItems}}>
            {children}
        </CartInfo.Provider>
    )
}
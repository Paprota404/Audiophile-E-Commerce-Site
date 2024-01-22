'use client'
import {CartInfo} from './CartInfo';
import {useState} from "react";



export default function CartProvider({children}:{children:any}){
    const [cartItems,setCartItems] = useState([]);

 
       

    return (
         /* @ts-ignore */
        <CartInfo.Provider value = {{cartItems,setCartItems}}>
            {children}
        </CartInfo.Provider>
    )
}
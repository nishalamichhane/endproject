import React, {createContext, useState} from 'react';
import Products from "../pages/Products";
export const ShopContext = createContext([]);

const getDefaultCart = () => {
    let cart = [];
    // for(let i =1; i < Products.length +1; i++){
    //     cart[i] = 0;
    // }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);

    const addToCart = (itemId) => {
        //setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1 }))
        setCartItems(prev =>[...prev, itemId]);
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => {

            let index = prev.indexOf(itemId);
            let newArray = [...prev.slice(0, index), ...prev.slice(index + 1)];
            //prev.splice(index,1);
            return [...newArray]
        })
    }

    const contextValue = { cartItems, addToCart, removeFromCart, setCartItems}


    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>

}
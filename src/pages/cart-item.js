import React, { useContext } from "react";
import {ShopContext} from "../context/ShopContext";
const CartItem = (props) => {
    const {id, title, category,image, price} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);
    return (
        <>
            <div className="cartItem">
                <img src={image} />
                <div className="description">
                    <p>
                        <b>{category}</b>
                    </p>
                    <p>
                        Title: {title}
                    </p>
                    <p> Price: ${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input
                    value={cartItems.filter(x => x===id).length}
                />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
                </div>
            </div>
        </>
    )
}
export default CartItem;
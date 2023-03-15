import React, { useContext } from "react";
import {ShopContext} from "../context/ShopContext";


const CartItem = (props) => {
    const {id, title, category,image, price} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);

    return (
        <>

        {/*<p>{title}</p>*/}
        {/*    <p>{category}</p>*/}
        {/*    /!*<p>{image}</p>*!/*/}
        {/*    <img src={image} alt={image} width={100} height={100} />*/}

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
                   // onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
                </div>
            </div>
        </>
    )

}
export default CartItem;
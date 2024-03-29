import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../context/AuthContext';
import {ShopContext} from "../context/ShopContext";
import CartItem from "./cart-item";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
 export const WinkelWagen = (props) => {
     const {isAuth} = useContext( AuthContext );
    const {cartItems} = useContext(ShopContext);
     const navigate = useNavigate();
     const [product, setProduct] = useState([]);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(false);
     useEffect(()=>{
         async function fetchProductData(){
             setLoading(true);
             try{
                 const response =await axios.get('https://fakestoreapi.com/products');
                 setProduct(response.data);
             }
             catch(e){
                 console.error(e);
                 setError(true);
             }
             setLoading(false);
         }
         fetchProductData();
     }, [])
    return (
        (isAuth===true) ?
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
                {product.map((product) => {
                    if (cartItems.includes(product.id)) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>
        </div>
            :
             navigate('/')
    )
}
export default WinkelWagen;
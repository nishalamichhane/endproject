import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../context/ShopContext";
import "../App.css";
import {useNavigate, Link, NavLink} from "react-router-dom";
import axios from "axios";
//import { ShoppingCart } from "phosphor-react";

import Header from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
//import logo from "../../assets/logo.png";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import SearchBar from "../components/searchbar/SearchBar";
import Button from "../components/button/Button";
const Products = () => {
    const navigate = new useNavigate();
    const {addToCart, cartItems} = useContext(ShopContext);
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        async function fetchProductData(){
            setLoading(true);
            try{
                const response =await axios.get('https://fakestoreapi.com/products');
                setProduct(response.data);
                //console.log("response is"+response.data);
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
        <>
            <div className="navbar">

            </div>
            <div>
                <h2 align="center">Producten Pagina</h2>
            </div>
            <div className="div-container">
                {product.map((product)=>{
                    return(<article className="article-container" key={product.id}>
                        <img src={ product.image } alt={ product.title } width={100} height={100} />
                        <h4> Categorie: {product.category}</h4>
                        <h6>Titel:<Link to={`/productdetails/${product.id}`}>{product.title} </Link></h6>
                        <strong>Prijs: €{product.price}</strong><br/>
                        {/*<button type="button" onClick={()=>navigate('/winkelwagen')}>Add to Cart</button>*/}
                        <button type = "button" onClick={()=> addToCart(product.id)}>Add to Cart {cartItems.filter(x => x===product.id).length> 0 &&
                            <> ({cartItems.filter(x => x===product.id).length})</>}</button>
                    </article>)
                })}
                {loading && <span>Loading......</span>}
                {error && <p>Problem to retrieve data. Please check the JSON links!!</p>}
            </div>
        </>
    );
};
export default Products;
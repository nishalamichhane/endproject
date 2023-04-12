import React, {useContext, useEffect, useState} from 'react';
import "../App.css";
import {Link, NavLink} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import Header from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
//import logo from "../../assets/logo.png";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import SearchBar from "../components/searchbar/SearchBar";
import Button from "../components/button/Button";
import {ShopContext} from "../context/ShopContext";
const SearchResults = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [counter, setCounter] = useState(0);
    const [query, setQuery] = useState([]);
    const {isAuth} = useContext( AuthContext );
    const {addToCart, cartItems} = useContext(ShopContext);
    function adjustCounter(num){
        setCounter(counter=>counter+num);
    }
    useEffect(()=>{
        async function fetchSearchData(){
            setLoading(true);
            try{
                const response =await axios.get('https://fakestoreapi.com/products/categories');
                setQuery(response.data);
            }
            catch(e){
                console.error(e);
                setError(true);
            }
            setLoading(false);
        }
        fetchSearchData();
    }, [])
    const handleChange = (e) => {
        console.log(e.target.value); // maybe print the value to check
        //useEffect(()=>{
            async function fetchProductData(){
                setLoading(true);
                try{
                    const response =await axios.get(`https://fakestoreapi.com/products/category/${e.target.value}`);
                    setProduct(response.data);
                    console.log("response is"+response.data);
                }
                catch(e){
                    console.error(e);
                    setError(true);
                }
                setLoading(false);
            }
            fetchProductData();
    }
    return (
        <>
            <form className="" >
                <label htmlFor="search"> Zoeken op Categorie: </label>
                <select name="search" id="search" onChange={handleChange}>
                    <option value="Select Category">Selecteer Categorie</option>
                    {query.map((query)=>{
                        return(
                            <option value={query}  key={query} >
                                {query}
                            </option>
                        )
                    })}
                </select>
            </form>
            <div>
                <h2 align="center">Zoeken Pagina</h2>
            </div>
            <div className="div-container">
                {product.map((product)=>{
                    return(<article className="article-container" key={product.id}>
                        <img src={ product.image } alt={ product.title } width={100} height={100} />
                        <h4> Categorie: {product.category}</h4>
                        <h6>Titel:<Link to={`/productdetails/${product.id}`}>{product.title}</Link></h6>
                        <strong>Prijs: €{product.price}</strong><br/>
                        {/*<p>{counter}</p>*/}
                        {/*<Button clickHandler = { () => adjustCounter(+1) }> Add to a cart </Button>*/}
                        {/*<Button clickHandler = { () => adjustCounter(-1) }> Remove from cart </Button>*/}
                        {(isAuth === true) ?
                            <button type="button" onClick={() => addToCart(product.id)}>Add to
                                Cart {cartItems.filter(x => x === product.id).length > 0 &&
                                    <> ({cartItems.filter(x => x === product.id).length})</>}</button>
                            :
                            <div></div>
                        }
                    </article>)
                })}
                {loading && <span>Loading......</span>}
                {error && <p>Problem to retrieve data. Please check the JSON links!!</p>}
            </div>
        </>
    );
};
export default SearchResults;
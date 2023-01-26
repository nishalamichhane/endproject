import React, {useEffect, useState} from 'react';
import "../App.css";
import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import Header from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
//import logo from "../../assets/logo.png";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import SearchBar from "../components/searchbar/SearchBar";
import Button from "../components/button/Button";


const Home = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [counter, setCounter] = useState(0);

    // function adjustCounter(num){
    //     setCounter(counter=>counter+num);
    // }


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
            <div>
                <h2 align="center">Products Page</h2>

            </div>


            <div className="div-container">
                {product.map((product)=>{
                    return(<article className="article-container" key={product.id}>
                        <h4> Category: {product.category}</h4>
                        <h6>Title:<Link to={`/productdetails/${product.id}`}>{product.title}</Link></h6>
                        <strong>Price: €{product.price}</strong><br/>
                        {/*<p>{counter}</p>*/}
                        {/*<Button clickHandler = { () => adjustCounter(+1) }> Add to a cart </Button>*/}
                        {/*<Button clickHandler = { () => adjustCounter(-1) }> Remove from cart </Button>*/}
                    </article>)
                })}
                {loading && <span>Loading......</span>}
                {error && <p>Problem to retrieve data. Please check the JSON links!!</p>}
            </div>

        </>
    );
};
export default Home;
import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import products from "./Products";
const ProductDetails = () => {
    const [ loading, setLoading ] = useState( false )
    const [ error, setError ] = useState( false );
    const [ data, setData ] = useState( [] );
    const { id } = useParams()
    console.log("id is"+id);
    useEffect( () => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading( true );
            try {
                setError( false );
                //mijn rest api is fakestoreapi
                const response = await axios.get( "https://fakestoreapi.com/products/" + id , {
                    signal: controller.signal,
                } );
                setData( response.data );
                console.log("data is: "+ response.data)
            } catch ( e ) {
                setError( true )
                if(axios.isCancel(e)){
                    console.log('The axios request was cancelled')
                } else {
                    console.error(e)
                }
            }
            setLoading( false );
        }
        //functie aanroepen
        fetchData()
        return function cleanup() {
            controller.abort();
        }
    }, [] )
    const { title, image, price, description } = data;
    return (
        <>
            <div className="">
                <article className="">
                <img src={ image } alt={ title } width={200} height={200} />
                <h2>{ title }</h2>
                <p>{ description }</p>
                <div>
                    <span>€{ price }</span>
                    <button type="button">Toevoegen aan Winkelwagen</button>
                   <p><Link to='/products'>Doorgaan met winkelen</Link></p>
                </div>
                </article>
                { loading && <p>Loading...</p> }
                {/*{ error && <p>Error: Could not fetch data!</p> }*/}
            </div>
        </>
    );
};
export default ProductDetails;
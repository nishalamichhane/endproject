import React, { useEffect, useState } from 'react';
import {useNavigate, Link, useParams} from "react-router-dom";
import axios from "axios";
const ProductDetails = () => {
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState( false )
    const [ error, setError ] = useState( false );
    const [ data, setData ] = useState( [] );
    const { id } = useParams()
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
                <div>
                    <img src={ image } alt={ title } width={200} height={200} />
                    <h2>{ title }</h2>
                    <p>{ description }</p>
                    <div>
                        <span>€{ price }</span>
                        <p><Link to='/products'>Doorgaan met winkelen</Link></p>
                    </div>
                </div>
            { loading && <p>Loading...</p> }
        </>
    );
};
export default ProductDetails;
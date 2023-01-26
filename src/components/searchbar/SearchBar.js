import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useNavigation} from "react-router-dom";
import Button from "../button/Button";


function SearchBar({ setProductHandler }) {

    const [query, setQuery] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    //const navigation = useNavigation();
    //console.log("query is"+query);

    function onFormSubmit(e) {
        console.log("Ik ben hier");
        //e.preventDefault();

       // setProductHandler(query);

        //https://fakestoreapi.com/products/category/jewelery
    }
    useEffect(()=>{
        async function fetchSearchData(){
            setLoading(true);
            try{
                const response =await axios.get('https://fakestoreapi.com/products/categories');
                console.log(response);
                setQuery(response.data);
                //console.log("response is"+response.data);
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
        setQuery(e.target.value);
        navigate('/SearchResults');
        //https://fakestoreapi.com/products/category/${query}
       // setSelectedValue(e.target.value)
    }

    return (
        <>
            <form className="" onSubmit={onFormSubmit}>

                <label htmlFor="search"> Search by Category: </label>
                <select name="search" id="search" onChange={handleChange}>
                    {query.map((query)=>{
                        return(
                            <option value={query}  key={query} >
                                {query}
                                <p>{query.title}</p>
                            </option>
                        )
                    })}
                </select>
            </form>
            {loading && <span>Loading......</span>}
            {error && <p>Problem to retrieve data. Please check the JSON links!!</p>}
            {/*  <div>*/}
            {/*  <form className="" onSubmit={onFormSubmit}>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    name="search"*/}
            {/*    value={query}*/}
            {/*    onChange={(e) => setQuery(e.target.value)}*/}
            {/*    placeholder="Zoek de product"*/}
            {/*/>*/}
            {/*<button type="submit">*/}
            {/*  Zoek*/}
            {/*</button>*/}

            {/*  </form>*/}
            {/*  </div>*/}
        </>
    )
}

export default SearchBar;
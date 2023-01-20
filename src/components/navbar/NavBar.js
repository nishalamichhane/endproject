import React, {useContext, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import SearchBar from "../searchbar/SearchBar";
function NavBar() {
    const navigate = useNavigate();
    const {isAuth, login, logout,email} = useContext( AuthContext )
    const [product, setProduct] = useState('');
    //console.log("Authentication status:" +isAuth);
    //console.log("Email:"+email);
    //console.log("Logout status:" +logout);
    //console.log("Login status:" +login);
    return (
        <nav>
            <Link to="/">
          <span className="logo-container">

            <h1>
              Web Shop
            </h1>
          </span>
            </Link>
            {/*<SearchBar setProductHandler={setProduct}/>*/}
            {(isAuth===true) ?

                <button
                    type="button"
                    onClick={logout}
                >
                    Log Out
                </button>
                :
                <div>
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                    >
                        Registreren
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/products')}
                    >
                        Products
                    </button>

                    {/*Shopping Cart<img src="../assets/shopping-cart.png"/>*/}

                </div>}
        </nav>
    );
}
export default NavBar;
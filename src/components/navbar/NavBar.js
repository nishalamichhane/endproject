import React, {useContext, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import SearchBar from "../searchbar/SearchBar";
function NavBar() {
    const navigate = useNavigate();
    const {isAuth, login, logout,email, user} = useContext( AuthContext )
    const [product, setProduct] = useState('');
    //console.log("Authentication status:" +isAuth);
    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <h1>
              Web ShopN
            </h1>
          </span>
            </Link>
            {/*<SearchBar />*/}
            {/*<SearchBar setProductHandler={setProduct}/>*/}
            {(isAuth===true) ?
                <div>
                    <strong>Hello: </strong>{user.username}
                <button
                type="button"
                onClick={() => navigate('/profile')}
                >
                Profiel
                </button>
                <button
                type="button"
                onClick={() => navigate('/products')}
                >
                Producten
                </button>
                <button
                type="button"
                onClick={() => navigate('/searchresults')}
                >
                Zoeken met Categorie
                </button>
                {/*<button*/}
                {/*type="button"*/}
                {/*onClick={() => navigate('/winkelwagen')}*/}
                {/*>*/}
                {/*In Winkelwagen*/}
                {/*</button>*/}
                <button
                    type="button"
                    onClick={logout}
                >
                    Log Out
                </button>
                </div>
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
                        onClick={() => navigate('/profile')}
                    >
                        Profiel
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/products')}
                    >
                        Producten
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/searchresults')}
                    >
                        Zoeken met Categorie
                    </button>
                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    onClick={() => navigate('/winkelwagen')}*/}
                    {/*>*/}
                    {/*    In Winkelwagen*/}
                    {/*</button>*/}
                    {/*Shopping Cart<img src="../assets/shopping-cart.png"/>*/}
                </div>}
        </nav>
    );
}
export default NavBar;
import React, {useContext, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import SearchBar from "../searchbar/SearchBar";
import './NavBar.css';
function NavBar() {
    const navigate = useNavigate();
    const {isAuth, login, logout,email, user} = useContext( AuthContext )
    const [product, setProduct] = useState('');
    return (
        // section gebruikt voor outer container en div gebruikt voor inner container voor Navbar
        <section className="outer-container navbar">
            <div className="inner-container">
        <nav>
            <Link to="/"><span><h1>Web ShopN</h1></span></Link>
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
                <button
                    type="button"
                    onClick={logout}
                >
                    Log Out
                </button>
                    <button
                        type="button"
                        onClick={() => navigate('/winkelwagen')}
                    >
                        Cart
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
                    <button
                        type="button"
                        onClick={() => navigate('/winkelwagen')}
                    >
                        Winkelwagen
                    </button>
                </div>}
        </nav>
            </div>
        </section>
    );
}
export default NavBar;
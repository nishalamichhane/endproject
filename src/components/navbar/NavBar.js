import React, {useContext, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import SearchBar from "../searchbar/SearchBar";
import './NavBar.css';
import Button from "../button/Button";
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
                    <Button
                        type="button"
                        clickHandler={() => navigate('/profile')}
                    >
                        Profiel
                    </Button>
                    <Button
                    type="button"
                    clickHandler={() => navigate('/products')}
                    >
                    Producten
                    </Button>
                    <Button
                    type="button"
                    clickHandler={() => navigate('/searchresults')}
                    >
                    Zoeken met Categorie
                    </Button>
                    <Button
                        type="button"
                        clickHandler={logout}
                    >
                        Log Out
                    </Button>
                        <Button
                            type="button"
                            clickHandler={() => navigate('/winkelwagen')}
                        >
                            Winkelwagen
                        </Button>
                    </div>
                :
                <div>
                    <Button
                        type="button"
                        clickHandler={() => navigate('/signin')}
                    >
                        Log in
                    </Button>
                    <Button
                        type="button"
                        clickHandler={() => navigate('/signup')}
                    >
                        Registreren
                    </Button>
                    <Button
                        type="button"
                        clickHandler={() => navigate('/products')}
                    >
                        Producten
                    </Button>
                    <Button
                        type="button"
                        clickHandler={() => navigate('/searchresults')}
                    >
                        Zoeken met Categorie
                    </Button>
                </div>}
        </nav>
            </div>
        </section>
    );
}
export default NavBar;
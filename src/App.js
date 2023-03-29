import React, {useContext, useState} from 'react';
import {Routes, Route, Navigate, Router} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Products from './pages/Products';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import { useForm } from 'react-hook-form';
import {AuthContext} from "./context/AuthContext";
// import {ShopContextProvider} from "./context/ShopContext";
import Footer from "./components/footer/Footer";
import SearchResults from "./pages/SearchResults";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
 import WinkelWagen from "./pages/WinkelWagen";
// import CartItem from "./pages/cart-item";
function App() {
  const {isAuth} = useContext( AuthContext )
  return (
      <>
        <NavBar />
          <section className="outer-container">
              <div className="inner-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            {/*<Route path="/products" element= {isAuth===true ? <Products/> : <Navigate to="/"/> }/>*/}
            <Route exact path="/signin" element={<SignIn/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/products" element={<Products/>}/>
              <Route exact path="/searchresults" element={<SearchResults/>}/>
              <Route  path="/productdetails/:id" element={<ProductDetails/>}/>
              <Route  path="/winkelwagen" element={<WinkelWagen/>}/>
              {/*<Route  path="/cart-items" element={<CartItem/>}/>*/}
              <Route path="/profile" element={ isAuth ? <Profile /> : <Navigate to="/" />}/>
          </Routes>
        </div>
              </div>
          </section>
        <div>
          <Footer office="WebShopN" made_in_year="2023" />
        </div>
      </>
  );
}
export default App;
import React, {useContext, useState} from 'react';
import {Routes, Route, Navigate, Router} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Products from './pages/Products';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {AuthContext} from "./context/AuthContext";
import Footer from "./components/footer/Footer";
import SearchResults from "./pages/SearchResults";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
 import WinkelWagen from "./pages/WinkelWagen";
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
            <Route exact path="/signin" element={<SignIn/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/products" element={<Products/>}/>
              <Route exact path="/searchresults" element={<SearchResults/>}/>
              <Route  path="/productdetails/:id" element={<ProductDetails/>}/>
              <Route  path="/winkelwagen" element={<WinkelWagen/>}/>
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
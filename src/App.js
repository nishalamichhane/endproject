import React, {useContext, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Products from './pages/Products';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {AuthContext} from "./context/AuthContext";
import Footer from "./components/footer/Footer";


function App() {
  const {isAuth} = useContext( AuthContext )


  return (
      <>

        <NavBar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            {/*<Route path="/products" element= {isAuth===true ? <Products/> : <Navigate to="/"/> }/>*/}
            <Route exact path="/signin" element={<SignIn/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/products" element={<Products/>}/>
          </Routes>
        </div>
        <div>
          <Footer office="WebShop" made_in_year="2023" />
        </div>
      </>
  );
}

export default App;

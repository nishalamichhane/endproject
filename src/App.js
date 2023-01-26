import React, {useContext, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Products from './pages/Products';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import './index.css';
import {AuthContext} from "./context/AuthContext";
import Footer from "./components/footer/Footer";
import SearchResults from "./pages/SearchResults";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";




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
              <Route exact path="/searchresults" element={<SearchResults/>}/>
              <Route  path="/productdetails/:id" element={<ProductDetails/>}/>
              <Route path="/profile" element={ isAuth ? <Profile /> : <Navigate to="/" />}/>
          </Routes>
        </div>
        <div>
          <Footer office="WebShop" made_in_year="2023" />
        </div>
      </>
  );
}

export default App;

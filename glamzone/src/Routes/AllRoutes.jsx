import React from 'react'
import {Routes, Route} from "react-router-dom";
import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Products from '../Pages/Products';
import Register from '../Pages/Register';
import SingleProduct from '../Pages/SingleProduct';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/products/:product_id" element={<SingleProduct />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/Cart" element={<Cart />}></Route>
    </Routes>
  )
}

export default AllRoutes

import React, { useState } from 'react';
import Cart from './Pages/Cart';
import ItemPage from './Pages/ItemPage';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Pages/Checkout';
import Footer from './Component/Footer';

function App() {
  const[category,setCategory]=useState("All");
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
      <Routes>
        <Route path="/" element={<ItemPage category={category} setCategory={setCategory}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </main>
    <Footer  />
    </div>
    
  );
}

export default App;

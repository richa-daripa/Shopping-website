import React  from 'react';
import Cart from './Cart';
import ItemPage from './ItemPage';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
      <Routes>
        <Route path='/' element={<ItemPage/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
  );
}

export default App;

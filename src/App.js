
import Cart from './Cart';
import ItemPage from './ItemPage';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<ItemPage/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      
    </div>
  );
}

export default App;

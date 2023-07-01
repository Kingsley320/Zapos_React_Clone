import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';


import './App.css'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Cart from './pages/cart';
import Checkout from './pages/Checkout';
import Shop from './pages/Shop';
import SingleProduct from './pages/SIngleProduct';

function App() {

  return (
    <>
      <BrowserRouter >
       <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/single-product" element={<SingleProduct />}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
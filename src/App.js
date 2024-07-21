import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Shoes from './components/Shoes';
import Clothing from './components/Clothing';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import RedTape_1 from './components/RedTape_1';
import RedTape_2 from './components/RedTape_2';
import RedTape_3 from './components/RedTape_3';
import RedTape_4 from './components/RedTape_4';
import Puma_1 from './components/Puma_1';
import Puma_2 from './components/Puma_2';
import Puma_3 from './components/Puma_3';
import Puma_4 from './components/Puma_4';
import Nike_1 from './components/Nike_1';
import Nike_2 from './components/Nike_2';
import Nike_3 from './components/Nike_3';
import Nike_4 from './components/Nike_4';
import Campus_1 from './components/Campus_1';
import Campus_2 from './components/Campus_2';
import Campus_3 from './components/Campus_3';
import Campus_4 from './components/Campus_4';
import Hoodie_1 from './components/Hoodie_1';
import Hoodie_2 from './components/Hoodie_2';
import Hoodie_3 from './components/Hoodie_3';
import Hoodie_4 from './components/Hoodie_4';
import Tshirt_1 from './components/Tshirt_1';
import Tshirt_2 from './components/Tshirt_2';
import Tshirt_3 from './components/Tshirt_3';
import Tshirt_4 from './components/Tshirt_4';
import Shirt_1 from './components/Shirt_1';
import Shirt_2 from './components/Shirt_2';
import Shirt_3 from './components/Shirt_3';
import Shirt_4 from './components/Shirt_4';
import Jean_1 from './components/Jean_1';
import Jean_2 from './components/Jean_2';
import Jean_3 from './components/Jean_3';
import Jean_4 from './components/Jean_4';

const App = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQuantity = (index, newQuantity) => {
    const newCart = [...cart];
    newCart[index].quantity = newQuantity;
    setCart(newCart);
  };

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/redtape1" element={<RedTape_1 addToCart={addToCart}/>} />
          <Route path="/redtape2" element={<RedTape_2 addToCart={addToCart}/>} />
          <Route path="/redtape3" element={<RedTape_3 addToCart={addToCart}/>} />
          <Route path="/redtape4" element={<RedTape_4 addToCart={addToCart}/>} />
          <Route path="/puma1" element={<Puma_1 addToCart={addToCart}/>} />
          <Route path="/puma2" element={<Puma_2 addToCart={addToCart}/>} />
          <Route path="/puma3" element={<Puma_3 addToCart={addToCart}/>} />
          <Route path="/puma4" element={<Puma_4 addToCart={addToCart}/>} />
          <Route path="/nike1" element={<Nike_1 addToCart={addToCart}/>} />
          <Route path="/nike2" element={<Nike_2 addToCart={addToCart}/>} />
          <Route path="/nike3" element={<Nike_3 addToCart={addToCart}/>} />
          <Route path="/nike4" element={<Nike_4 addToCart={addToCart}/>} />
          <Route path="/campus1" element={<Campus_1 addToCart={addToCart} />} />
          <Route path="/campus2" element={<Campus_2 addToCart={addToCart}/>} />
          <Route path="/campus3" element={<Campus_3 addToCart={addToCart}/>} />
          <Route path="/campus4" element={<Campus_4 addToCart={addToCart}/>} />
          <Route path="/hoodie1" element={<Hoodie_1 addToCart={addToCart}/>} />
          <Route path="/hoodie2" element={<Hoodie_2 addToCart={addToCart}/>} />
          <Route path="/hoodie3" element={<Hoodie_3 addToCart={addToCart}/>} />
          <Route path="/hoodie4" element={<Hoodie_4 addToCart={addToCart}/>} />
          <Route path="/tshirt1" element={<Tshirt_1 addToCart={addToCart}/>} />
          <Route path="/tshirt2" element={<Tshirt_2 addToCart={addToCart}/>} />
          <Route path="/tshirt3" element={<Tshirt_3 addToCart={addToCart}/>} />
          <Route path="/tshirt4" element={<Tshirt_4 addToCart={addToCart}/>} />
          <Route path="/shirt1" element={<Shirt_1 addToCart={addToCart}/>} />
          <Route path="/shirt2" element={<Shirt_2 addToCart={addToCart}/>} />
          <Route path="/shirt3" element={<Shirt_3 addToCart={addToCart}/>} />
          <Route path="/shirt4" element={<Shirt_4 addToCart={addToCart}/>} />
          <Route path="/jean1" element={<Jean_1 addToCart={addToCart}/>} />
          <Route path="/jean2" element={<Jean_2 addToCart={addToCart}/>} />
          <Route path="/jean3" element={<Jean_3 addToCart={addToCart} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>} />
          <Route path="/jean4" element={<Jean_4 addToCart={addToCart}/>} />
          <Route path="/jean4" element={<Jean_4 addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>}/>
        </Routes>
    </>
  );
};

export default App;

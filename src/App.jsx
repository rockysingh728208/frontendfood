import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Menu from './pages/Menu.jsx';
import MobileApp from './pages/MobileApp.jsx';
import Login from './components/Login/login.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Cart from './pages/Cart/Cart.jsx'; 
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'; // <-- import this


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar onSignInClick={() => setShowLogin(true)} />
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mobileapp" element={<MobileApp />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </>
  );
};

export default App;

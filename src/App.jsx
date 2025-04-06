import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import PlaceOrder from './pages/placeOrder/placeOrder';
import Footer from './components/footer/footer';
import LoginPopup from './components/loginPopup/loginPopup';
import Navbar from './components/navbar/navbar';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState(null);
  const [showAbout, setShowAbout] = useState(false)

  const handleLogin = (name) => {
    setUserName(name); 
    setShowLogin(false);  
     
  };

  const handleLogout = () => {
    setUserName(null); 
  };

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} handleLogin={handleLogin}  />}
      <div className='app'>
        <Navbar userName={userName} setShowLogin={setShowLogin} handleLogout={handleLogout} setUserName={setUserName} />
        <Routes>
          <Route path='/delivery' element={<Home showAbout={showAbout} setShowAbout={setShowAbout} />}  />
          <Route path='/delivery/cart' element={<Cart />} />
          <Route path='/delivery/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};


export default App;


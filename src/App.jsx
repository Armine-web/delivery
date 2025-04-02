import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './components/footer/footer'
import LoginPopup from './components/loginPopup/loginPopup'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route 
            path='/delivery' 
            element={<Home showAbout={showAbout} setShowAbout={setShowAbout} />} 
          /> 
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

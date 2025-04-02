import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='footer-logo' src={assets.logo} alt="logo" />
            <div className="footer-social-icons">
            <FacebookIcon />
            <TelegramIcon />
            <InstagramIcon />
            </div>
            <p>Choose from a diverse menu featuring a delectable array of dishes, from savory appetizers to mouthwatering main courses. Each dish is crafted with the finest ingredients, offering a unique blend of flavors that will satisfy every palate.</p>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>   
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2> 
           <ul>
            <li>+374 94 123 456</li>
            <li>food.delivery@company.com</li>
           </ul>
        </div>   
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2025 Food Delivery. All rights reserved.
      </p>
    </div>
  )
}

export default Footer

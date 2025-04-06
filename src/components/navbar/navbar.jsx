import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Button, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { StoreContext } from '../../context/storeContext';
import SearchBar from '../searchBar/searchBar';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
    background-color: #ff6600;
    color: white;
  }
`;

function Navbar({ userName, setShowLogin, handleLogout, setUserName, setSearchQuery }) {
  const navigate = useNavigate();
  const [menu, setMenu] = useState('home');
  const [searchVisible, setSearchVisible] = useState(false);
  const { cartItems } = useContext(StoreContext);
  const totalItemsInCart = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);


  const [buttonText, setButtonText] = useState(userName ? `Hi ${userName}` : 'Sign in');

  const handleMouseOut = () => {
    setButtonText(userName ? `Hi ${userName}` : 'Sign in');
  };

  const handleMouseOver = () => {
    if (userName) {
      setButtonText('Log out');
    }
  };

  const handleHomeClick = () => {
    setSearchQuery('');
    setSearchVisible(false);
    setMenu('home');
    navigate('/delivery/');
  };

  const handleSignOut = () => {
    setUserName(null);
    handleLogout();

  };

  return (
    <Box sx={{ padding: '20px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img
        src={assets.logo}
        alt="logo"
        className="navbar-logo"
        onClick={handleHomeClick}
      />

      <ul className="navbar-menu navbar">
        <a
          href="#home"
          onClick={handleHomeClick}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </a>
        <a href="#explore-menu" onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>
          Menu
        </a>
        <a href="#app-download" onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>
          Mobile-app
        </a>
        <a href="#footer" onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        {searchVisible ? (
          <SearchBar />
        ) : (
          <IconButton onClick={() => setSearchVisible(true)}>
            <SearchIcon sx={{ color: '#495579', fontSize: '28px' }} />
          </IconButton>
        )}
        <Link to="/delivery/cart">
          <IconButton>
            <ShoppingCartIcon sx={{ color: '#495579', fontSize: '28px' }} />
            <CartBadge badgeContent={totalItemsInCart > 0 && userName ? totalItemsInCart : null} overlap="circular" />
          </IconButton>
        </Link>

        {userName ? (
          <Button
            onClick={handleSignOut}
            variant="contained"
            sx={{
              padding: '10px 17px',
              backgroundColor: '#06b301',
              '@media (max-width: 1050px)': { padding: '7px 15px' }, 
              
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {buttonText}
          </Button>
        ) : (
          <Button
            onClick={() => setShowLogin(true)}
            variant="contained"
            sx={{
              backgroundColor: '#06b301',
              '@media (max-width: 1050px)': { padding: '7px 15px' },
            }}
          >
            Sign in
          </Button>
        )}
      </div>
    </Box>
  );
}

export default Navbar;

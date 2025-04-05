import React, { useState, useContext } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { Button, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { StoreContext } from '../../context/storeContext';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
    background-color: #ff6600;
    color: white;
  }
`;

function Navbar({ userName, setShowLogin, handleLogout, setUserName }) {
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
    setMenu('home');
  };

  const handleSignOut = () => {
    setUserName(null);
    setButtonText('Sign in'); 
    handleLogout();
  };

  return (
    <Box sx={{ padding: '20px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to={'/delivery/'} onClick={handleHomeClick}>
        <img src={assets.logo} alt='logo' className='navbar-logo' />
      </Link>

      <ul className='navbar-menu navbar'>
        <Link to='/delivery/' onClick={handleHomeClick} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile-app</a>
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</a>
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
            <CartBadge badgeContent={totalItemsInCart > 0 ? totalItemsInCart : null} overlap="circular" />
          </IconButton>
        </Link>

        {userName ? (
          <Button
            onClick={handleSignOut}
            variant="contained"
            sx={{
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

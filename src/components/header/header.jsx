import React from 'react'
import './header.css'
import { Button, Box } from '@mui/material'

const Header = ({ setShowAbout }) => { 
  return (
    <div className='header'>
      <div className="header-contents">
        <Box sx={{ fontWeight: '500', color: 'white', fontSize: 'max(4.5vw, 22px)' }}>
          Order Your Favorite Food Here
        </Box>
        <Box sx={{ color: 'white', fontSize: '1vw' }}>
          Order your favorite food from our menu and get it delivered to your doorstep
        </Box>
        <Button
          onClick={() => setShowAbout(true)}  
          variant="contained"
          sx={{
            backgroundColor: '#06b301',
            '@media (max-width: 1050px)': {
              padding: '7px 15px',
            },
          }}
        >
          About
        </Button>
      </div>
    </div>
  )
}

export default Header

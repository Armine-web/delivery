import React, { useState, useContext } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StoreContext } from '../../context/storeContext';

function SearchBar() {
  const { handleSearch } = useContext(StoreContext);
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(query);
    const element = document.getElementById('explore-menu');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
    }

  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
   <TextField
  value={query}
  onChange={handleChange}
  variant="outlined"
  size="small"
  placeholder="Search..."
  sx={{
    marginRight: '8px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px', 
      '&:hover fieldset': {
        borderColor: '#ff6600', 
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff6600',
      },
    },
    '@media (max-width: 1200px)': {
      width: '120px',
    },
    '@media (max-width: 750px)': {
      width: '100px',
    },
  }}
/>
      <IconButton onClick={handleSearchClick} sx={{ color: '#495579' }}>
        <SearchIcon  />
      </IconButton>
    </div>
  );
}

export default SearchBar;

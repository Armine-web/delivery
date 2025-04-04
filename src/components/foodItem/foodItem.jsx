import React, { useContext } from 'react';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import './foodItem.css';
import { StoreContext } from '../../context/storeContext';
import useLocalStorage from '../../hooks/useLocalStoraje'; 

function FoodItem({ id, name, image, servings, rating }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  
  const [currentRating, setCurrentRating] = useLocalStorage(`rating-${id}`, rating);

  
  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating); 
  };

  return (
    <div className='food-item'>
      <div className="food-itm-img-container" style={{ position: 'relative' }}>
        <img className='food-item-image' src={image} alt={name} />
        {!cartItems[id] ? (
          <AddIcon
            onClick={() => addToCart(id)}
            sx={{
              position: 'absolute',
              width: '25px',
              height: '25px',
              bottom: '15px',
              right: '15px',
              cursor: 'pointer',
              borderRadius: '50%',
              backgroundColor: 'white'
            }}
          />
        ) : (
          <div className="food-item-container">
            <span className="food-item-container-remove" onClick={() => removeFromCart(id)}>-</span>
            <p>{cartItems[id]}</p>
            <span className="food-item-container-add" onClick={() => addToCart(id)}>+</span>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <p>{name}</p>
        <div className="food-item-rating-price">
          <Rating
            name="text-feedback"
            value={currentRating}
            onChange={(event, newValue) => handleRatingChange(newValue)} 
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className="food-item-price">Price: <span>${servings}</span> </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;

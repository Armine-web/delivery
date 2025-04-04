import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/storeContext'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, RecipeList, removeFromCart, getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        
        {RecipeList.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id} className="cart-items-title cart-items-item">
                <img className='cart-items-image' src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.servings}</p>
                <p>{cartItems[item.id]}</p>
                <p className='cart-items-total'>$ {item.servings * cartItems[item.id]}</p>
                <DeleteIcon onClick={() => removeFromCart(item.id)} />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${Number(getTotalAmount()) > 0 ? 2 : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${Number(getTotalAmount()) > 0 ? Number(getTotalAmount()) + 2 : 0}</b>
            </div>
          </div>
          <Button
            onClick={() => navigate('/order')}
            sx={{
              color: '#ff6600',
              '&:hover': {
                backgroundColor: '#ff6600', 
                color: '#fff', 
              },
            }}
          >
            PROCEED TO CHECKOUT
          </Button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <TextField
                id="outlined-multiline-flexible"
                label="Promo code"
                multiline
                maxRows={4}
                sx={{
                  '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                          borderColor: '#ff6600',
                      },
                      '&.Mui-focused fieldset': {
                          borderColor: '#ff6600',
                      },
                  },
                  '& .MuiInputLabel-root': {
                      '&.Mui-focused': {
                          color: '#ff6600',
                      },
                  },
              }}
              />
              <Button
                sx={{
                  color: '#ff6600',
                  '&:hover': {
                    backgroundColor: '#ff6600', 
                    color: '#fff', 
                  },
                }}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;

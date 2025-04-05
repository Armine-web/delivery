import React, { useContext } from 'react'
import './placeOrder.css'

import TextField from '@mui/material/TextField';
import { StoreContext } from '../../context/storeContext';
import Button from '@mui/material/Button';

const PlaceOrder = () => {

  const {getTotalAmount} = useContext(StoreContext);

  

  return (
    <>
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'> Delivery Information</p>
        <div className="multy-fields">
          <TextField
            id="outlined-multiline-flexible-name"
            label="First Name"
            multiline
            maxRows={4}
            sx={{
              width: '100%',
              marginBottom: '15px',
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
           <TextField
              id="outlined-multiline-flexible-last-name"
              label="Last Name"
              multiline
              maxRows={4}
              sx={{
                width: '100%',
                marginBottom: '15px',
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
        </div>
        <TextField
            id="outlined-multiline-flexible-email"
            label="Email address"
            multiline
            maxRows={4}
            sx={{
              width: '100%',
              marginBottom: '15px',
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
           <TextField
              id="outlined-multiline-flexible-street"
              label="Street"
              multiline
              maxRows={4}
              sx={{
                width: '100%',
                marginBottom: '15px',
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
      
      <div className="multy-fields">
          <TextField
            id="outlined-multiline-flexible-city"
            label="City"
            multiline
            maxRows={4}
            sx={{
              width: '100%',
              marginBottom: '15px',
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

           <TextField
              id="outlined-multiline-flexible-state"
              label="State"
              multiline
              maxRows={4}
              sx={{
                width: '100%',
                marginBottom: '15px',
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
        </div>

        <div className="multy-fields">
          <TextField
            id="outlined-multiline-flexible"
            label="Ziip code"
            multiline
            maxRows={4}
            sx={{
              width: '100%',
              marginBottom: '15px',
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
           <TextField
              id="outlined-multiline-flexible-country"
              label="Country"
              multiline
              maxRows={4}
              sx={{
                width: '100%',
                marginBottom: '15px',
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
        </div>
        <TextField
              id="outlined-multiline-flexible-phone"
              label="Phone"
              multiline
              maxRows={4}
              sx={{
                width: '100%',
                marginBottom: '15px',
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
      </div>
      <div className="place-order-right">
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
              <p> ${Number(getTotalAmount()) > 0 ? 2 : 0}</p>
              
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${Number(getTotalAmount()) > 0 ? Number(getTotalAmount()) + 2 : 0}</b>
            </div>
          </div>
          <Button 
          sx={{
            fontWeight: '600',
            marginTop: '30px',
            color: '#ff6600',
            '&:hover': {
              backgroundColor: '#ff6600', 
              color: '#fff', 
            },
          }}
          >
            PROCEED TO PAYMENT
          </Button>
        </div>
      </div>
      
    </form>
    </>
  )
}

export default PlaceOrder

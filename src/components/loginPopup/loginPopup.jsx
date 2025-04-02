import React, { useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import './loginPopup.css'

const LoginPopup = ({setShowLogin}) => {

    const [curentState, setCurentState] = useState('Loge In')

  return (
    <div className='login-popup'>
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{curentState}</h2>
                <CloseIcon onClick ={()=>setShowLogin(false)} />
            </div>
            <div className="login-popup-inputs">
                {curentState === 'Login' ? (
                    <>
                        <TextField
                            id="outlined-textarea-email"
                            label="Your Email"
                            placeholder="Placeholder"
                            multiline
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
                        <TextField
                            id="outlined-textarea-password"
                            label="Password"
                            placeholder="Placeholder"
                            multiline
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
                    </>
                ) : (
                    <>
                        <TextField
                            id="outlined-textarea-name"
                            label="Your Name"
                            placeholder="Placeholder"
                            multiline
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
                        <TextField
                            id="outlined-textarea-email"
                            label="Your Email"
                            placeholder="Placeholder"
                            multiline
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
                        <TextField
                            id="outlined-textarea-password"
                            label="Password"
                            placeholder="Placeholder"
                            multiline
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
                    </>
                )}
            </div>
            <Button 
                variant="contained"
                sx={{
                    backgroundColor: '#ff6600', 
                    '&:hover': {
                    backgroundColor: '#e65c00',
                    },
                }}
                >
                {curentState === 'Sign Up' ? 'Create account' : 'Login'}
            </Button>
        
            <div className="login-popup-condition">
            <Checkbox 
                defaultChecked 
                sx={{
                    '& .MuiSvgIcon-root': {
                    fill: 'grey',
                    },
                    '&.Mui-checked .MuiSvgIcon-root': {
                    fill: '#ff6600', 
                    },
                }}
                color="default" 
            />
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
            {curentState === 'Login'
            ? <p>Create a new account? <span onClick={()=>setCurentState('Sign Up')}>Click here</span></p>
            : <p>Already have an account? <span onClick={()=>setCurentState('Login')}>Login here</span></p>}
        </div>
    </div>
  )
}

export default LoginPopup

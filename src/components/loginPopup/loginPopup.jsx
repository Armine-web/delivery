import React, { useState } from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './loginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      ...(currentState === 'Sign Up' && { name }), 
    };

    try {
      if (currentState === 'Sign Up') {
        await axios.post('http://localhost:5001/users', userData);
        setMessage(`Hi ${name}, your account has been created successfully!`);
      } else {
        const response = await axios.get('http://localhost:5001/users');
        const user = response.data.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          setMessage('Login successful!');
        } else {
          setMessage('Invalid credentials!'); 
        }
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setMessage('An error occurred! Please try again later.'); 
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <CloseIcon onClick={() => setShowLogin(false)} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-popup-inputs">
            {currentState === 'Login' ? (
              <>
                <TextField
                  id="outlined-textarea-email"
                  label="Your Email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              margin: '20px 0',
              backgroundColor: '#ff6600',
              '&:hover': {
                backgroundColor: '#e65c00',
              },
            }}
            type="submit"
          >
            {currentState === 'Sign Up' ? 'Create account' : 'Login'}
          </Button>
        </form>

        {message && (
          <p
            style={{
              color: message.includes('successfully') ? 'green' : 'red',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {message}
          </p>
        )}

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
        {currentState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrentState('Login')}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;

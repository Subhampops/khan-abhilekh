import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { TextField, IconButton, InputAdornment, Button, Typography, Box } from '@mui/material';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative flex items-center right-32">
        {/* Left Image */}
        <img 
          src="/assets/accnt.png" 
          alt="Account" 
          className="hidden md:block h-100 lg:h-120 xl:h-148"
        />
        {/* Login Box */}
        <div className="absolute left-3/4 transform -translate-x-1/2 md:-translate-x-0 w-full max-w-md bg-white p-10 rounded-lg shadow-lg z-10">
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Login
          </Typography>
          <form>
            <Box mb={4}>
              <TextField 
                label="Email" 
                type="email" 
                fullWidth 
                placeholder="Enter your email" 
                variant="outlined" 
                size="small"
                sx={{ height: 50 }} // Increased height
              />
            </Box>
            <Box mb={4} position="relative">
              <TextField 
                label="Password" 
                type={showPassword ? "text" : "password"} 
                fullWidth 
                placeholder="Enter your password" 
                variant="outlined" 
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton 
                        edge="end" 
                        onClick={togglePasswordVisibility} 
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ height: 50 }} // Increased height
              />
            </Box>
            <Link to="/Shift">
              <Button 
                type="submit" 
                variant="contained" 
                sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: 'gray' } }} // Black color and hover effect
                fullWidth
              >
                Login
              </Button>
            </Link>
          </form>
        </div>
      </div>
      {/* Top Left Logo */}
      <img 
        src="/assets/logo2.png" 
        alt="Logo" 
        className="absolute top-0 left-0 m-4 h-12"
      />
    </div>
  );
};

export default Login;

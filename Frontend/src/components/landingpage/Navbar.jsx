import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <img
              src="./assets/logo.png"
              alt="Khan Abhilekh Logo"
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center space-x-8">
            {/* Buttons */}
            <Link to="/login">
              <button className="border border-white text-white px-10 py-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-black">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="border border-white text-white px-10 py-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-black">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

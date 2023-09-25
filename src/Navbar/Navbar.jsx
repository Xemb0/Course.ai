import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user from '../assets/img/user.png'

import icon from '../assets/img/icon.png'; // Correct way to import the image

function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  return (
    <div className="Container">
      <div className='logo'>
        <img src={icon} alt="Icon" /> {/* Use the imported image */}
      </div>
      <div className="Navbar">
        <ul className="Nav_ul">
          <li>Home</li>
          <li>Contact</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div className="SignUp">
      <img className='icon'src={user} alt="Icon" /> {/* Use the imported image */}
      </div>

      {/* Render Sign Up Form */}
      {showSignUp && (
        <div className="signup-form">
          {/* Your sign-up form JSX */}
        </div>
      )}

      {/* Render Login Form */}
      {showLogin && (
        <div className="login-form">
          {/* Your login form JSX */}
        </div>
      )}
    </div>
  );
}

export default Navbar;

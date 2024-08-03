import React, { useState, useEffect } from 'react';
import '../Css/header.css';
import logo from '../Images/logo.png';

export default function Header() {
  // Retrieve isLoggedIn state from local storage on component mount
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false);

  // Update local storage whenever isLoggedIn state changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const awareness = () => {
    window.location.href = '/awareness';
  };
  const home = () => {
    window.location.href = '/afterlogin';
  };
  const visitor = () => {
    window.location.href = '/';
  };
  const aboutus = () => {
    window.location.href = '/aboutus';
  };
  const afterlogin = () => {
    window.location.href = '/';
    setIsLoggedIn(!isLoggedIn);
  }
  const login = () => {
    window.location.href = '/login';
    setIsLoggedIn(!isLoggedIn);
  }
  
  return (
    <div className='bg'>
      <img src={logo} height={60} style={{position:'absolute' , right:'75%'}}/>
        <div className="button-container">
        { 
        !isLoggedIn ? (
        <button className="button" onClick={visitor}>
    <svg
      className="icon"
      stroke="currentColor"
      fill="currentColor"
    >
    </svg>Home
  </button>
    ):( 
    <button className="button" onClick={home}>
    <svg
      className="icon"
      stroke="currentColor"
      fill="currentColor"
    >
    </svg>Home
  </button>
    )
        }
  <button className="button" onClick={awareness}>
    <svg
      className="icon"
      stroke="currentColor"
      fill="currentColor"
    >
      
    </svg>Awareness
  </button>
  <button className="button" onClick={aboutus}>
    <svg
      className="icon"
      stroke="currentColor"
      fill="none"
    >
      
    </svg>AboutUs
  </button>
  {
    !isLoggedIn ? 
    (
  
<button className="button" onClick={login}>
  <svg
    className="icon"
    stroke="currentColor"
    fill="none"
  >
  </svg>SignIn
</button> ) : ( 
  
  <button className="button" onClick={afterlogin}>
    <svg
      className="icon"
      stroke="currentColor"
      fill="none"
    >
    </svg>Logout
  </button>
    )
  }
  
</div>

    </div>
  )
}

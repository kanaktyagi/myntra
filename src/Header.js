import React from 'react';
import  './Header.css';
import image from './image/myntra-vector-logo.png'

function Header() {
    return (
      <div>
      <nav className="header">  
          <img
          className="header__logo" 
          src={image}
          alt="image not available"
          />
        </nav>
      </div>
    )
}

export default Header

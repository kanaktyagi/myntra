import React from 'react';
import  './Css/Header.css';
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
          <div className="header__option"> 
          <span className="header__optionLineOne"><h4>RINGS</h4></span>
          <span className="header__optionLineOne"><h4>EARRINGS</h4></span>
          <span className="header__optionLineOne"><h4>GOLD COINS</h4></span>
          <span className="header__optionLineOne"><h4>CHAINS</h4></span>
          <span className="header__optionLineOne"><h4>OFFERS</h4></span>
          <div className="desktop__query">
          <input placeholder="Search for products, brands and more" className="desktop__searchBar" value=""></input>
          <div className="header__option"> 
          <span className="header__optionLineOne"><h4>PROFILE</h4></span>
          <span className="header__optionLineOne"><h4>WISHLIST</h4></span>
          <span className="header__optionLineOne"><h4>BAGS</h4></span>
          </div>
          </div>
          </div>
        </nav>
      </div>
    )
}

export default Header

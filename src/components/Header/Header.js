import React from 'react';
import'./Header.css'

const Header = () => {
  return (
    <div>
      <h1> Welcome in Rest Countries</h1>
      <nav>
        <a href="/home"> HOME</a>
        <a href="/about"> ABOUT</a>
        <a href="/countries">COUNTRIES</a>
      </nav>
    </div>
  );
};

export default Header;
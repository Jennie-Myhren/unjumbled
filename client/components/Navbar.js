import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  //TK: ADD DB & UPDATE
  const user = 'Jennie';
  const loggedIn = user === true;

  return (
    <div id="navbar">
      <div className="navContainer">
        <Logo />
        {user ? (
          <p className="navText">Welcome, {user}</p>
        ) : (
          <p className="navText">Welcome, Guest</p>
        )}
        {/* TK: MAKE THIS CLICKABLE! */}
        {loggedIn ? (
          <p className="navText">Sign Out</p>
        ) : (
          <p className="navText">Sign In</p>
        )}
        <p></p>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import React from 'react';

const Navbar = ({ children }) => {
  return (
    <div className="navbar-wrapper">
      {children}
    </div>
  );
};

export default Navbar;

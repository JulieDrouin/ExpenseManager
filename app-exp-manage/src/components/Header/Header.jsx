import React, { useState, useEffect } from "react";
import NavBar from './NavBar';
const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <header className="App-Header">
        <NavBar theme={theme} toggleTheme={toggleTheme}/>
      </header>
    </>
  );
};
export default Header;

import React, { useState, useEffect } from "react";
import Toggle from "./Toggler";
// font-family: 'Oswald', sans-serif;
const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <header className="App-Header" style={{backgroundColor : ""}}>
        <h1 style={{fontFamily: 'Oswald'}}>Gestionnaire de Dépenses</h1>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </header>
    </>
  );
};
export default Header;

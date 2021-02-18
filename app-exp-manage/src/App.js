// import "./App.css";
// import ModeDark from "../src/components/ModeDark";
import "./scss/styles.scss";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/UseDarkMode";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import FormDepens from "./components/FormDepens";
import FormBudget from "./components/FormBudget";
import "./App.css";
import Header from "./components/Header";
import { Form, Button, Card, Container, Col, Row } from "react-bootstrap";

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header theme={theme} toggleTheme={themeToggler} />
          <Container />
          <Row>
            <Col>
              <FormBudget style={{fontFamily: 'Oswald'}}/>
            </Col>
            <Col>
              <FormDepens style={{fontFamily: 'Oswald'}}/>
            </Col>
          </Row>
        </div>
      </>
    </ThemeProvider>
  );
};
export default App;

// import "./App.css";
// import ModeDark from "../src/components/ModeDark";
import "./scss/styles.scss";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/DarkMode/UseDarkMode";
import { GlobalStyles } from "./components/DarkMode/GlobalStyles";
import { lightTheme, darkTheme } from "./components/DarkMode/Theme";
import FormDepens from "./components/FormDepens";
import FormBudget from "./components/FormBudget";
import Header from "./components/Header/Header";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import { Form, Button, Card, Container, Col, Row } from "react-bootstrap";
import AllRoutes from "./components/router/AllRoutes";

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div className="App">
          <Header theme={theme} toggleTheme={themeToggler} />
          <Container>
            <AllRoutes/>
          {/* <Row>
            <Col>
              <FormBudget style={{ fontFamily: "Oswald" }} />
            </Col>
            <Col>
              <FormDepens style={{ fontFamily: "Oswald" }} />
            </Col>
          </Row> */}
          </Container>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;

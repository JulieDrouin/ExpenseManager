import "./scss/styles.scss";
import "./App.css";
import { React } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/DarkMode/UseDarkMode";
import { GlobalStyles } from "./components/DarkMode/GlobalStyles";
import { lightTheme, darkTheme } from "./components/DarkMode/Theme";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
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
            <AllRoutes />
          </Container>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import "./styles/app.css";
import theme from "./themes/theme.js";

import { Header, Footer, About } from "./components/component-index.js";

function App() {
  function TestDiv2(props) {
    return <div>{props.text}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* prettier-ignore */}
          <Route exact path="/" element={<About/>}></Route>
          {/* prettier-ignore */}
          <Route exact path="/projects" element={<TestDiv2 text="Projects" />}></Route>
          {/* prettier-ignore */}
          <Route exact path="/resume" element={<TestDiv2 text="Resume" />}></Route>
          {/* prettier-ignore */}
          <Route exact path="/contact" element={<TestDiv2 text="Contact" />}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

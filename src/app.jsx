import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import "./styles/app.css";
import theme from "./themes/theme.js";

import {
  Header,
  Footer,
  About,
  Projects,
  ProjectCard,
  Resume,
  Contact,
} from "./components/component-index.js";

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
          <Route path="/" element={<About/>}></Route>
          {/* prettier-ignore */}
          <Route path="/projects" element={<Projects/>}></Route>
          {/* prettier-ignore */}
          <Route path="/resume" element={<Resume/>}></Route>
          {/* prettier-ignore */}
          <Route path="/contact" element={<Contact/>}></Route>
          {/* Default */}
          {/* prettier-ignore */}
          <Route path="*" element={<About/>}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import "./styles/app.css";
import theme from "./themes/theme.js";

import { Header, Footer, About } from "./components/component-index.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <About />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

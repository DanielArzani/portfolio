import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import "./styles/app.css";
import theme from "./themes/theme.js";

import { Header } from "./components/component-index.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;

import { createTheme } from "@mui/material/styles";

const colors = {
  niceBlue: "hsl(210, 79%, 44%)",
};

const theme = createTheme({
  palette: {
    common: {
      blue: `${colors.niceBlue}`,
    },
    primary: {
      main: `${colors.niceBlue}`,
    },
    secondary: {
      main: `#444`,
    },
  },
  typography: {},
  // [Header/Footer]
  spacing: [48],
});

export default theme;

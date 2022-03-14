import { createTheme } from "@mui/material/styles";

const colors = {
  niceBlue: "hsl(210, 79%, 44%)",
};

const theme = createTheme({
  palette: {
    common: {
      blue: `${colors.niceBlue}`,
      gray: `#444`,
    },
    primary: {
      main: `${colors.niceBlue}`,
    },
  },
  typography: {},
  // [Header/Footer,,,]
  spacing: [48, 0, 0, 0],
});

export default theme;

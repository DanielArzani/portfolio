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
  },
  typography: {},
});

export default theme;

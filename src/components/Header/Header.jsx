import React from "react";
import { AppBar, Button, useTheme, Tab, Tabs, Toolbar } from "@mui/material";
import {
  AccountCircle,
  Article,
  ContactMail,
  Folder,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

function Header() {
  /**-------------------------
   **        STATES
   *------------------------**/
  // Value is the currently active tab
  const [value, setValue] = React.useState(0);

  /**-------------------------
   **     EVENT HANDLERS
   *------------------------**/
  // When a tab is clicked, the currently active tab will change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /**-------------------------
   **        STYLES
   *------------------------**/
  const theme = useTheme();
  const useStyles = makeStyles((theme) => ({
    appBar: {
      "&.MuiAppBar-root": {
        boxShadow: "none",
        padding: "3rem",
        borderBottom: `1px solid ${theme.palette.common.blue}`,
      },
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
    },
    headerTitleStyles: {
      color: theme.palette.primary,
      "&.MuiButton-root": {
        fontSize: "2.5rem",
        "&:hover": {
          background: "none",
        },
      },
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      "&.MuiTab-root": {
        fontSize: "1.2rem",
      },
      marginLeft: "25px",
      minWidth: ".625rem",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} color="transparent">
        <Toolbar disableGutters>
          <Button
            disableRipple
            variant="text"
            className={classes.headerTitleStyles}
          >
            Daniel Arzanipour
          </Button>
          <Tabs
            className={classes.tabContainer}
            value={value}
            onChange={handleChange}
            aria-label="portfolio tabs"
          >
            <Tab
              className={classes.tab}
              icon={<AccountCircle style={{ fontSize: "2.2rem" }} />}
              label="About Me"
            ></Tab>
            <Tab
              className={classes.tab}
              icon={<Folder style={{ fontSize: "2.2rem" }} />}
              label="Portfolio"
            ></Tab>
            <Tab
              className={classes.tab}
              icon={<Article style={{ fontSize: "2.2rem" }} />}
              label="Resume"
            ></Tab>
            <Tab
              className={classes.tab}
              icon={<ContactMail style={{ fontSize: "2.2rem" }} />}
              label="Contact"
            ></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;

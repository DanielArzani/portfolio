import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

function Footer() {
  /**-------------------------
   **     EVENT HANDLERS
   *------------------------**/
  function handleChange(url) {
    window.open(url, "_blank");
  }

  /**-------------------------
   **        STYLES
   *------------------------**/
  const useStyles = makeStyles((theme) => ({
    footer: {
      display: "flex",
      gap: ".5rem",
      borderTop: `1px solid ${theme.palette.common.blue}`,
      padding: theme.spacing(1),
      marginTop: "8rem",
    },
    footerIcons: {
      "&.MuiSvgIcon-root": {
        cursor: "pointer",
        fontSize: "3rem",
        position: "relative",
        left: "50%",
        transform: "translateX(-200%)",
      },
    },
  }));
  const classes = useStyles();

  return (
    <>
      <Box className={classes.footer}>
        <LinkedIn
          className={classes.footerIcons}
          onClick={() => {
            handleChange("https://www.linkedin.com/in/daniel-arzanipour");
          }}
        />
        <GitHub
          className={classes.footerIcons}
          onClick={() => {
            handleChange("https://github.com/danielarzani");
          }}
        />
      </Box>
    </>
  );
}

export default Footer;

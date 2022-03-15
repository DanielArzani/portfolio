import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

function About() {
  function lorem() {
    const intro = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
    odit voluptatum nam pariatur officiis cumque amet, veniam cum
    officia eum quia voluptatem minus molestias sit sunt quis delectus
   `;
    return intro;
  }
  /**-------------------------
   **        Hooks
   *------------------------**/
  const matches = useMediaQuery("max-width: 1040px");
  /**-------------------------
   **        STYLES
   *------------------------**/
  const useStyles = makeStyles((theme) => ({
    container: {
      "&.MuiContainer-root": {
        width: "1000px",
        [theme.breakpoints.down("aboutPage")]: {
          width: "100%",
        },
      },
    },
    card: {
      display: "flex",
      alignItems: "flex-start",
      maxHeight: "60rem",
      // maxWidth: "1400px",
      [theme.breakpoints.down("aboutPage")]: {
        flexDirection: "column-reverse",
      },
    },
    cardContent: {
      "&.MuiTypography-h5": {
        fontSize: "1.8rem",
        fontWeight: 500,
      },

      "&.MuiTypography-subtitle1": {
        color: theme.palette.common.gray,
        fontSize: "1.5rem",
        lineHeight: "1.4",
      },
    },

    cardMedia: {
      borderRadius: "20px",
      [theme.breakpoints.down("aboutPage")]: {
        height: "300px",
      },
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              className={classes.cardContent}
            >
              Hi, I'm Daniel, a FullStack Developer
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              className={classes.cardContent}
            >
              {lorem()}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="Daniel Arzanipour"
            height="400"
            image={require("../../assets/photos/Daniel.jpg")}
          ></CardMedia>
        </Card>
      </Container>
    </>
  );
}

export default About;

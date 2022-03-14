import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
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
   **        STYLES
   *------------------------**/
  //   const theme = useTheme();
  const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      maxHeight: "30rem",
    },
    cardContent: {
      "&.MuiTypography-h5": {
        fontWeight: 500,
      },

      "&.MuiTypography-subtitle1": {
        color: theme.palette.common.gray,
      },
    },

    cardMedia: {
      borderRadius: "20px",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
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
              component="p"
              className={classes.cardContent}
            >
              {lorem()}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="Daniel Arzanipour"
            height="300"
            image={require("../../assets/photos/Daniel.jpg")}
          ></CardMedia>
        </Card>
        {/* <h3>Hi, I'm Daniel, a FullStack Developer</h3>
        <p>{lorem()}</p>
        <img
          src={require("../../assets/photos/Daniel.jpg")}
          alt="Daniel Arzanipour"
        /> */}
      </Container>
    </>
  );
}

export default About;

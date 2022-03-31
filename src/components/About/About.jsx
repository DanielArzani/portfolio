import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

function About() {
  /**-------------------------
   **        Hooks
   *------------------------**/
  /**-------------------------
   **        STYLES
   *------------------------**/
  const useStyles = makeStyles((theme) => ({
    container: {
      "&.MuiContainer-root": {
        display: "flex",

        width: "1000px",
        [theme.breakpoints.down("aboutPage")]: {
          width: "100%",
        },
      },
      "&.MuiPaper-root": {
        borderRadius: "20px",
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
      borderRadius: "1.25rem",
      height: "500px",
      "&.MuiCardMedia-root": {
        minWidth: "18.75rem",
      },
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
              Born in and currently living in Toronto, I started coding in early
              september 2021, and after starting, I spent everyday, all day,
              either going through courses on Udemy, reading up on
              documentation, watching coding related youtube videos or just
              coding. It was up to the point where it occupied my thoughts even
              when I wasn't coding, after a few months, I was able to stop this
              kind of lifestyle. Now, I still spend a lot of my time with coding
              related things but I take breaks now and I don't touch my computer
              at all on sundays.
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

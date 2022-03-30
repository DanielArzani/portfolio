import React from "react";
// import { Box, Container, Link } from "@mui/material";
// import { makeStyles } from "@mui/styles";

import "../../styles/projects.css";

function Projects() {
  //! I wasn't able to apply some critical styles for this to work, thus I decided just to do this component without MUI, in the future I will find out what went wrong (when I get more experience with this)

  /**-------------------------
   **         DATA
   *------------------------**/
  // Projects
  const projectData = [
    {
      img: require("../../assets/screenshots/gallery-img-1.png"),
      alt: "blog website",
      url: "https://github.com/DanielArzani/deep-thoughts",
      title: "Deep-Thoughts",
      description:
        "A blog website made with the MERN stack + Graphql and Apollo as well as uses JWT's for authentication",
    },
    {
      img: require("../../assets/screenshots/gallery-img-2.png"),
      alt: "PWA budget tracker",
      url: "https://github.com/DanielArzani/budget-tracker-pwa",
      title: "Budget Tracker",
      description:
        "A progressive Web App (PWA) that uses service workers, indexedDB and MongoDB for offline data persistance",
    },
    {
      img: require("../../assets/screenshots/gallery-img-3.png"),
      alt: "Social Blog Site",
      url: "https://github.com/DanielArzani/tech-journal",
      title: "Tech Journal",
      description:
        "A tech blog that uses Node.js, sequelize (an ORM for sql) and session storage for data persistance",
    },
    {
      img: require("../../assets/screenshots/gallery-img-4.png"),
      alt: "4",
      url: "https://github.com/DanielArzani/deep-thoughts",
      title: "M.Impossible",
      description:
        "A charity site built using Performant JS, a NoSQL database, service workers, we also used Apollo GraphQL, JWT for Authentication.",
    },
    {
      img: require("../../assets/screenshots/gallery-img-2.png"),
      alt: "5",
      url: "https://github.com/DanielArzani/deep-thoughts",
      title: "Project 5",
      description: "Daniel Arzanipour",
    },
    {
      img: require("../../assets/screenshots/gallery-img-3.png"),
      alt: "6",
      url: "https://github.com/DanielArzani/deep-thoughts",
      title: "Project 6",
      description: "Daniel Arzanipour",
    },
  ];

  /**-------------------------
   **       STYLES
   *------------------------**/
  // const useStyles = makeStyles((theme) => ({
  //   container: {
  //     "&.MuiContainer-root": {
  //     },
  //   },
  //   box: {},
  //   link: {
  //     "&.MuiLink-root": {},
  //   },
  //   img: {
  //   },
  //   title: {},
  //   description: {},
  // }));
  // const classes = useStyles();

  /**-------------------------
   **       HELPERS
   *------------------------**/
  // create random id
  const UUID = (length = 6) => Math.random().toString(20).substr(2, length);

  return (
    <section className="section--projects">
      <div className="section--projects__gallery">
        {projectData.map((project) => {
          return (
            <a
              key={UUID()}
              className="section--projects__gallery--gallery-link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="section--projects__gallery--project-img"
                src={project.img}
                alt={project.alt}
              />
              <h3 className="section--projects__gallery--project-name">
                {project.title}
              </h3>
              <p className="section--projects__gallery--project-description">
                {project.description}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

//  <Container maxWidth="lg" className={classes.container}>
// {projectData.map((project) => {
//   return (
//     <Box className={classes.box} key={UUID()}>
//       <Link
//         className={classes.link}
//         href={project.url}
//         target="_blank"
//         rel="no-referrer"
//       >
//         <img
//           className={classes.img}
//           src={project.img}
//           alt={project.alt}
//         />
//         <h3 className={classes.title}>{project.title}</h3>
//         <p className={classes.description}>{project.description}</p>
//       </Link>
//     </Box>
//   );
// })}
// </Container>

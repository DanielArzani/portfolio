import React from 'react';
import { Box, Container, useMediaQuery } from '@mui/material';
// import { makeStyles } from "@mui/styles";

import { ProjectCard } from './ProjectCard';

import '../../styles/projects.css';

function Projects() {
  /**-------------------------
   **         DATA
   *------------------------**/
  // Projects
  const projectData = [
    {
      img: require('../../assets/screenshots/gallery-img-1.png'),
      alt: 'blog website',
      url: 'https://github.com/DanielArzani/deep-thoughts',
      title: 'Deep-Thoughts',
      description:
        "A blog website made with the MERN stack + Graphql and Apollo as well as uses JWT's for authentication",
    },
    {
      img: require('../../assets/screenshots/gallery-img-2.png'),
      alt: 'PWA budget tracker',
      url: 'https://github.com/DanielArzani/budget-tracker-pwa',
      title: 'Budget Tracker',
      description:
        'A progressive Web App (PWA) that uses service workers, indexedDB and MongoDB for offline data persistance',
    },
    {
      img: require('../../assets/screenshots/gallery-img-3.png'),
      alt: 'Social Blog Site',
      url: 'https://github.com/DanielArzani/tech-journal',
      title: 'Tech Journal',
      description:
        'A tech blog that uses Node.js, sequelize (an ORM for sql) and session storage for data persistance',
    },
    {
      img: require('../../assets/screenshots/gallery-img-4.png'),
      alt: 'charity site',
      url: 'https://github.com/Fabscg/group-3-project',
      title: 'Mission Impossible',
      description:
        "A charity site and PWA built using Performant JS, a NoSQL database (MongoDB), service workers for offline integration, Apollo GraphQL, and JWT's for Authentication and stripe for payment processing",
    },
    {
      img: require('../../assets/screenshots/gallery-img-5.png'),
      alt: 'online zoo catalog',
      url: 'https://github.com/DanielArzani/zookeepr',
      title: 'Zookeepr',
      description:
        'An online catalog for a zoo in which you can add your own animals and zoo keepers,a static site built using Nodejs and express with all data stored on the client its self ',
    },
    {
      img: require('../../assets/screenshots/gallery-img-6.png'),
      alt: 'food festival site',
      url: 'https://github.com/DanielArzani/food-festival',
      title: 'Food Festival',
      description:
        'An existing site which has been turned into a PWA which can function without internet connectivity and has been optimized using webpack to increase performance and efficiency',
    },
  ];

  /**-------------------------
   **       STYLES
   *------------------------**/
  const matches = useMediaQuery('(max-width:1312px)');

  /**-------------------------
   **       HELPERS
   *------------------------**/
  // create random id
  const UUID = (length = 6) => Math.random().toString(20).substr(2, length);
  return (
    <Container maxWidth='false' sx={{ maxWidth: '93.75rem' }}>
      {!matches && (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
            justifyContent: 'space-between',
          }}
        >
          {projectData.map(({ img, alt, url, title, description }) => {
            return (
              <ProjectCard
                maxWidth='400px'
                key={UUID()}
                img={img}
                alt={alt}
                url={url}
                title={title}
                description={description}
              />
            );
          })}
        </Box>
      )}
      {/* If screen size = 1312px return this */}
      {matches && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {projectData.map(({ img, alt, url, title, description }) => {
            return (
              <ProjectCard
                maxWidth='500px'
                key={UUID()}
                img={img}
                alt={alt}
                url={url}
                title={title}
                description={description}
              />
            );
          })}
        </Box>
      )}
    </Container>
  );
}

export { Projects };

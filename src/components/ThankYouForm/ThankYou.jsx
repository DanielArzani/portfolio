import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const STYLES = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#444',
  },
  paragraph: {
    color: '#444',
    fontSize: '1rem',
  },
};

function ThankYou() {
  return (
    <>
      <Container sx={STYLES.container} maxWidth='sm'>
        <Box sx={STYLES.box}>
          <Typography sx={STYLES.header} variant='h1' component='h1'>
            Thank You
          </Typography>
          <Typography sx={STYLES.paragraph} variant='p' paragraph>
            I'll get back to you as soon as possible!
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default ThankYou;

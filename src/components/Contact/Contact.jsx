import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function Contact() {
  return (
    <Container sx={{ padding: "0 5rem" }}>
      <Typography component="h3" variant="h3">
        Contact Me
      </Typography>
      <Box
        component={"form"}
        action="https://formsubmit.co/daniel.arzanipour@gmail.com"
        method="POST"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "3rem",
          maxWidth: "30rem",
        }}
      >
        <TextField
          name="name"
          id="name"
          label="required"
          variant="outlined"
          fullWidth
          placeholder="Daniel"
          helperText="Your Name Please"
          required
        />
        <TextField
          name="email"
          id="name"
          label="required"
          variant="outlined"
          fullWidth
          placeholder="email@gmail.com"
          helperText="Your Email Please"
          required
        />
        <TextField
          name="message"
          id="message"
          label="required"
          placeholder="Press Enter for more space"
          multiline
          maxRows={8}
          fullWidth
          helperText="Your Message Please"
          required
        />
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;

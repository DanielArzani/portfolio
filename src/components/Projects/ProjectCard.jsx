import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";

function ProjectCard({ img, alt, url, title, description, maxWidth }) {
  return (
    <Card sx={{ maxWidth: { maxWidth } }}>
      <CardHeader title={title} />
      <CardMedia component="img" height="194" image={img} alt={alt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <Link
            color={"inherit"}
            href={url}
            target={"_blank"}
            rel="no_referrer"
          >
            <GitHub fontSize="large" />
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export { ProjectCard };

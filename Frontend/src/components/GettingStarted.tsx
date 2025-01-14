import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import { strings } from "../data/strings";

const GettingStarted = () => {
  const { title, description, features } = strings.section;

  return (
    <Box sx={{ width: "100%", py: 10, bgcolor: "primary.dark", color: "text.primary" }}>
      <Typography variant="h2" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
        {title}
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        {description}
      </Typography>
      <List sx={{ px: 3 }}>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ mb: 2 }}>
            {feature}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GettingStarted;

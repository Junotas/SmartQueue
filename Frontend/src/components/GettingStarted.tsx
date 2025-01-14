import React from "react";
import { Box, Typography, List, ListItem, Divider, Button } from "@mui/material";
import { strings } from "../data/strings";

const GettingStarted = () => {
  const { title, description, features, buttonText } = strings.section;

  return (
    <Box
      sx={{
        width: "100%",
        py: 20,
        px: 10,
        bgcolor: "primary.dark",
        color: "text.primary",
        boxShadow: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 6 }}>
        {description}
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <List sx={{ px: 3, display: "inline-block", textAlign: "left" }}>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ mb: 2, display: "list-item" }}>
            {feature}
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mt: 4, mb: 4 }} />
      <Button variant="contained" color="primary" size="large">
        {buttonText}
      </Button>
    </Box>
  );
};

export default GettingStarted;

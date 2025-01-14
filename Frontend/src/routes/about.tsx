import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {Typography, useTheme, Box } from "@mui/material";

export const Route = createFileRoute("/about")({
  component: () => {
    const theme = useTheme();

    return (
      <Box
        className="flex flex-col justify-center items-center min-h-screen"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.primary,
            marginBottom: theme.spacing(4),
          }}
        >
          🚧 Under Construction 🚧
        </Typography>
      </Box>
    );
  },
});

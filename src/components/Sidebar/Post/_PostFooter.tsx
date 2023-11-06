import React from "react";
import { Box, FormControlLabel, Switch, Button } from "@mui/material";

export const PostFooter = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="To Post"
        control={
          <Switch
            color="warning"
            onChange={(e) => console.log("Hello")}
            sx={{ fontSize: "2px" }}
          />
        }
      />
      <Button
        variant="outlined"
        size="small"
        color="primary"
        sx={{ color: "#fff", fontSize: "11px" }}
      >
        Posted!
      </Button>
    </Box>
  );
};

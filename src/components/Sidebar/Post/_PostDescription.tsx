import React, { FC } from "react";
import { TextField } from "@mui/material";
import { Text } from "./Types/TTextField";

export const Feature: FC<Text> = () => {
  return (
    <TextField
      id="description"
      label="Description"
      size="small"
      margin="dense"
      fullWidth
      sx={{ padding: "0 0.5rem" }}
      color="secondary"
      focused
    />
  );
};

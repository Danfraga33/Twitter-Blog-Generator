import React, { FC, useState } from "react";
import { TextField } from "@mui/material";
import { Text } from "./Types/TTextField";

export const Feature: FC<Text> = () => {
  const [dummy, setDummy] = useState("Dummy Value");
  return (
    <TextField
      id="description"
      label="Post"
      size="small"
      margin="none"
      fullWidth
      sx={{ textColor: "#fff" }}
      color="secondary"
      focused
      value={dummy}
      inputProps={{ style: { color: "#fff" } }}
    />
  );
};

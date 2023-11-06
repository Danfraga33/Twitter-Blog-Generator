import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

export const PostHeader = () => {
  return (
    <Box display="flex" justifyContent="space-between" mb={2} width="100%">
      <div className="flex flex-col">
        <Stack>
          <Typography color="primary" variant="subtitle1">
            Topic
          </Typography>
          <Typography color="success" variant="subtitle2">
            Keywords
          </Typography>
        </Stack>
      </div>
      {/* 
      <Box>
        <Chip
          size="small"
          color="secondary"
          variant="outlined"
          label={new Date().toLocaleString()}
        />
      </Box> */}
    </Box>
  );
};

import React from "react";
// import { Feature } from "./_PostDescription";
import { Box } from "@mui/system";
import { PostFooter } from "./_PostFooter";
import { PostHeader } from "./_PostHeader";
import { Feature } from "./_PostDescription";

export const Post = () => {
  return (
    <div>
      <Box
        display="flex"
        width="100%"
        justifyContent="flex-start"
        flexDirection="column"
        mb={2}
        p={1}
        sx={{
          width: "100%",
          backgroundColor: "background.paper",
          border: "1px solid",
        }}
      >
        <PostHeader />
        <Feature />
        <PostFooter />
      </Box>
    </div>
  );
};

import React, { ReactElement } from "react"; // eslint-disable-line
import AppLayout from "../../components/Applayout";
import { ThemeProvider, CssBaseline, Grid } from "@mui/material";
import { customTheme } from "../../Theme/customTheme";

function Twitter() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Grid
        container
        p={0}
        m={0}
        sx={{
          background: customTheme.palette.background.paper,
          minHeight: "100vh",
        }}
      >
        <p>twitter</p>
      </Grid>
    </ThemeProvider>
  );
}

Twitter.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <AppLayout>{page}</AppLayout>
    </div>
  );
};

export default Twitter;

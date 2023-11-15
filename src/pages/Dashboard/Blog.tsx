import AppLayout from "../../components/Applayout";
import React, { ReactElement } from "react"; // eslint-disable-line
import { ThemeProvider, CssBaseline, Grid, TextField } from "@mui/material";
import { customTheme } from "../../Theme/customTheme";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import { NextPageWithLayout } from "../_app";

const Blog: NextPageWithLayout = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <Grid
        p={4}
        m={0}
        sx={{
          background: customTheme.palette?.background?.paper,
          minHeight: "100vh",
          Width: "100vw",
          xs: 2,
          md: 3,
        }}
      >
        <Stack spacing={2}>
          <h2>Blog Generator</h2>

          <TextField
            id="topic"
            name="topic"
            label="Topic"
            fullWidth
            rows={4}
            onChange={(e) => {
              console.log(e.target.value);
            }}
            required
          />
          <TextField
            id="Keywords"
            name="Keywords"
            label="Keywords"
            fullWidth
            size="small"
            multiline
            rows={2}
            onChange={(e) => {
              console.log(e.target.value);
            }}
            sx={{ width: "100%" }}
          />
          <Button
            variant="outlined"
            startIcon={<SmartToyIcon />}
            size="large"
            color="secondary"
          >
            Generate
          </Button>
          <div className="mt-8">
            <div className="flex gap-2 py-2">
              <h2>Results</h2>
            </div>

            <TextField fullWidth sx={{ width: "100%" }} disabled multiline />
          </div>
          <Button variant="outlined" size="large" color="secondary">
            Save
          </Button>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <AppLayout>{page}</AppLayout>
    </div>
  );
};

export default Blog;

import React, { ReactElement, useState } from "react"; // eslint-disable-line
import AppLayout from "../../components/Applayout";
import { ThemeProvider, CssBaseline, Grid, TextField } from "@mui/material";
import { customTheme } from "../../Theme/customTheme";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function Twitter() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  async function handleFetch() {
    if (topic) {
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topic),
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        setResult(json);
      } else {
        console.error("Error:", response.statusText);
      }
    }
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <Grid
        p={4}
        m={0}
        sx={{
          background: customTheme.palette.background.paper,
          minHeight: "100vh",
          Width: "100vw",
          xs: 2,
          md: 3,
        }}
      >
        <Stack spacing={2}>
          <h2>Twitter Generator</h2>
          <TextField
            id="topic"
            name="topic"
            label="Topic"
            fullWidth
            rows={4}
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
            required
          />

          {/* <TextField
            id="Keywords"
            name="Keywords"
            label="Keywords"
            fullWidth
            size="small"
            multiline
            rows={4}
            sx={{ width: "100%" }}
          /> */}
          <Button
            variant="outlined"
            startIcon={<SmartToyIcon />}
            size="large"
            color="secondary"
            onClick={handleFetch}
          >
            Generate
          </Button>

          <div className="mt-8">
            <div className="flex gap-2 py-2">
              <h2>Results</h2>
              <span>
                <button>
                  {result && <ContentCopyIcon fontSize="small" />}
                </button>
              </span>
            </div>
            <TextField
              fullWidth
              sx={{ width: "100%" }}
              disabled
              multiline
              value={result}
            />
          </div>
        </Stack>
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

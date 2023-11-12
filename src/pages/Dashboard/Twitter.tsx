import React, { ReactElement, useState } from "react"; // eslint-disable-line
import AppLayout from "../../components/Applayout";
import { ThemeProvider, CssBaseline, Grid, TextField } from "@mui/material";
import { customTheme } from "../../Theme/customTheme";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DoneIcon from "@mui/icons-material/Done";
import { TwitterShareButton } from "react-share";
import { useUser } from "@clerk/nextjs";

function Twitter() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [copiedText, setCopiedText] = useState(false);

  const { user } = useUser();

  async function handleFetch() {
    if (topic) {
      const response = await fetch("/api/openAI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topic),
      });
      if (response.ok) {
        const json = await response.json();
        setResult(json);
      } else {
        console.error("Error:", response.statusText);
      }
    }
  }

  const dataToBeInserted = {
    userid: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    topic: topic,
    result: result,
  };

  async function MongoDB() {
    const response = await fetch("/api/DB", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBeInserted),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("Tweet stored successfully");
    } else {
      console.error("Error storing Post:");
    }
  }

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
                <CopyToClipboard
                  text={result}
                  onCopy={() => setCopiedText(true)}
                >
                  <Button>
                    {result && <ContentCopyIcon fontSize="small" />}
                  </Button>
                </CopyToClipboard>
                {copiedText ? <DoneIcon color="primary" /> : null}
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
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            onClick={MongoDB}
            disabled={!result}
          >
            Save
          </Button>

          <TwitterShareButton
            url={"https://twitter.com"}
            title={result}
            disabled={!result}
          >
            Share on Twitter
          </TwitterShareButton>
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

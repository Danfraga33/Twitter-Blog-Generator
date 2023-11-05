import React, { useState, ReactElement } from "react"; // eslint-disable-line
import AppLayout from "../../components/Applayout";
import { NextPageWithLayout } from "../_app";
import { ThemeProvider, CssBaseline, Grid } from "@mui/material";
import { customTheme } from "../../Theme/customTheme";

const Home: NextPageWithLayout = () => {
  const [topic, setTopic] = useState("");

  async function handleFetch() {
    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(topic),
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json);
    } else {
      console.error("Error:", response.statusText);
    }
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Grid minHeight="100vh" p={0} m={0}>
        <label htmlFor="topic">Topic</label>
        <input
          id="topic"
          placeholder="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        ></input>
        <button onClick={handleFetch}>Generate</button>
      </Grid>
    </ThemeProvider>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <AppLayout>{page}</AppLayout>
    </div>
  );
};

export default Home;

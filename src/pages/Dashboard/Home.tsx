import React, { useState, ReactElement } from "react";
import AppLayout from "../../components/Applayout";
import { NextPageWithLayout } from "../_app";
import { createTheme, Paper } from "@mui/material";

// const customTheme: ThemeOptions = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       light: "rgba(168,85,247,.80)",
//       main: "rgba(168,85,247,.65)",
//       dark: "rgba(168,85,247,.28)",
//     },
//     background: {
//       paper: "#151515",
//       default: "rgba(0,0,0.96)",
//     },
//   },
// });

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
    <Paper>
      <label htmlFor="topic">Topic</label>
      <input
        id="topic"
        placeholder="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      ></input>
      <button onClick={handleFetch}>Generate</button>
    </Paper>
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

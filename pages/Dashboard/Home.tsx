import { useState } from "react";
import AppLayout from "../../components/Applayout";
import React, { FC, ComponentType, ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { NextPageWithLayout } from "../_app";

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
    <div>
      <label htmlFor="topic">Topic</label>
      <input
        id="topic"
        placeholder="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      ></input>
      <button onClick={handleFetch}>Generate</button>
    </div>
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

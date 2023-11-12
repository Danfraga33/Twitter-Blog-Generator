import AppLayout from "../../components/Applayout";
import React from "react"; // eslint-disable-line
import { NextPageWithLayout } from "../_app";
import { customTheme } from "../../Theme/customTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import TollIcon from "@mui/icons-material/Toll";

const TokenTopup: NextPageWithLayout = () => {
  const handleClick = async () => {
    const response = await fetch("/api/addTokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    window.location.href = result.session.url;
  };
  return (
    <div className="flex justify-center items-center h-full bg-[#151515]">
      <Stack>
        <div
          style={{
            fontSize: "12rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <span className="text-green-500">0</span>
          {""}
          <span style={{ fontSize: "3rem" }}>TOKENS</span>
        </div>
        <Button
          onClick={handleClick}
          className="bg-gray-200 flex justify-center"
          style={{
            color: "rgb(76, 175, 80)",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Add 10 Tokens <TollIcon className="ml-1" />
        </Button>
      </Stack>
    </div>
  );
};

TokenTopup.getLayout = function getLayout(page) {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <div>
        <AppLayout>{page}</AppLayout>
      </div>
    </ThemeProvider>
  );
};

export default TokenTopup;

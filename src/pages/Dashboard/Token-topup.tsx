import AppLayout from "../../components/Applayout";
import React from "react"; // eslint-disable-line
import { NextPageWithLayout } from "../_app";
import { customTheme } from "../../Theme/customTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";

const TokenTopup: NextPageWithLayout = () => {
  const handleClick = async () => {
    const response = await fetch("/api/addTokens", {
      method: "POST",
    });
    const result = await response.json();
    console.log(result);
    window.location.href = result.session.url;
  };
  return (
    <div>
      <div>this is the token-topup page</div>
      <button onClick={handleClick} className="p-2 ml-5 bg-blue-500">
        click me
      </button>
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

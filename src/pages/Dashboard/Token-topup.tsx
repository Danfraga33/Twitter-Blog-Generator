import AppLayout from "../../components/Applayout";
import React from "react"; // eslint-disable-line
import { NextPageWithLayout } from "../_app";
import { customTheme } from "../../Theme/customTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";

const TokenTopup: NextPageWithLayout = () => {
  return (
    <div>
      <div>this is the token-topup page</div>
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

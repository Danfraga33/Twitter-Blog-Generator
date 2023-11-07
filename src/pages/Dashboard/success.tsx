import AppLayout from "../../components/Applayout";
import React from "react"; // eslint-disable-line
import { NextPageWithLayout } from "../_app";
import { customTheme } from "../../Theme/customTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";

const Success: NextPageWithLayout = () => {
  return (
    <div>
      <div>Thank you for your purchase</div>
    </div>
  );
};

Success.getLayout = function getLayout(page) {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <div>
        <AppLayout>{page}</AppLayout>
      </div>
    </ThemeProvider>
  );
};

export default Success;

import AppLayout from "../../components/Applayout";
import React from "react"; // eslint-disable-line
import { NextPageWithLayout } from "../_app";
import { customTheme } from "../../Theme/customTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";

const Success: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <DownloadDoneIcon
        color="success"
        fontSize="medium"
        sx={{ fontSize: 30 }}
      />
      <h1 className="text-xl">Thank you for your purchase</h1>
      <br />
      <h1 className="text-md w-[600px] text-center italic">
        &quot; Remembering that you are going to die is the best way I know to
        avoid the trap of thinking you having something to lose. You are already
        naked. There is no reason not to follow your heart &quot; - Steve Jobs
      </h1>
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

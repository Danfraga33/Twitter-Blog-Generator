import AppLayout from "../../components/Applayout";
import React from "react";
import { NextPageWithLayout } from "../_app";

const TokenTopup: NextPageWithLayout = () => {
  return (
    <div>
      <div>this is the token-topup page</div>
    </div>
  );
};

TokenTopup.getLayout = function getLayout(page) {
  return (
    <div>
      <AppLayout>{page}</AppLayout>
    </div>
  );
};

export default TokenTopup;

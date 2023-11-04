import AppLayout from "../../components/Applayout";
import React, { FC, ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const TokenTopup: NextPageWithLayout = () => {
  return (
    <div>
      <div>this is the token-topup page</div>
    </div>
  );
};

type FunctionThatReturnsANumber = (a: number, b: number) => number;

const substract = (a: number, b: number): number => {
  return a - b;
};

const anotherSubtract: FunctionThatReturnsANumber = (a, b) => {
  return a - b;
};

type MyComponentProps = {
  message?: string;
};

const MyComponent: FC<MyComponentProps> = ({ message }) => {
  return <div>{message}</div>;
};

TokenTopup.getLayout = function getLayout(page) {
  return (
    <div>
      <AppLayout>{page}</AppLayout>
    </div>
  );
};

export default TokenTopup;

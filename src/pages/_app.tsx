import "../../styles/globals.css";
import React, { FC, ReactNode, ReactElement } from "react"; // eslint-disable-line
import { AppProps } from "next/app";
import { NextPage } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode; // eslint-disable-line
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FC<AppProps> = ({ Component }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ClerkProvider>
      <Component />
    </ClerkProvider>,
  );
};

export default App;

import "../../styles/globals.css";
import React, { FC, ReactNode, ReactElement } from "react"; // eslint-disable-line
import { AppProps } from "next/app";
import { NextPage } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Roboto } from "next/font/google";
import connectDB from "../components/Utils/connectMongo";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode; // eslint-disable-line
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FC<AppProps> = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "iconButton",
            termsPageUrl: "https://clerk.com/terms",
          },
        }}
        {...pageProps}
      >
        <main className={roboto.className}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      </ClerkProvider>
    </>
  );
};

export default App;

import "../../styles/globals.css";
import React, { FC, ReactNode, ReactElement } from "react"; // eslint-disable-line
import { AppProps } from "next/app";
import { NextPage } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import AppLayout from "../components/Applayout";

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
        {getLayout(<Component {...pageProps} />)}
      </ClerkProvider>
    </>
  );
};

export default App;

// import "../../styles/globals.css";
// import React, { FC, ReactNode, ReactElement } from "react"; // eslint-disable-line
// import { AppProps } from "next/app";
// import { NextPage } from "next";
// import { ClerkProvider } from "@clerk/nextjs";
// import AppLayout from "../components/Applayout";

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode; // eslint-disable-line
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

// const App: FC<AppProps> = ({ Component, pageProps }: AppPropsWithLayout) => {
//   // const getLayout = Component.getLayout ?? ((page) => page);

//   return (
//     <ClerkProvider {...pageProps}>
//       <AppLayout>
//         <Component {...pageProps} />
//       </AppLayout>
//     </ClerkProvider>
//   );
// };

// export default App;

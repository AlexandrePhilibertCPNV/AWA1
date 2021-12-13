import React, { PropsWithChildren, useEffect } from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import Head from "next/head";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "src/styles/tailwind.css";

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const Layout =
    Component.layout ||
    (({ children }: PropsWithChildren<{}>) => <>{children}</>);

  useEffect(() => {
    let comment = document.createComment(`

    =========================================================
    * Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
    =========================================================
    
    * Product Page: https://www.creative-tim.com/product/notus-nextjs
    * Copyright 2021 Creative Tim (https://www.creative-tim.com)
    * Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)
    
    * Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation
    
    * Coded by Creative Tim
    
    =========================================================
    
    * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
  `);
    document.insertBefore(comment, document.documentElement);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Notus NextJS by Creative Tim</title>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
      </Head>
      <Layout>{<Component {...pageProps} />}</Layout>
    </>
  );
};

export default App;

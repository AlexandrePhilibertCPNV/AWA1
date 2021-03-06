import React, { PropsWithChildren, useEffect } from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import Head from "next/head";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "src/styles/index.css";

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
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="theme-color" content="#1e293b" />
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Notus AWA1</title>
      </Head>
      <Layout>{<Component {...pageProps} />}</Layout>
    </>
  );
};

export default App;

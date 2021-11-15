// @flow
import React, { useState } from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";
import { ServerStyleSheet } from "styled-components";
// import Image from "next/image";

export default class extends Document {
  // flowlint-next-line unclear-type: off
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Luckytech" />
          <meta
            name="og:description"
            content="We are your business partner, not just a blockchain development outsourcing firm. We focus on your business objectives and deal primarily with your business goals, not just with your TOR."
          />
          <meta
            name="keywords"
            content="Software, Development, BLOCKCHAIN, ECOSYSTEMS"
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Diviner Protocol</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gayathri:wght@100;400;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="shortcut icon" type="image/png" href="./images/luckytech/favicon.png" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/animatecss/3.5.2/animate.min.css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

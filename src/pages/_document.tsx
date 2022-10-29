import { Head, Html, Main, NextScript } from "next/document";

import { AppConfig } from "@/utils/AppConfig";

export default function Document() {
  return (
    <Html lang={AppConfig.locale}>
      <Head></Head>
      <body>
        {/* <MyNavbar /> */}
        <div className="relative mt-16">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}

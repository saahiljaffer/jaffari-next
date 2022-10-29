import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <div className="relative mt-16">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}

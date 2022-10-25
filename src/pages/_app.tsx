import "../styles/global.css";

import type { AppProps } from "next/app";
import { Theme } from "react-daisyui";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Theme dataTheme="myTheme">
    <Component {...pageProps} />
  </Theme>
);

export default MyApp;

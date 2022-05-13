import "../styles/_common.scss";
import "../styles/_reseter.scss";
import "../styles/_variables.scss";
import "../styles/app.module.scss";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;

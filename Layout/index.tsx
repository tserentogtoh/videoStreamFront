import { AppProps } from "next/dist/shared/lib/router/router";
import NextNProgress from "nextjs-progressbar";
import { Header } from "./Header";
const LayOut = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress />
      <Header />
      <Component {...pageProps} />
    </>
  );
};
export default LayOut;

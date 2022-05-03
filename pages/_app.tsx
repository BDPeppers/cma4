import "../styles/branding.sass";
import type { AppProps } from "next/app";
import Layout from "../src/components/navigation/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

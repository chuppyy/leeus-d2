import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/*<script defer src="https://videoadstech.org/ads/leeus_livextop_com.9b5c84b5-0cf2-44d3-a1d7-bdf0d97e985b.video.js"></script>
        <script async src="https://server.adhub.media/ads/leeus_livextop_com.8b1303c8-c916-47d1-a559-a9c070bca94d.display.js"></script>*/}
        <script defer src="https://videoadstech.org/ads/leeus_daily24_blog.fde41e9f-f85c-47d2-a130-ea29d2a9e1c1.video.js"></script>
<script async src="https://server.adhub.media/ads/leeus_daily24_blog.1b4e6cdf-2f82-474e-b50e-82ef34e6fd27.display.js"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};

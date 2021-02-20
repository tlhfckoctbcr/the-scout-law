import Head from "next/head";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="max-h-screen">
      <Head>
        <title>The Scout Law</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

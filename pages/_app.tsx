import Head from "next/head";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>The Scout Law</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

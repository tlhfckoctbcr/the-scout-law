import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

const trackingId = 'UA-190257727-1';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="A small footprint on the internet dedicated to the twelve points of the Scout Law"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${trackingId}');
              `,
            }}
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

export default MyDocument;

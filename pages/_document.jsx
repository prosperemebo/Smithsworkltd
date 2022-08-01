import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charset='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <title>Smithsworkltd - Diligence / Excellence / Integrity</title>
        <link rel='icon' href='/favicon.png' type='image/png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Source+Sans+Pro:wght@200;300;400;600;700&display=swap'
          rel='stylesheet'
        />
        <meta
          name='description'
          content='Helping Nigeria Succeed by Promoting Small Businesses. Born out of the work-of-art of a fine craftsman whose work delivers the finest solutions from an excellent and diligent mind driven by integrity.'
        />
        <meta
          property='og:image'
          content='https://smithsworkltd.com/favicon.png'
        />
        <meta
          property='og:description'
          content='Helping Nigeria Succeed by Promoting Small Businesses. Born out of the work-of-art of a fine craftsman whose work delivers the finest solutions from an excellent and diligent mind driven by integrity.'
        />
        <meta
          property='og:title'
          content='Smithsworkltd - Diligence / Excellence / Integrity'
        />
        <meta
          name='twitter:title'
          content='Smithsworkltd - Diligence / Excellence / Integrity'
        />
      </Head>
      <body>
        <div id='myportal' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

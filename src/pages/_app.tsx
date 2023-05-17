import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import '../helpers/fontawesomeConfig';
import '../strum-design-system';
import StrumProvider from '../strum-design-system/components/StrumProvider/StrumProvider';
import colors from '../strum-design-system/themes/timbre/colors';
import '../styles/app.css';

import { Provider } from 'react-redux';
import themeSlice from '../store/theme-slice';
import Script from 'next/script';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={themeSlice}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={colors.primary} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-512.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/favicon-512.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Script
        id="gtm-script"
        src="https://www.googletagmanager.com/gtag/js?id=G-N4078EZZBM"
        strategy="afterInteractive"
      ></Script>
      <Script id="gtm-script-runner" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N4078EZZBM');`}</Script>
      <ErrorBoundary>
        <StrumProvider>
          <Component {...pageProps} />
        </StrumProvider>
      </ErrorBoundary>
    </Provider>
  );
};

export default MyApp;

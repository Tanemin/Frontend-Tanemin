/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import '../styles/navbar.css';
import '../styles/catagory.css';
import '../styles/detail.css';
import '../styles/instructor.css';
import '../styles/login.css';
import '../styles/register.css';
import '../styles/notFound.css';
import '../styles/landingpage.css';
import '../styles/member-page-styles/overview.css';
// import '../styles/member-page-styles/sidebar.css';
import '../styles/member-page-styles/utilities.css';
import '../styles/member-page-styles/plant.css';
// import '../styles/checkout.css';
import '../styles/globals.css';

import '../styles/responsive.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../utils/stripe/stripe';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Tanemin</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#53BF9D" />
        <link rel="apple-touch-icon" href="/icon/icon-72x72.png"></link>
      </Head>
      <ChakraProvider>
        <Elements stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

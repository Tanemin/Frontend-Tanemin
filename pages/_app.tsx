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
import '../styles/member-page-styles/sidebar.css';
import '../styles/member-page-styles/utilities.css';
import '../styles/checkout.css';
import '../styles/globals.css';

import '../styles/responsive.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../utils/stripe/stripe';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Elements stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

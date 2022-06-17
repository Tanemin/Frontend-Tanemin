import { Elements } from '@stripe/react-stripe-js';
import type { NextPage } from 'next';
import Head from 'next/head';

import Statistics from '../components/molecules/Statistics';
import Testimonial from '../components/molecules/Testimonial';
import Featured from '../components/organisms/Featured';
import Footer from '../components/organisms/Footer';
import Hero from '../components/organisms/Hero';
import Navbar from '../components/organisms/Navbar';
import { stripePromise } from '../utils/stripe/stripe';

const Home: NextPage = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <Head>
          <title>Tanemin | Homepage</title>
        </Head>
        <Navbar />
        <Hero />
        <Featured />
        <Testimonial />
        <Statistics />
        <Footer />
      </Elements>
    </>
  );
};

export default Home;

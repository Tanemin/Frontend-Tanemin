import type { NextPage } from 'next';
import Head from 'next/head';

import Statistics from '../components/molecules/Statistics';
import Testimonial from '../components/molecules/Testimonial';
import Featured from '../components/organisms/Featured';
import Footer from '../components/organisms/Footer';
import Hero from '../components/organisms/Hero';
import Navbar from '../components/organisms/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tanemin | Homepage</title>
      </Head>
      <Navbar />
      <Hero />
      <Featured />
      <Testimonial />
      <Statistics />
      <Footer />
    </>
  );
};

export default Home;

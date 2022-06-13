import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Avatar, Button, Image, WrapItem } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

import CardContainer from '../components/molecules/CardContainer';
import Statistics from '../components/molecules/Statistics';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tanemin | Homepage</title>
      </Head>
      <Navbar />
      <section className="container-fluid landing_section">
        <div className="landing_section-content">
          <div className="landing_information">
            <h1 className="landing_title">
              Mari hijaukan bumi <br /> bersama kami
            </h1>
            <p className="landing_description">
              turut berkontribusi dalam upaya penghijauan <br /> bumi kita agar
              masa depan yang lebih indah
            </p>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="solid"
            >
              Jelajahi
            </Button>
          </div>
          <div className="landing_image">
            <Image src="/assets/mainPict.png" alt="" />
          </div>
        </div>
      </section>

      <section className="featured">
        <h2 className="featured_title">Tanaman Terbaik Kami</h2>

        <div className="item_list">
          <CardContainer
            author="SehatMantab"
            plantName="Rizki Plant"
            href="629dc41024029026327912ed"
          />
          <CardContainer
            author="SehatMantab"
            plantName="Rizki Plant"
            href="629dc41024029026327912ed"
          />
          <CardContainer
            author="SehatMantab"
            plantName="Rizki Plant"
            href="629dc41024029026327912ed"
          />
          <CardContainer
            author="SehatMantab"
            plantName="Rizki Plant"
            href="629dc41024029026327912ed"
          />
          <CardContainer
            author="SehatMantab"
            plantName="Rizki Plant"
            href="629dc41024029026327912ed"
          />
          <CardContainer
            author="SehatMantab"
            plantName="Rizki Plant"
            href="629dc41024029026327912ed"
          />
        </div>
      </section>

      <section className="testimoni">
        <h2 className="featured_title">Testimoni</h2>
        <p className="testimoni_text">
          Awalnya saya malu dengan mertua karena tidak bisa memasak, kini mereka
          lebih suka makan malam di rumah demi menyantap masakan yang saya buat
          sendiri
        </p>
        <div className="testimoni_detail">
          <WrapItem>
            <Avatar
              size={'xl'}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
        </div>
      </section>

      <Statistics />

      <Footer />
    </>
  );
};

export default Home;

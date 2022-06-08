import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Avatar, Button, Center, Heading, WrapItem } from '@chakra-ui/react';
import type { NextPage } from 'next';
// import Button from '../components/atoms/Button';
import CardContainer from '../components/molecules/CardContainer';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className="container landing_section">
        <div className="landing_section-content">
          <div className="landing_information">
            <h1 className="landing_title">
              Mari hijaukan bumi <br /> bersama kami
            </h1>
            <p className="landing_description">
              turut berkontribusi dalam upaya penghijauan bumi kita agar masa
              depan yang lebih indah
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
            <img src="/assets/mainPict.png" alt="" />
          </div>
        </div>
      </section>
      {/* 
      <section className="sponsor_section">
        <h1>Media Sponsor</h1>
        <div className="landing_section-sponsor">
          <img src="/assets/dicoding-logo-full.png" alt="" />
          <img src="/assets/download(1).png" alt="" />
          <img src="/assets/kampus-merdeka.png" alt="" />
        </div>
      </section> */}

      <hr />

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
        </div>
      </section>

      <section className="testimoni">
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

      <section className="data_list">
        <div className="data_item">
          <p className="data_value">180.000+</p>
          <p className="data_label">MENU FOOD</p>
        </div>
        <div className="data_item">
          <p className="data_value">20.000+</p>
          <p className="data_label">CHEFS</p>
        </div>
        <div className="data_item">
          <p className="data_value">400.000+</p>
          <p className="data_label">COURSE</p>
        </div>
        <div className="data_item">
          <p className="data_value">6.900.000</p>
          <p className="data_label">ALUMNI</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;

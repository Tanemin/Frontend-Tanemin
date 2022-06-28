import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Image } from '@chakra-ui/react';
import React from 'react';

export default function Hero() {
  return (
    <>
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
              as={'a'}
              href="/explore"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="solid"
              my={'2'}
            >
              Jelajahi
            </Button>
          </div>
          <div className="landing_image">
            <Image src="/assets/pic.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

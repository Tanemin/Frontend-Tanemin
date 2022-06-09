import { Image } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';
import TabListComponent from '../components/organisms/TabListComponent';

export default function Instructor() {
  return (
    <>
      <Navbar />
      <div className="instructor-container">
        <div className="profile">
          <div className="profile-image">
            <Image src="/assets/avatar.jpg" alt="profile-image" />
          </div>
          <div className="profile-info">
            <h1>John Doe</h1>
            <p>Farmer</p>
          </div>
        </div>
        <div className="operations">
          <TabListComponent />
        </div>
      </div>
      <Footer />
    </>
  );
}

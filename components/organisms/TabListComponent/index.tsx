import {
  Box,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import About from './About';
import Review from './Review';

export default function TabListComponent() {
  return (
    <>
      <Tabs colorScheme="green" className="w-100 fs-2 m-16">
        <TabList>
          <Tab>Tanaman</Tab>
          <Tab>Review</Tab>
          <Tab>About</Tab>
        </TabList>
        <TabPanels style={{ minWidth: '100%' }}>
          <TabPanel>
            <div className="card-content">
              <div className="card-content__image">
                <Image src="/assets/content-img.jpg" alt="food-image" />
              </div>
              <div className="card-content__info">
                <p className="food-name">Avocado Muscle</p>
                <p className="food-author">John Doe</p>
                <div className="star-container"></div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-content__image">
                <Image src="/assets/content-img.jpg" alt="food-image" />
              </div>
              <div className="card-content__info">
                <p className="food-name">Avocado Muscle</p>
                <p className="food-author">John Doe</p>
                <div className="star-container"></div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-content__image">
                <Image src="/assets/content-img.jpg" alt="food-image" />
              </div>
              <div className="card-content__info">
                <p className="food-name">Avocado Muscle</p>
                <p className="food-author">John Doe</p>
                <div className="star-container"></div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-content__image">
                <Image src="/assets/content-img.jpg" alt="food-image" />
              </div>
              <div className="card-content__info">
                <p className="food-name">Avocado Muscle</p>
                <p className="food-author">John Doe</p>
                <div className="star-container"></div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <Review />
          </TabPanel>
          <TabPanel>
            <About />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

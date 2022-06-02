import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import About from './About';
import Review from './Review';

export default function TabListComponent() {
  return (
    <>
      <Tabs isLazy isFitted colorScheme="green" className="w-100 fs-2 m-16">
        <TabList className="fs-2">
          <Tab>Tanaman</Tab>
          <Tab>Review</Tab>
          <Tab>About</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>List Tanaman</p>
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

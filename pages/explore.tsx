import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../components/organisms/Navbar';
import CardContainer from '../components/molecules/CardContainer';
import { getPlants } from '../services/plant-list';
import { PlantTypes } from '../services/data-types';
import { Skeleton, useInterval } from '@chakra-ui/react';
import Footer from '../components/organisms/Footer';

export default function Explore() {
  const [plantList, setPlantList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPlantListItem = useCallback(async () => {
    try {
      const data = await getPlants();
      setPlantList(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPlantListItem();
  }, [getPlantListItem]);

  useInterval(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      <Navbar />
      <header className="heading">
        <h1 className="explore-title">Beverages Recommendations</h1>
        <h3 className="explore-description">Available 12,309 course</h3>

        <div className="searchbar">
          <input type="text" placeholder="Search by name or receipt" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </header>

      <div className="content-container">
        {plantList.map((item: PlantTypes) => {
          return (
            <Skeleton key={item.id} isLoaded={!isLoading}>
              <CardContainer
                plantName={item.plantName}
                author="SehatPedia"
                imageUrl={item.imageCover}
                href={item.id}
              />
            </Skeleton>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

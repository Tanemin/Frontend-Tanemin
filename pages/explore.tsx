import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../components/organisms/Navbar';
import CardContainer from '../components/molecules/CardContainer';
import { getPlants } from '../services/plant-list';
import { PlantTypes } from '../services/data-types';
import { Container, Spinner } from '@chakra-ui/react';
import Footer from '../components/organisms/Footer';
const ROOT_API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;

export default function Explore() {
  const [plantList, setPlantList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPlantListItem = useCallback(async () => {
    try {
      const data = await getPlants();
      setPlantList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPlantListItem();
  }, [getPlantListItem]);

  return (
    <>
      <Navbar />
      <header className="heading">
        <h1 className="explore-title">Explore Tanaman</h1>
        <h3 className="explore-description">
          Tersedia untuk produktifitas kamu
        </h3>
      </header>

      {isLoading && (
        <Container centerContent>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.500"
            size="xl"
            style={{ margin: '50%' }}
          />
        </Container>
      )}

      <div className="content-container">
        {plantList.map((item: PlantTypes) => {
          return (
            <CardContainer
              key={item.id}
              plantName={item.plantName}
              author="SehatPedia"
              imageUrl={`${ROOT_API_IMAGE}/${item.imageCover}`}
              href={`/detail/${item.id}`}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

import { Container, Spinner } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { PlantTypes } from '../../../services/data-types';
import { getTopPlant } from '../../../services/plant-list';
import CardContainer from '../../molecules/CardContainer';
const ROOT_API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;

export default function Featured() {
  const [topPlant, setTopPlant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const topPlantAPI = useCallback(async () => {
    try {
      const data = await getTopPlant();
      setTopPlant(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    topPlantAPI();
  }, [topPlantAPI]);

  return (
    <>
      <section className="featured">
        <h2 className="featured_title">Paling banyak dicari</h2>
        {isLoading && (
          <Container centerContent>
            <Spinner
              mt={'40px'}
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="green.500"
              size="xl"
            />
          </Container>
        )}
        <div className="item_list">
          {topPlant.map((item: PlantTypes) => {
            return (
              <CardContainer
                price={`${item.price}`}
                key={item.id}
                plantName={item.plantName}
                author="SehatPedia"
                imageUrl={`${ROOT_API_IMAGE}/${item.imageCover}`}
                href={`/detail/${item.id}`}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

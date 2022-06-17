import React, { useCallback, useEffect, useState } from 'react';
import { PlantTypes } from '../../../services/data-types';
import { getTopPlant } from '../../../services/plant-list';
import CardContainer from '../../molecules/CardContainer';

export default function Featured() {
  const [topPlant, setTopPlant] = useState([]);

  const topPlantAPI = useCallback(async () => {
    try {
      const data = await getTopPlant();
      setTopPlant(data);
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
        <h2 className="featured_title">Tanaman Terbaik Kami</h2>

        <div className="item_list">
          {topPlant.map((item: PlantTypes) => {
            return (
              <CardContainer
                key={item.id}
                plantName={item.plantName}
                author="SehatPedia"
                imageUrl={item.imageCover}
                href={item.id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
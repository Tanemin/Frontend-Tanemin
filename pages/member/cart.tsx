import React, { useCallback, useEffect, useState } from 'react';
import CardContainer from '../../components/molecules/CardContainer';
import SimpleSidebar from '../../components/organisms/Layout/Sidebar';
import { PlantTypes } from '../../services/data-types';
import { getCurrentUser } from '../../services/user';

export default function Cart() {
  const [plantList, setPlantList] = useState([]);
  console.log(plantList);

  const getPlantListItem = useCallback(async () => {
    try {
      const data = await getCurrentUser();
      setPlantList(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPlantListItem();
  }, [getPlantListItem]);
  return (
    <SimpleSidebar>
      <section className="featured">
        <h2 className="featured_title">Keranjang</h2>
        <div className="item_list">
          {plantList.map((item: PlantTypes) => (
            <CardContainer
              key={item.id}
              plantName={item.plant.plantName}
              author="SehatPedia"
              imageUrl={item.imageCover}
              href={`/detail/${item.plant.id}`}
            />
          ))}
        </div>
      </section>
    </SimpleSidebar>
  );
}

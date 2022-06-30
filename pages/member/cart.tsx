import React, { useCallback, useEffect, useState } from 'react';
import CardContainer from '../../components/molecules/CardContainer';
import SimpleSidebar from '../../components/organisms/Layout/Sidebar';
import { PlantTypes } from '../../services/data-types';
import { getCurrentUser } from '../../services/user';
const ROOT_API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;

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
        {plantList.length === 0 ? (
          <h3 className="">Kamu belum punya keranjang</h3>
        ) : (
          <div className="item_list">
            {plantList.map((item: PlantTypes) => (
              <CardContainer
                isDeleted={true}
                key={item.id}
                plantName={item.plant.plantName}
                author="SehatPedia"
                imageUrl={`${ROOT_API_IMAGE}/${item.plant.imageCover}`}
                price={item.plant.price}
                href={`/detail/${item.plant.id}`}
                idCart={item.id}
              />
            ))}
          </div>
        )}
      </section>
    </SimpleSidebar>
  );
}

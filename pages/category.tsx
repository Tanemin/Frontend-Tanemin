import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../components/organisms/Navbar';
import CardContainer from '../components/molecules/CardContainer';
import { getPlants } from '../services/plant-list';
import { PlantTypes } from '../services/data-types';

export default function Category() {
  const [plantList, setPlantList] = useState([]);

  const getPlantListItem = useCallback(async () => {
    const data = await getPlants();
    setPlantList(data);
  }, []);

  useEffect(() => {
    getPlantListItem();
  }, [getPlantListItem]);

  return (
    <>
      <Navbar />
      <header className="heading">
        <h1 className="title">Beverages Recommendations</h1>
        <h3 className="description">Available 12,309 course</h3>

        <div className="searchbar">
          <input type="text" placeholder="Search by name or receipt" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </header>

      <div className="content-container">
        {plantList.map((item: PlantTypes) => {
          return (
            <CardContainer
              key={item._id}
              plantName={item.plantName}
              author="SehatPedia"
              imageUrl={item.imageCover}
              href={item._id}
            />
          );
        })}
      </div>

      {/* 
        <div className="pagination">
          <div className="page_button">1</div>
          <div className="page_button">2</div>
          <div className="page_button">3</div>
          <div className="page_button">...</div>
          <div className="page_button">90</div>
        </div> */}
    </>
  );
}

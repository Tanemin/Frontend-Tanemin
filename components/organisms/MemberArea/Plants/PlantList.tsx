import React from 'react';
import { PlantTypes } from '../../../../services/data-types';
import CardContainer from '../../../molecules/CardContainer';
const ROOT_API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;

interface Props {
  plants: any;
}

const PlantList = ({ plants }: Props) => {
  return (
    <section className="featured">
      <h2 className="featured_title">Tanaman Kamu</h2>
      <div className="item_list">
        {plants.map((item: PlantTypes) => (
          <CardContainer
            key={item.id}
            plantName={item.plantName}
            author="SehatPedia"
            imageUrl={`${ROOT_API_IMAGE}/${item.imageCover}`}
            href={`plants/${item.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PlantList;

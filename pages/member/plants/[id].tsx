import Link from 'next/link';
import React from 'react';
import SimpleSidebar from '../../../components/organisms/Layout/Sidebar';
import PlantDetail from '../../../components/organisms/MemberArea/Plants/PlantDetail';
import Schedule from '../../../components/organisms/MemberArea/Plants/Schedule';
import { getDetailPlant } from '../../../services/plant-list';

interface Props {
  plant: any;
}

const PlantDetailPage = ({ plant }: Props) => {
  console.log(plant);
  return (
    <SimpleSidebar>
      <div>
        <Link href={'/member/plants'}>{`< Back `}</Link>
        <PlantDetail plant={plant} />
        <Schedule id={plant.id} />
      </div>
    </SimpleSidebar>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;

  const plant = await getDetailPlant(id);

  return {
    props: {
      plant,
    },
  };
};

export default PlantDetailPage;

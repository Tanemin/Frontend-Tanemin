import React from 'react';
import { getTopPlant } from '../../../services/plant-list';
import PlantList from '../../../components/organisms/MemberArea/Plants/PlantList';
import SimpleSidebar from '../../../components/organisms/Layout/Sidebar';

interface Props {
  plants: any;
}

const plants = ({ plants }: Props) => {
  return (
    <SimpleSidebar>
      <PlantList plants={plants} />
    </SimpleSidebar>
  );
};

export const getServerSideProps = async () => {
  const plants = await getTopPlant();

  return {
    props: {
      plants,
    },
  };
};

export default plants;

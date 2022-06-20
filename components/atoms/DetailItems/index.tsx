import { Image } from '@chakra-ui/react';
import React from 'react';

interface DetailItemsProps {
  season: string;
}

export default function DetailItems(props: DetailItemsProps) {
  const { season } = props;
  return (
    <>
      <li className="additional-item">
        <Image src={`/assets/musim/${season}.svg`} alt="" />
        <div className="additional-details">
          <h4>{season}</h4>
        </div>
      </li>
    </>
  );
}

import { Image } from '@chakra-ui/react';
import React from 'react';
import DetailItems from '../../atoms/DetailItems';

export default function Ingredients() {
  return (
    <>
      <div className="ingredients">
        <h3>Musim </h3>
        <ul className="transaction-additional">
          <DetailItems />
          <DetailItems />
          <DetailItems />
        </ul>
      </div>
    </>
  );
}

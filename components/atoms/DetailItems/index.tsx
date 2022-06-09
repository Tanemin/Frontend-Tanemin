import { Image } from '@chakra-ui/react';
import React from 'react';

export default function DetailItems() {
  return (
    <>
      <li className="additional-item">
        <Image src="/assets/mainPoster.png" alt="" />
        <div className="additional-details">
          <h4>Bawang Putih</h4>
          <p className="label">12 kg</p>
        </div>
      </li>
    </>
  );
}

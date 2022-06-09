import { Image } from '@chakra-ui/react';
import React from 'react';
import DetailItems from '../../atoms/DetailItems';

export default function Tools() {
  return (
    <>
      <div className="tools">
        <h3>Special Tools</h3>
        <ul className="transaction-additional">
          <DetailItems />
          <li className="additional-item">
            <Image src="/assets/mainPoster.png" alt="" />
            <div className="additional-details">
              <h4>mangkock</h4>
              <p className="label">2 variant</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

import { Image } from '@chakra-ui/react';
import React from 'react';

interface ReviewProps {
  name: string;
  review: string;
  rating: number;
  photo: string;
}

export default function Review(props: ReviewProps) {
  const { name, review, photo } = props;
  return (
    <>
      <h3>Reviews</h3>
      <ul className="detail-review">
        <li className="item-review">
          <div className="review-account">
            <div className="review-photo">
              <Image src={photo} alt="Photo Reviewer" />
            </div>
            <div className="account-detail">
              <h4>{name}</h4>
              <p className="label">Vegan Chef</p>
              <p>⭐️⭐️⭐️⭐️⭐️ | 4.8/5</p>
            </div>
          </div>
          <p>{review}</p>
        </li>
      </ul>
    </>
  );
}

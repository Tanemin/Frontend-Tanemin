import { StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';
import React from 'react';

interface ReviewItemProps {
  photo: string;
  name: string;
  review: string;
  itemStar: number;
}

export default function ReviewItem(props: ReviewItemProps) {
  const { photo, name, review, itemStar } = props;
  console.log(photo);
  return (
    <>
      <li className="item-review">
        <div className="review-account">
          <div className="review-photo">
            <Image src={`/assets/${photo}`} alt="Photo Reviewer" />
          </div>
          <div className="account-detail">
            <h4>{name}</h4>
            <p>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < itemStar ? 'yellow.400' : 'gray.300'}
                  />
                ))}{' '}
            </p>
          </div>
        </div>
        <p>{review}</p>
      </li>
    </>
  );
}

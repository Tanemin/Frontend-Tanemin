import { Image } from '@chakra-ui/react';
import React from 'react';
import ReviewItem from './ReviewItem';

interface ReviewProps {
  reviews: any;
}

export default function Review(props: ReviewProps) {
  const { reviews } = props;
  console.log(reviews);
  return (
    <>
      <h3>Reviews</h3>
      <ul className="detail-review">
        {reviews.map((item: any) => {
          return (
            <ReviewItem
              key={item.id}
              name={item.user.fullname}
              review={item.review}
              photo={item.user.photo}
              itemStar={item.rating}
            />
          );
        })}
      </ul>
    </>
  );
}

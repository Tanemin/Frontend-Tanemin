import { StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';
import React from 'react';
interface HeaderDetailProps {
  itemName: string;
  itemAuthor?: string;
  itemReview?: string;
  imgUrl?: string;
}

export default function Header(props: HeaderDetailProps) {
  const {
    itemName,
    itemAuthor,
    itemReview,
    imgUrl = '/assets/mainPoster.png',
  } = props;
  return (
    <>
      <div className="detail-header">
        <h2 className="item-name">{itemName}</h2>
        <p className="item-author">by Irwan Gumilar</p>
        <p className="item-review">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < 4 ? 'yellow.400' : 'gray.300'} />
            ))}{' '}
          | 12.234 students
        </p>
        <Image
          src={imgUrl}
          fallbackSrc="https://via.placeholder.com/150"
          alt="Cooking master"
        />
      </div>
    </>
  );
}

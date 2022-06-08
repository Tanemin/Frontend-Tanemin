import { Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
interface CardData {
  imageUrl?: string;
  plantName: string;
  author: string;
  href: string;
}

export default function CardContainer(props: CardData) {
  const {
    imageUrl = '/assets/content-img.jpg',
    plantName,
    author,
    href,
  } = props;
  return (
    <>
      <div className="card-content">
        <div className="card-content__image">
          <Image
            src={imageUrl}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Plants Category"
          />
        </div>
        <div className="card-content__info">
          <Link href={`/detail/${href}`}>
            <a className="food-name">{plantName}</a>
          </Link>
          <p className="food-author">{author}</p>
          <div className="star-container"></div>
        </div>
      </div>
    </>
  );
}

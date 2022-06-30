import { StarIcon } from '@chakra-ui/icons';
import { Badge, Image, Tag } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
interface HeaderDetailProps {
  itemName: string;
  itemAuthor?: string;
  itemReview?: string;
  imgUrl?: string;
  itemStar: number;
  itemType: Array<string>;
  difficulty: string;
  viewCount: number;
  sold: number;
  stock: number;
  store: any;
}

export default function Header(props: HeaderDetailProps) {
  const {
    itemName,
    itemStar,
    imgUrl = '/assets/mainPoster.png',
    itemType,
    difficulty,
    viewCount,
    sold,
    stock,
    store,
  } = props;

  return (
    <>
      <div className="detail-header">
        <h2 className="item-name">
          {itemName}
          <Badge ml="1" colorScheme="green">
            {difficulty}
          </Badge>
        </h2>
        <p className="item-author">
          {viewCount} Views | {sold} Sold | {stock} Stock
        </p>
        <Link href={`/store/${store.id}`}>
          <a className="item-author link-page">Visit Our Page</a>
        </Link>
        <p className="item-review">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < itemStar ? 'yellow.400' : 'gray.300'}
              />
            ))}
        </p>
        {itemType.map((type: string, i) => (
          <Tag
            margin={'1'}
            colorScheme={'green'}
            variant="solid"
            key={i}
            size="sm"
          >
            {type}
          </Tag>
        ))}
        <Image
          src={imgUrl}
          fallbackSrc="https://via.placeholder.com/150"
          alt="Detail Image Header"
        />
      </div>
    </>
  );
}

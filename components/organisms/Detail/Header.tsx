import { StarIcon } from '@chakra-ui/icons';
import { Badge, Image, Tag } from '@chakra-ui/react';
import React from 'react';
interface HeaderDetailProps {
  itemName: string;
  itemAuthor?: string;
  itemReview?: string;
  imgUrl?: string;
  itemStar: number;
  itemType: Array<string>;
  difficulty: string;
}

export default function Header(props: HeaderDetailProps) {
  const {
    itemName,
    itemStar,
    imgUrl = '/assets/mainPoster.png',
    itemType,
    difficulty,
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
        <p className="item-author">by Irwan Gumilar</p>
        <p className="item-review">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < itemStar ? 'yellow.400' : 'gray.300'}
              />
            ))}{' '}
          | 12.234 students
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
          alt="Cooking master"
        />
      </div>
    </>
  );
}

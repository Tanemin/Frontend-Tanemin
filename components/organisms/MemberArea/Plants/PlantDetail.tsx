import React from 'react';
import { Box, Image, Tag } from '@chakra-ui/react';
import Seasons from '../../Detail/Seasons';

interface Props {
  plant: any;
}

const PlantDetail = ({ plant }: Props) => {
  const { imageCover, plantName, type, tags, season } = plant;
  return (
    <div className="member-plant-header">
      <Box
        maxHeight={'300px'}
        overflow={'hidden'}
        display={'flex'}
        alignItems="center"
        justifyContent={'center'}
      >
        <Image
          src={imageCover}
          fallbackSrc="https://via.placeholder.com/150"
          alt="Cooking master"
          width={'500px'}
          objectFit={'cover'}
          height={'100%'}
        />
      </Box>
      <div>
        <h3 className="member-plant-title">{plantName}</h3>
        <div className="member-plant-detail">
          <div className="member-plant-type">
            <p>Type :</p>
            {type.map((item: any, i: number) => (
              <Tag
                margin={'1'}
                colorScheme={'green'}
                variant="solid"
                key={i}
                size="sm"
              >
                {item}
              </Tag>
            ))}
          </div>
          <div className="member-plant-tags">
            <p>Tags :</p>
            {tags.map((item: any, i: number) => (
              <Tag
                margin={'1'}
                colorScheme={'blue'}
                variant="solid"
                key={i}
                size="sm"
              >
                {item}
              </Tag>
            ))}
          </div>
        </div>
        <Seasons seasons={season} />
      </div>
    </div>
  );
};

export default PlantDetail;

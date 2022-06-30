/* eslint-disable react/jsx-no-undef */
import { Text } from '@chakra-ui/react';
import React from 'react';
import ImageGallery from './ImageGallery';
import Review from './ReviewCard/Review';
interface DetailInformationProps {
  description: string;
  reviews: string[];
  imagesSrc: string[];
}

export default function DetailInformation(props: DetailInformationProps) {
  const { description, reviews, imagesSrc } = props;
  const splitDesc = description.split('\n');
  console.log(splitDesc.length);
  return (
    <>
      <div className="detail-information">
        <h3>Deskripsi Tanaman</h3>
        {splitDesc.map((item, index) => {
          return (
            <>
              <p key={index}>{item.substring(0, item.length - 2)}</p>
              <br />
            </>
          );
        })}
        <h3>Galeri</h3>
        <div className="detail-galery">
          {imagesSrc.map((images: any) => {
            return <ImageGallery imagesSrc={images} key={images} />;
          })}
        </div>
        <br />
        <Review reviews={reviews} />
      </div>
    </>
  );
}

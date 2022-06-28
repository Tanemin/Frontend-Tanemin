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
  console.log(reviews);
  return (
    <>
      <div className="detail-information">
        <h3>Deskripsi Tanaman</h3>
        <p>{description}</p>
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

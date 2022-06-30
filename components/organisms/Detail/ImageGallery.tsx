import { Image } from '@chakra-ui/react';
import React from 'react';
const ROOT_API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;

interface ImageGalleryProps {
  imagesSrc: string;
}

export default function ImageGallery(props: ImageGalleryProps) {
  const { imagesSrc } = props;
  return (
    <>
      <Image
        src={`${ROOT_API_IMAGE}/${imagesSrc}`}
        alt="Image Gallery Plants"
        height={200}
        objectFit={'cover'}
      />
    </>
  );
}

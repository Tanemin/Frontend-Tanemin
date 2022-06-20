import { Image } from '@chakra-ui/react';
import React from 'react';

interface ImageGalleryProps {
  imagesSrc: string;
}

export default function ImageGallery(props: ImageGalleryProps) {
  const { imagesSrc } = props;
  return (
    <>
      <Image
        src={imagesSrc}
        alt="Image Gallery Plants"
        height={200}
        objectFit={'cover'}
      />
    </>
  );
}

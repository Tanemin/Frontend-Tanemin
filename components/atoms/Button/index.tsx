import { Image } from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';
interface ButtonProps {
  href?: string;
  assets?: 'google.svg' | 'fb.svg';
  value: string;
}

export default function Button(props: ButtonProps) {
  const { assets, href = '/', value } = props;
  return (
    <>
      <Link href={href}>
        <a className="btn d-flex justify-content-evenly align-items-center btn-custom">
          <Image src={`/assets/${assets}`} alt="" width={25.41} height={26} />
          {value}
        </a>
      </Link>
    </>
  );
}

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Image } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className="dangger-container justify-content-center">
        <Image
          src="/assets/404.png"
          className="dangger-image"
          alt="Not Found"
        />
        <div className="dangger-text">
          <h2 className="dangger-title">Oops!! Not Found</h2>
          <p>
            The page that you were looking for probably is not exist anymore
          </p>
        </div>
        <Link href={'/'}>
          <a className="btn-style">Back to home</a>
        </Link>
      </div>
    </>
  );
}

import React from 'react';
import Link from 'next/link';
import { Image } from '@chakra-ui/react';

export default function Success() {
  return (
    <main>
      <div className="dangger-container">
        <Image
          src="/assets/Register.png"
          className="dangger-image"
          alt="Registration"
        />
        <div className="dangger-text">
          <h2 className="dangger-title">Verify Your Email</h2>
          <p>Please check your email address for verification link</p>
        </div>
        <Link href={'/'}>
          <a className="btn-style">Back to home</a>
        </Link>
      </div>
    </main>
  );
}

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
          <h2 className="dangger-title">Pendaftaran Sukses</h2>
          <p>selamat bergabung bersama tanemin untuk dunia yang lebih indah</p>
        </div>
        <Link href={'/'}>
          <a className="btn-style">Back to home</a>
        </Link>
      </div>
    </main>
  );
}

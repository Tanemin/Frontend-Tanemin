import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="dangger-container justify-content-center">
      <img
        src="/assets/404.png"
        className="dangger-image"
        alt="Not Found"
        width={628}
        height={180}
      />
      <div className="dangger-text">
        <h2 className="dangger-title">Oops!! Not Found</h2>
        <p>The page that you were looking for probably is not exist anymore</p>
      </div>
      <Link href={'/'}>
        <a className="btn-style">Back to home</a>
      </Link>
    </div>
  );
}

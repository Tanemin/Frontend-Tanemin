import React from 'react';
import Link from 'next/link';

export default function Complated() {
  return (
    <main>
      <div className="dangger-container">
        <img
          src="/assets/Scenes.png"
          className="dangger-image"
          alt="Completed Transaction"
        />
        <div className="dangger-text">
          <h2 className="dangger-title">Yeay! Completed</h2>
          <p>
            You just finished buying plant and now time to improve your planting
            productivity
          </p>
        </div>
        <Link href={'/'}>
          <a className="btn-style">Back to home</a>
        </Link>
      </div>
    </main>
  );
}

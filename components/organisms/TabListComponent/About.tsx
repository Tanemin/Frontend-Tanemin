import React from 'react';
import { StarSharp } from 'react-ionicons';

export default function About() {
  return (
    <>
      <div className="about w-100">
        <div className="about-content">
          <p className="about-content-paragraph">
            For me, teaching is like learning something new that I am passionate
            about which is cooking a delicious food for people. It can also make
            the good relationship between member of my lovely family.
          </p>
          <p className="about-student">28,309 students</p>
          <div className="about-content-star">
            <StarSharp color={'#F7C531'} height="22px" width="22px" />
            <StarSharp color={'#F7C531'} height="22px" width="22px" />
            <StarSharp color={'#F7C531'} height="22px" width="22px" />
            <StarSharp color={'#F7C531'} height="22px" width="22px" />
            <StarSharp color={'#F7C531'} height="22px" width="22px" />
          </div>
        </div>
      </div>
    </>
  );
}

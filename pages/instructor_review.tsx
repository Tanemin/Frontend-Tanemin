import Image from 'next/image';
import React from 'react';
import { StarSharp } from 'react-ionicons';
import Navbar from '../components/organisms/Navbar';

export default function InstructorReview() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="profile">
          <div className="profile-image">
            <Image
              src="/assets/avatar.jpg"
              alt="profile-image"
              width={172}
              height={172}
            />
          </div>
          <div className="profile-info">
            <h1>John Doe</h1>
            <p>Farmer</p>
          </div>
        </div>
        <div className="operations">
          <div className="operations__item">
            <a href="#" className="">
              My Course
            </a>
          </div>
          <div className="operations__item operations__item--active">
            <a href="#" className="">
              Review
            </a>
          </div>
          <div className="operations__item">
            <a href="#" className="">
              Testimonial
            </a>
          </div>
        </div>

        <div className="about">
          <div className="about-content">
            <p className="about-content-paragraph">
              For me, teaching is like learning something new that I am
              passionate about which is cooking a delicious food for people. It
              can also make the good relationship between member of my lovely
              family.
            </p>
            <p className="about-student">28,309 students</p>
            <div className="about-content-star">
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
            </div>
            <div className="review-content-profile">
              <div className="review-content-profile__img">
               <Image
                src="/assets/avatar.jpg"
                alt="profile-image"
                width={62.9}
                height={60}
                />
              <p className="review-content-profile__name">Rhinoe Kaku</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

import Image from 'next/image';
import React from 'react';
import { StarSharp } from 'react-ionicons';

export default function Instructor() {
  return (
    <main>
      <div className="container">
        <div className="profile">
          <div className="profile-image">
            <Image
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880"
              alt="profile-image"
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
          </div>
        </div>
      </div>
    </main>
  );
}

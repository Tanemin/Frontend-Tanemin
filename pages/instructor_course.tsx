import React from 'react';
import { StarSharp } from 'react-ionicons';

export default function Instructor() {
  return (
    <main>
    <div className="container">
      <div className="profile">
        <div className="profile-image">
          <img
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
        <div className="operations__item operations__item--active">
          <a href="#" className="">My Course</a>
        </div>
        <div className="operations__item">
          <a href="#" className="">Review</a>
        </div>
        <div className="operations__item">
          <a href="#" className="">Testimonial</a>
        </div>
      </div>
      <div className="content-container">
        <div className="card-content">
          <div className="card-content__image">
            <img
              src="https://images.unsplash.com/photo-1459156212016-c812468e2115?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705"
              alt="food-image"
            />
          </div>
          <div className="card-content__info">
            <p className="food-name">Avocado Muscle</p>
            <p className="food-author">John Doe</p>
            <div className="star-container"></div>
          </div>
        </div>
        <div className="card-content">
          <div className="card-content__image">
            <img
              src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
              alt="food-image"
            />
          </div>
          <div className="card-content__info">
            <p className="food-name">Avocado Muscle</p>
            <p className="food-author">John Doe</p>
            <div className="star-container"></div>
          </div>
        </div>
        <div className="card-content">
          <div className="card-content__image">
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472"
              alt="food-image"
            />
          </div>
          <div className="card-content__info">
            <p className="food-name">Avocado Muscle</p>
            <p className="food-author">John Doe</p>
            <div className="star-container"></div>
          </div>
        </div>
        <div className="card-content">
          <div className="card-content__image">
            <img
              src="https://images.unsplash.com/photo-1604759280982-6f84e05a27bc?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752"
              alt="food-image"
            />
          </div>
          <div className="card-content__info">
            <p className="food-name">Avocado Muscle</p>
            <p className="food-author">John Doe</p>
            <div className="star-container"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

import Image from 'next/image';
import React from 'react';
import Navbar from '../../components/organisms/Navbar';

export default function detail() {
  return (
    <>
      <Navbar />
      <div className="detail-container">
        <div className="detail-header">
          <h2 className="item-name">Online Course: Salad Kiwi Sugga</h2>
          <p className="item-author">by Irwan Gumilar</p>
          <p className="item-review">⭐️⭐️⭐️⭐️⭐️ | 12.234 students</p>
          <img src="/assets/mainPoster.png" alt="Cooking master" />
        </div>
        <div className="detail-content">
          <div className="detail-transaction">
            <form action="">
              <h3>Buy this Plant</h3>
              <p className="price">$280,000</p>
              <p className="label">Buy and Improve your Plants</p>
              <button>Buy Plant</button>
            </form>
            <div className="ingredients">
              <h3>Ingredients</h3>
              <ul className="transaction-additional">
                <li className="additional-item">
                  <img src="/assets/mainPoster.png" alt="" />
                  <div className="additional-details">
                    <h4>Bawang Putih</h4>
                    <p className="label">12 kg</p>
                  </div>
                </li>
                <li className="additional-item">
                  <img src="/assets/mainPoster.png" alt="" />
                  <div className="additional-details">
                    <h4>Pewarna</h4>
                    <p className="label">1 liter</p>
                  </div>
                </li>
                <li className="additional-item">
                  <img src="/assets/mainPoster.png" alt="" />
                  <div className="additional-details">
                    <h4>Santan Kit</h4>
                    <p className="label">1 Pack</p>
                  </div>
                </li>
                <li className="additional-item">
                  <img src="/assets/mainPoster.png" alt="" />
                  <div className="additional-details">
                    <h4>lemon</h4>
                    <p className="label">2 ons</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tools">
              <h3>Special Tools</h3>
              <ul className="transaction-additional">
                <li className="additional-item">
                  <img src="/assets/mainPoster.png" alt="" />
                  <div className="additional-details">
                    <h4>Chefs Knives</h4>
                    <p className="label">1 kit</p>
                  </div>
                </li>
                <li className="additional-item">
                  <img src="/assets/mainPoster.png" alt="" />
                  <div className="additional-details">
                    <h4>mangkock</h4>
                    <p className="label">2 variant</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="detail-information">
            <h3>About Course</h3>
            <p>
              This lesson is aimed to give you the confidence to chop like a
              pro. Proper knife skills are vital in the kitchen and knowing the
              proper technique can literally save you a finger. In this lesson,
              you will not only learn how to use your knife but also how to
              sharpen a dull blade. You will also be able to identify the
              various cuts for vegetables using your newly gained knife skills.
            </p>
            <br />
            <p>
              Sauce has the power to make or break a dish, and mastering the art
              of making a sauce is a skill that every chef needs to perfect.
              This lesson is focused on understanding a roux, mother sauces, and
              stocks. The practical portion of this lesson will show you how to
              create a roux and what needs to be done to take it to a finished
              product.
            </p>
            <h3>Gallery</h3>
            <div className="detail-galery">
              <img src="/assets/mainPoster.png" alt="Cooking master" />
              <img src="/assets/mainPoster.png" alt="Cooking master" />
              <img src="/assets/mainPoster.png" alt="Cooking master" />
              <img src="/assets/mainPoster.png" alt="Cooking master" />
              <img src="/assets/mainPoster.png" alt="Cooking master" />
            </div>
            <br />
            <h3>Reviews</h3>
            <ul className="detail-review">
              <li className="item-review">
                <div className="review-account">
                  <div className="review-photo">
                    <img src="/assets/mainPoster.png" alt="" />
                  </div>
                  <div className="account-detail">
                    <h4>Fauzi Kurniawan</h4>
                    <p className="label">Vegan Chef</p>
                    <p>⭐️⭐️⭐️⭐️⭐️ | 4.8/5</p>
                  </div>
                </div>
                <p>
                  I learned a lot in this course, however, towards the middle of
                  the course, it feels a bit rushed. It took a long time to wrap
                  my head around functions and classes before being able to
                  complete the Milestone projects. Had to go through various
                  external sources before coming back to this course.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
interface DetailInformationProps {
  description: string;
}

export default function DetailInformation(props: DetailInformationProps) {
  const { description } = props;
  return (
    <>
      <div className="detail-information">
        <h3>About Course</h3>
        <p>{description}</p>
        <br />
        <p>
          Sauce has the power to make or break a dish, and mastering the art of
          making a sauce is a skill that every chef needs to perfect. This
          lesson is focused on understanding a roux, mother sauces, and stocks.
          The practical portion of this lesson will show you how to create a
          roux and what needs to be done to take it to a finished product.
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
              I learned a lot in this course, however, towards the middle of the
              course, it feels a bit rushed. It took a long time to wrap my head
              around functions and classes before being able to complete the
              Milestone projects. Had to go through various external sources
              before coming back to this course.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

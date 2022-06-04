import React from 'react';

export default function Ingredients() {
  return (
    <>
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
    </>
  );
}

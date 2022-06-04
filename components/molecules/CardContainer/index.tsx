import React from 'react';
interface CardData {
  imageUrl?: string;
  plantName: string;
  author: string;
}

export default function CardContainer(props: CardData) {
  const { imageUrl = 'content-img', plantName, author } = props;
  return (
    <>
      <div className="card-content">
        <div className="card-content__image">
          <img src={`/assets/${imageUrl}.jpg`} alt="food-image" />
        </div>
        <div className="card-content__info">
          <p className="food-name">{plantName}</p>
          <p className="food-author">{author}</p>
          <div className="star-container"></div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
interface HeaderDetailProps {
  itemName: string;
  itemAuthor?: string;
  itemReview?: string;
  imgUrl?: string;
}

export default function Header(props: HeaderDetailProps) {
  const {
    itemName,
    itemAuthor,
    itemReview,
    imgUrl = '/assets/mainPoster.png',
  } = props;
  return (
    <>
      <div className="detail-header">
        <h2 className="item-name">{itemName}</h2>
        <p className="item-author">by Irwan Gumilar</p>
        <p className="item-review">⭐️⭐️⭐️⭐️⭐️ | 12.234 students</p>
        <img src={imgUrl} alt="Cooking master" />
      </div>
    </>
  );
}

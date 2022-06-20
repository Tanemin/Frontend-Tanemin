import React from 'react';
import DetailItems from '../../atoms/DetailItems';
interface SeasonsProps {
  seasons: string[];
}

export default function Seasons(props: SeasonsProps) {
  const { seasons } = props;
  return (
    <>
      <div className="ingredients">
        <h3>Musim </h3>
        <ul className="transaction-additional">
          {seasons.map((season) => {
            return <DetailItems season={season} key={season} />;
          })}
        </ul>
      </div>
    </>
  );
}

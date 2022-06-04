import React from 'react';

export default function FormPayment() {
  return (
    <>
      <form action="">
        <h3>Buy this Plant</h3>
        <p className="price">$280,000</p>
        <p className="label">Buy and Improve your Plants</p>
        <div className="detail-button">
          <button>Buy Plant</button>
          <button>Add to Cart</button>
        </div>
      </form>
    </>
  );
}

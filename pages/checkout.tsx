import React from 'react';
import Bill from '../components/atoms/card';

export default function Checkout() {
  return (
    <div className="iphone">
        <header className="header">
          <h1>Checkout</h1>
        </header>
      
        <form className="form" method="POST">
          <div>
            <h2>Address</h2>
      
            <div className="card">
              <address>
                Adam Johnson<br />
                403 Oakland Ave Street, A city, Florida, 32104,<br />
                United States of America
              </address>
            </div>
          </div>
        
            <Bill />
          <div>
            <button className="button button--full" type="submit">Buy Now</button>
          </div>
        </form>
      </div>
  )
}

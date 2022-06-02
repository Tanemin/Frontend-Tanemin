import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>🌼 Tanemin</h1>
          </div>
          <div className="footer-features">
            <h2 className="footer-title">Features</h2>
            <div className="footer-list">
              <a href="" className="footer-item">
                Wedding Foods
              </a>
              <a href="" className="footer-item active">
                Health and muscle
              </a>
              <a href="" className="footer-item">
                Office Food Daily
              </a>
              <a href="" className="footer-item">
                Happy kids
              </a>
            </div>
          </div>
          <div className="footer-company">
            <h2 className="footer-title">Company</h2>

            <div className="footer-list">
              <a href="" className="footer-item">
                APIs Developer
              </a>
              <a href="" className="footer-item">
                Career
              </a>
              <a href="" className="footer-item">
                Term and Conditions
              </a>
              <a href="" className="footer-item">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="footer-address">
            <h2 className="footer-title">Address</h2>
            <p>Sindangpanon Street, Bandung</p>
            <p>support@tanemin.co.id</p>
            <p>021-234-234</p>
          </div>
        </div>
        <div className="footer-copyright">
          All Rights Reserved Tanemin &#169; 2022, Dicoding Academy
        </div>
      </footer>
    </>
  );
}

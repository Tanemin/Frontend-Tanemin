import { Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Image src="/icon/tanemin.png" alt="Tanemin Logo" height={'35px'} />
          </div>
          <div className="footer-features">
            <h2 className="footer-title">Features</h2>
            <div className="footer-list">
              <Link href={'#'}>
                <a className="footer-item">Productivity</a>
              </Link>
              <Link href={'#'}>
                <a className="footer-item">Plants and Care</a>
              </Link>
              <Link href={'#'}>
                <a className="footer-item">Daily Weather</a>
              </Link>
              <Link href={'#'}>
                <a className="footer-item">Gardening Tools</a>
              </Link>
            </div>
          </div>
          <div className="footer-company">
            <h2 className="footer-title">Company</h2>

            <div className="footer-list">
              <Link href={'#'}>
                <a className="footer-item">APIs Developer</a>
              </Link>
              <Link href={'#'}>
                <a className="footer-item">Carrer</a>
              </Link>
              <Link href={'#'}>
                <a className="footer-item">Term and Conditions</a>
              </Link>
              <Link href={'#'}>
                <a className="footer-item">Privacy Policy</a>
              </Link>
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

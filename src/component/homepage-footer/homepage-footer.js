import React from 'react';

import './homepage-footer.css';
export default function HomeFooter() {
  return (
    <>
      <div className="footer-home">
        <div className="footer-picture">
          <img src="/footer-img.png" alt="" />
        </div>
        <div className="footer-email">
          <div className="discount-text">
            <h3>Get more discounts when you order from us.</h3>
            <p>
              Join us to receive a discount and a promotion from us. Take
              advantage and enjoy ordering!
            </p>
          </div>
          <form action="" className="discount-email">
            <input type="email" placeholder="Your Email Address" />
            <button>Get</button>
          </form>
        </div>
      </div>
    </>
  );
}

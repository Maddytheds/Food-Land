import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './homepage-footer.css';
export default function HomeFooter() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_427qaji',
        'template_d2g2y5q',
        e.target,
        'JMmb3izo1Q_u5qjgf'
      )
      .then(
        (result) => {
          alert('Email successfully sent!');
        },
        (error) => {
          console.error('Email sending failed:', error.text);
        }
      );

    e.target.reset();
  };

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
          <form ref={form} className="discount-email" onSubmit={sendEmail}>
            <input
              type="email"
              name="from_name"
              placeholder="Your Email Address"
            />
            <button type="submit">Get</button>
          </form>
        </div>
      </div>
    </>
  );
}

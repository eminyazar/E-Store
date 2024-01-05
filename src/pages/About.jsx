import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
  return (
    <div className="container mt-5">
      <div className="about-page text-center">
        <h1>About Us</h1>
        <p>
          Welcome to E-Store! We are a passionate team dedicated to providing high-quality products and excellent
          customer service. Our goal is to make your online shopping experience enjoyable and convenient.
        </p>
        <p>
          At E-Store, we offer a wide range of products, from electronics to fashion, to meet your diverse needs.
          Our commitment to quality ensures that you receive products that not only meet but exceed your expectations.
        </p>
        <p>
          Explore our website to discover the latest trends and find the perfect items for yourself or your loved ones.
          Thank you for choosing E-Store for your online shopping journey!
        </p>
        <div className="icon-container">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </div>
      </div>
    </div>
  );
}

export default About;

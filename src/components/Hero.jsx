import React from 'react';
import '../styles/main.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Your Journey Begins Here</h1>
        <p>15 years of trusted travel services in Panipat</p>
        <div className="cta-buttons">
          <button className="btn-primary">Book Now</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
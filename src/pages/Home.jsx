// src/pages/Home.jsx
import React from 'react';
import '../styles.css';
// import '../css/responsive.css';
import { Link } from 'react-router-dom';
import hotelImg from '../assets/hotel.avif'; 
import flightImg from '../assets/flight.avif'; // or './assets/hotel.avif' depending on file location
import heroImg from '../assets/hero-bg.png';


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Let Your Dreams Set the Itinerary</h1>
          <p>
            With 15 years of experience and a team of 15 dedicated professionals,
            we offer trusted and complete travel solutions, including visa
            services, forex, hotel bookings, and personalized tour packages.
          </p>
          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <div className="section-title"style={{ marginTop: '20px' }}>
            <h2>Our Services</h2>
            <p>End-to-end travel support for all your global journeys</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
<img src={heroImg} alt="Visa Services" />
              <div className="service-content">
                <h3>Visa Services</h3>
                <p>
                  Tourist, Work, and Study Visa assistance for all countries—
                  specialists in UK, US, Schengen, Dubai, and Canada.
                </p>
                <Link to="/services#visa" className="btn" style={{ marginTop: '20px' }}>Learn More</Link>
              </div>
            </div>

            <div className="service-card">
             <img src={flightImg} alt="Visa Services" />
              <div className="service-content">
                <h3>Flight Bookings</h3>
                <p>
                  Get the best deals on domestic and international flights
                  tailored to your preferences.
                </p>
                <Link to="/services#flights" className="btn" style={{ marginTop: '20px' }}>Learn More</Link>
              </div>
            </div>

            <div className="service-card">
                <img src={hotelImg} alt="Visa Services" />
              <div className="service-content">
                <h3>Hotel Reservations</h3>
                <p>
                  Comfortable accommodations at competitive rates around the
                  world.
                </p>
                <Link to="/services#hotels" className="btn" style={{ marginTop: '20px' }}>Learn More</Link>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginBottom: '40px' }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-container">
            <div className="about-content">
              <h2>About Dream Destination Panipat</h2>
              <p>
                Founded by Sagar, Dream Destination Panipat has been your
                reliable travel partner for 15 years. We are recognized on
                JustDial and Instagram for our trusted service and transparent
                processes.
              </p>
              <p>
                From visa consultancy to forex, and holiday packages to hotel
                and flight bookings—we provide hassle-free travel experiences
                backed by our experienced team of 15 professionals.
              </p>
              <Link to="/about" className="btn" style={{ marginTop: '20px' }}>Read More</Link>
            </div>
            <div className="about-image">{/* Optional image can go here */}</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Client Testimonials</h2>
            <p>Hear from our happy travelers</p>
          </div>

          <div className="testimonial-slider">
            <div className="testimonial active">
              <p className="testimonial-text">
                "Dream Destination made my Canada study visa process so smooth.
                Their guidance at every step was invaluable."
              </p>
              <p className="testimonial-author">- Rahul Sharma, Student</p>
            </div>

            <div className="testimonial">
              <p className="testimonial-text">
                "Their flight and hotel packages are budget-friendly and
                well-managed. I always book through them!"
              </p>
              <p className="testimonial-author">
                - Priya Malhotra, Frequent Traveler
              </p>
            </div>

            <div className="testimonial">
              <p className="testimonial-text">
                "I got my work visa for Australia with zero complications thanks
                to their professional handling."
              </p>
              <p className="testimonial-author">- Amit Singh, Working in Sydney</p>
            </div>

            <div className="testimonial-nav">
              <div className="testimonial-dot active" data-index="0"></div>
              <div className="testimonial-dot" data-index="1"></div>
              <div className="testimonial-dot" data-index="2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Get expert help from Dream Destination Panipat today!</p>
          <Link to="/contact" className="btn" style={{ marginTop: '20px' }}>Get Started</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
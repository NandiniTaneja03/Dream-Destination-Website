// src/pages/About.jsx
import React from 'react';
import '../styles.css';
import poster from '../assets/poster.jpg';
import { FaAward, FaUsers, FaGlobe, FaBullseye, FaEye } from 'react-icons/fa';

const About = () => {
  return (
    <>
      {/* Page Title Banner */}
      <section className="page-title">
        <div className="container">
          <h1>About Us</h1>
          <p>15 years of excellence in global travel solutions</p>
        </div>
      </section>

      {/* About Section - Added margin-top here */}
      <section className="about-section" style={{ marginTop: '40px' }}>
        <div className="container">
          <div className="about-container">
            <div className="about-image">
              <img src={poster} alt="About Dream Destination" width={400} height={300} />
            </div>
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2008 by Mr. Sagar, Dream Destination Panipat has grown from a modest
                setup into one of the most trusted travel consultancies in the region. Our mission
                started with making travel simpler—and today, we proudly serve thousands of travelers
                with customized experiences.
              </p>
              <p>
                With a strong team of 15 experienced professionals, we specialize in visa assistance,
                forex, hotel bookings, and international tour packages for all countries—particularly
                the UK, US, Schengen, Dubai, and Canada.
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon"><FaAward /></div>
                  <div>
                    <h4>Trusted Experience</h4>
                    <p>15 years of proven expertise in travel and visa services</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon"><FaUsers /></div>
                  <div>
                    <h4>15+ Team Members</h4>
                    <p>Skilled and dedicated travel professionals</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon"><FaGlobe /></div>
                  <div>
                    <h4>Global Reach</h4>
                    <p>Serving clients across the world with care and speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="mission-vision">
            <div className="mv-card">
              <div className="mv-icon"><FaBullseye /></div>
              <h3>Our Mission</h3>
              <p>
                To simplify travel for everyone by offering transparent, personalized,
                and professional services across visa, booking, and forex solutions.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon"><FaEye /></div>
              <h3>Our Vision</h3>
              <p>
                To become the most recommended travel agency in North India and beyond,
                known for trust, innovation, and customer delight.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="team-section">
            <h2>Our Team</h2>
            <p>Meet the passionate experts behind Dream Destination Panipat</p>

            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  {/* <img src="https://via.placeholder.com/300x300" alt="Sagar" /> */}
                </div>
                <h4>Sagar</h4>
                <p>Founder & CEO</p>
                <p>Visionary leader with 15+ years of travel industry experience</p>
              </div>

              <div className="team-member" style={{ marginBottom: '40px' }}>
                <div className="member-image">
                  {/* <img src="https://via.placeholder.com/300x300" alt="Priya Sharma" /> */}
                </div>
                <h4> And Team of 15 Members</h4>
<p>They make it so easy for you – guiding every step of your visa journey.</p>
<p>With years of experience, our consultants handle international documentation with complete care and clarity.</p>

              </div>

             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
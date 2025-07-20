import React from 'react';
// import '../style.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaSearchLocation } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <h3>Dream Destination</h3>
            <p>15 years of excellence in travel solutions. Trusted by thousands. Listed on JustDial. Follow us on Instagram.</p>
            <div className="social-links">
  {/* <a href="#"><FaFacebookF /></a> */}
  {/* <a href="#"><FaTwitter /></a> */}
  <a href="https://www.instagram.com/dreamdestinationpanipat?igsh=MWQxMzVnYjlqMWh6YQ%3D%3D"><FaInstagram /></a>
  <a href="https://www.justdial.com/Panipat/Dream-Destination-Behind-Old-Bus-Stand-Sukhdev-Nagar/9999PX180-X180-250328165205-P4F4_BZDET?auto=1&trkid=9990061654-fcomp&term=Dream%20Destination%20Sukhdev%20Nagar" target="_blank" rel="noreferrer"><FaSearchLocation /></a>
</div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Tourist Visa</Link></li>
              <li><Link to="/services">Work Visa</Link></li>
              <li><Link to="/services">Study Visa</Link></li>
              <li><Link to="/services">Forex Assistance</Link></li>
              <li><Link to="/services">Flight & Hotel Booking</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i> Shop No 59, 1st Floor, Sukhdev Nagar, Old Bus Stand, Panipat 132103</p>
            <p><i className="fas fa-phone"></i> 9811000540, 9817131174</p>
            <p><i className="fas fa-envelope"></i> dreamdestinationpanipat@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Dream Destination Panipat. All Rights Reserved. | Owned by Sagar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

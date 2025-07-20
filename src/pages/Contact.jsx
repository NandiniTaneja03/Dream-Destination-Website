import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [feedback, setFeedback] = useState("");       // ✅ Feedback message
  const [error, setError] = useState(false);          // ✅ Error state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback("");
    setError(false);

    try {
      const res = await axios.post('https://dream-destination-website-1.onrender.com/api/contact', formData);

      setFeedback(res.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setError(true);
      setFeedback('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* Page Title Banner */}
      <section className="page-title">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We’re here to help with all your travel needs</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" style={{ marginTop: '40px' }}>
        <div className="container contact-container">
          <div>
            {/* Contact Info */}
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <h4>Address</h4>
                <p>Shop No 59, 1st Floor, Sukhdev Nagar, Old Bus Stand, Panipat 132103</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-phone"></i></div>
              <div>
                <h4>Phone</h4>
                <p>9811000540, 9817131174</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div>
                <h4>Email</h4>
                <p>dreamdestinationpanipat@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2 style={{ marginBottom: '20px' }}>Send Us a Message</h2>


            {/* ✅ Feedback Message */}
            {feedback && (
              <div
                style={{
                  marginBottom: '1rem',
                  padding: '10px',
                  borderRadius: '5px',
                  backgroundColor: error ? '#ffdddd' : '#ddffdd',
                  color: error ? '#d8000c' : '#270',
                  border: `1px solid ${error ? '#d8000c' : '#270'}`
                }}
              >
                {feedback}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

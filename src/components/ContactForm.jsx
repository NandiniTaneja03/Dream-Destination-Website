import React, { useState } from 'react';
import '../styles/main.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (can connect to backend or email service)
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact-form">
      <h3>Get in Touch</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="tourist-visa">Tourist Visa</option>
            <option value="work-visa">Work Visa</option>
            <option value="study-visa">Study Visa</option>
            <option value="flight-booking">Flight Booking</option>
            <option value="hotel-booking">Hotel Booking</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
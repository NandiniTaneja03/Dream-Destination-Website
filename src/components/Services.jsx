import React from 'react';
import VisaCard from './VisaCard';
import '../styles/main.css';

const Services = () => {
  const services = [
    {
      title: "Tourist Visa",
      description: "Expert assistance for all your tourist visa needs worldwide.",
      icon: "🌍"
    },
    {
      title: "Work Visa",
      description: "Comprehensive support for work visa applications.",
      icon: "💼"
    },
    {
      title: "Study Visa",
      description: "Guidance for students pursuing education abroad.",
      icon: "🎓"
    },
    {
      title: "Flight Bookings",
      description: "Best deals on domestic and international flights.",
      icon: "✈️"
    },
    {
      title: "Hotel Bookings",
      description: "Curated selection of accommodations worldwide.",
      icon: "🏨"
    },
    {
      title: "Travel Packages",
      description: "Customized holiday packages for all budgets.",
      icon: "🧳"
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
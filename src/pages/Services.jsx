// src/pages/Services.jsx
import React from 'react';
import '../styles.css';
import { FaPassport, FaPlane, FaHotel, FaCar, FaShieldAlt, FaUmbrellaBeach, FaExchangeAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <>
      {/* Page Title Banner - Kept exactly the same */}
      <section className="page-title bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive travel solutions tailored to your needs</p>
        </div>
      </section>

      {/* Compact Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl" style={{ marginTop: '40px' }}>
          {/* Visa Services */}
          <div className="service-card bg-white rounded-xl shadow-md p-8 mb-10">
            <div className="flex items-center mb-6">
              <div className="icon-box bg-blue-100 p-3 rounded-full mr-4">
                <FaPassport className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Visa Services</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Expert visa assistance with high approval rates for all destinations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
              <ul className="space-y-2">
                {['Tourist Visas', 'Work Visas', 'Study Visas', 'Business Visas'].map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Flight Bookings */}
          <div className="service-card bg-white rounded-xl shadow-md p-8 mb-10">
            <div className="flex items-center mb-6">
              <div className="icon-box bg-blue-100 p-3 rounded-full mr-4" style={{ marginTop: '40px' }}>
                <FaPlane className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Flight Bookings</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Best deals on domestic and international flights with 24/7 support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                {['Best Price Guarantee', 'Multi-city Flights', 'Group Discounts', 'Last Minute Deals'].map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hotel Bookings */}
          <div className="service-card bg-white rounded-xl shadow-md p-8 mb-10">
            <div className="flex items-center mb-6">
              <div className="icon-box bg-blue-100 p-3 rounded-full mr-4" style={{ marginTop: '40px' }}>
                <FaHotel className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Hotel Reservations</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Curated accommodations from luxury to budget worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                {['Luxury Resorts', 'City Hotels', 'Vacation Rentals', 'Long Stay Discounts'].map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="additional-services bg-white rounded-xl shadow-md p-8" style={{ marginBottom: '40px' }}>
            <h2 className="text-2xl font-bold text-center mb-8">Additional Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <FaCar className="text-blue-600 text-3xl" />, title: 'Airport Transfers', desc: 'Comfortable transportation' },
                { icon: <FaShieldAlt className="text-blue-600 text-3xl" />, title: 'Travel Insurance', desc: 'Comprehensive coverage' },
                { icon: <FaUmbrellaBeach className="text-blue-600 text-3xl" />, title: 'Tour Packages', desc: 'Customized holidays' },
                { icon: <FaExchangeAlt className="text-blue-600 text-3xl" />, title: 'Forex Services', desc: 'Competitive exchange rates' }
              ].map((service, index) => (
                <div key={index} className="text-center p-4 hover:bg-blue-50 rounded-lg transition">
                  <div className="mb-3">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
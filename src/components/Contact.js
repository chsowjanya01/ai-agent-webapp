import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="name" className="input-label">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-field"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email" className="input-label">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message" className="input-label">Your Message</label>
          <textarea
            id="message"
            name="message"
            className="input-field"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

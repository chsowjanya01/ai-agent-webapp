import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Your Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Your Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Your Message</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-me">
      <h1>Contact Me</h1>
      <p>Feel free to reach out by filling out the form below:</p>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="6" required></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

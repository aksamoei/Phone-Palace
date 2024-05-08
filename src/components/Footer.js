// Footer.js

import React from 'react';
import './Footer.css'; // Import CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
          {/* Add other contact details as needed */}
        </div>
        <div className="other-details">
          <h3>Other Details</h3>
          <p>About Us</p>
          <p>Terms of Service</p>
          {/* Add other details or links as needed */}
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 PhonePalace. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
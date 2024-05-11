import React from 'react';

const Logout = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="info-item">
          <h3>Phone:</h3>
          <p>(123) 456-7890</p>
        </div>
        <div className="info-item">
          <h3>Email:</h3>
          <p><a href="mailto:info@example.com">info@example.com</a></p>
        </div>
        <div className="info-item">
          <h3>Address:</h3>
          <p>123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}

export default Logout;

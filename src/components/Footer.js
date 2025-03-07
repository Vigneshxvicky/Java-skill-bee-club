import React from 'react';
// import './Footer.css'; // Optional: Create and customize this file if desired

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} All Project's Site. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

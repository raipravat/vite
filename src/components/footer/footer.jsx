import React from "react";
import "./Footer.css";

function Footer() {
  return ( <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="index.html" className="footer-logo">Mero<span>Bima</span></a>
            <p>
              Helping families secure their financial future while earning cash
              back on their life insurance policies since 2024.
            </p>
          </div>

          <div className="footer-links">
            <h3>Insurance Types</h3>
            <ul>
              <li><a href="life-insurance.html">Term Life</a></li>
              <li><a href="life-insurance.html">Whole Life</a></li>
              <li><a href="health-insurance.html">Family Life</a></li>
              <li><a href="life-insurance.html">Universal Life</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="resources.html">Insurance Glossary</a></li>
              <li><a href="calculator.html">Premium Calculator</a></li>
              <li><a href="claims.html">Claims Process</a></li>
              <li><a href="renewal.html">Policy Renewal</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:help@merobima.com">Email Us</a></li>
              <li><a href="tel:+9779800000000">(+977) 9800000000</a></li>
              <li>
                <a href="viber://chat?number=9800000000" target="_blank" rel="noreferrer">
                  Chat on Viber
                </a>
              </li>
              <li>
                <a href="https://wa.me/9800000000" target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; 2024 - <span id="currentYear"></span>.
            <a href="https://prabhat.info.np" rel="noreferrer" target="_blank">Merobima.com</a>.
            All rights reserved. |
            <a href="privacy.html" className="terms">Privacy Policy</a> |
            <a href="terms.html" className="terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

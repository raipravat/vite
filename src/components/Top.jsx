import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Top() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar__content">
          <div className="top-bar__left">
            <span className="top-bar__item">
              <FaPhoneAlt /> <a href="tel:+9779800000000">+977 9800000000</a>
            </span>
            <span className="top-bar__item">
              <FaEnvelope />{" "}
              <a href="mailto:info@merobima.com">info@merobima.com</a>
            </span>
            <span className="top-bar__item">
              <FaMapMarkerAlt /> Kathmandu, Nepal
            </span>
          </div>

          <div className="top-bar__right">
            <div className="top-bar__socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;

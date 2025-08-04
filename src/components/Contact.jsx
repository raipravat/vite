import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";

function Contact() {
  useEffect(() => {
    const leadForm = document.getElementById("lead-form");

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(
        "Thank you! We'll contact you shortly with your cash back estimate."
      );
      e.target.reset();
    };

    if (leadForm) {
      leadForm.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (leadForm) {
        leadForm.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>
            Contact <span className="highlight">Us</span>
          </h2>
          <p>Have questions? Get in touch with our team</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <h3>Location</h3>
                <p>
                  Bipi Chok, Itahari
                  <br />
                  Koshi, Nepal
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>help@Merobima.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone />
              <div>
                <h3>Phone No.</h3>
                <p>(025) 555-1234</p>
              </div>
            </div>

            <div className="contact-item">
              <FaClock />
              <div>
                <h3>Working Hours</h3>
                <p>
                  Monday - Friday: 9am - 6pm
                  <br />
                  Saturday: 10am - 2pm
                </p>
              </div>
            </div>

            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a
                  href="https://facebook.com/raipravat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* ✅ Form moved outside contact-info */}
          <form className="contact-form" id="lead-form">
            <h3>Get a Free Cash Back Estimate</h3>

            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
                id="name"
                name="name"
                minLength="4"
                maxLength="8"
                size="15"
                autocomplete="off"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                autocomplete="off"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                required
              />
            </div>

            <div className="form-group">
              <select id="insurance-type" name="insurance-type" required>
                <option value="">Insurance Type</option>
                <option value="term">Term Life Insurance</option>
                <option value="whole">Whole Life Insurance</option>
                <option value="universal">Universal Life Insurance</option>
                <option value="not-sure">Not Sure</option>
              </select>
            </div>

            <div className="form-group">
              <textarea placeholder="Your Message" name="message"></textarea>
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                defaultChecked
              />
              <label htmlFor="consent">
                I agree to receive information about cash back offers
              </label>
            </div>

            <div className="button-wrapper">
              <button type="submit" className="submit-btn">
                Get My Free Estimate
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

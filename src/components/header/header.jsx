import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Close menu on scroll
    const handleScroll = () => {
      if (window.innerWidth <= 992 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href === "#affiliate-link") {
          e.preventDefault();
          alert("Redirecting to affiliate application...");
          return;
        }
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__brand">
            <a href="index.html" className="logo">
              Mero<span>Bima</span>
            </a>
            <span className="tagline">Your Trusted Insurance Partner</span>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          <nav className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}>
            <ul className="nav-links">
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li className="dropdown">
                <a href="#insurance">
                  Products <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="life-insurance.html">Life Insurance</a></li>
                  <li><a href="health-insurance.html">Health Insurance</a></li>
                  <li><a href="vehicle-insurance.html">Vehicle Insurance</a></li>
                  <li><a href="travel-insurance.html">Travel Insurance</a></li>
                </ul>
              </li>
              <li><a href="#benefits">Cash Back</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#agents">Find Agent</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

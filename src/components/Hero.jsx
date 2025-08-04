import React, { useState, useEffect, useRef } from 'react';
import HappyFamily from '../assets/Happy-family.webp';


function Hero() {
  const [premium, setPremium] = useState(100000);
  const [cashback, setCashback] = useState(0);
  const premiumInputRef = useRef(null);
  const calculateBtnRef = useRef(null);

  useEffect(() => {
    setCashback(premium * 0.25); // 25% cash back
  }, [premium]);

  useEffect(() => {
    const calculateBtn = calculateBtnRef.current;
    const premiumInput = premiumInputRef.current;

    function calculateCashback() {
      const inputValue = parseFloat(premiumInput.value) || 0;
      setPremium(inputValue);
    }

    function handleKeyUp(e) {
      if (e.key === 'Enter') {
        calculateCashback();
      }
    }

    if (calculateBtn && premiumInput) {
      calculateBtn.addEventListener('click', calculateCashback);
      premiumInput.addEventListener('keyup', handleKeyUp);

      // Clean up event listeners
      return () => {
        calculateBtn.removeEventListener('click', calculateCashback);
        premiumInput.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">Get Up To 25% Cash Back</h1>
            <h2 className="hero__subtitle">on Your Life Insurance Policy</h2>
            <p className="hero__text">
              Protect your family & put money back in your pocket. Our exclusive
              offer gives you cash rewards when you buy through us.
            </p>

            <div className="cashback-calculator">
              <h4 className="calculator-title">Calculate Your Potential Cash Back:</h4>
              <div className="calculator-input">
                <span>रु.</span>
                <input
                  type="number"
                  ref={premiumInputRef}
                  placeholder="Annual Premium Amount"
                  aria-label="Enter annual premium amount"
                  defaultValue={premium}
                />
                <button ref={calculateBtnRef} className="btn btn--primary">
                  Calculate
                </button>
              </div>
              <div className="calculator-result">
                Your estimated cash back: <span>रु.{cashback.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="hero__cta">
              <div className="cta-buttons">
                <a href="#affiliate-link" className="btn btn--primary btn--icon">
                  <i className="fas fa-wallet"></i> Claim Your Cash Back
                </a>
                <a href="tel:+9779800000000" className="btn btn--secondary btn--icon">
                  <i className="fas fa-phone"></i> Speak to Our Team
                </a>
              </div>
            </div>
          </div>

          <div className="hero__image">
            <img
              src={HappyFamily}
              alt="Happy family receiving insurance benefits"
              loading="eager"
              width="600"
              height="400"
            />
            <div className="hero__features">
              <div className="feature-item">
                <i className="fas fa-rupee-sign"></i> Guaranteed Cash Back
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i> No Extra Cost
              </div>
              <div className="feature-item">
                <i className="fas fa-shield-alt"></i> Same Great Coverage
              </div>
              <div className="feature-item">
                <i className="fas fa-users"></i> Trusted by Thousands
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
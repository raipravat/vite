import React, { useEffect } from "react";

function Cta() {
  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(23, 59, 59, 0);

      const diff = tomorrow - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days
        .toString()
        .padStart(2, "0");
      document.getElementById("hours").textContent = hours
        .toString()
        .padStart(2, "0");
      document.getElementById("minutes").textContent = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("seconds").textContent = seconds
        .toString()
        .padStart(2, "0");
    }

    // Initial countdown update
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);
   
  return (
      <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready To Protect Your Family And Earn Cash Back?</h2>
          <p>
            Don't pay full price when you could be getting significant money
            back on your life insurance policy. Our exclusive offer won't last
            forever.
          </p>

          <div className="cta-timer">
            <div className="timer-title">Offer ends in:</div>
            <div className="timer">
              <div className="timer-block">
                <span id="days">00</span>
                <div className="timer-label">Days</div>
              </div>
              <div className="timer-block">
                <span id="hours">00</span>
                <div className="timer-label">Hours</div>
              </div>
              <div className="timer-block">
                <span id="minutes">00</span>
                <div className="timer-label">Minutes</div>
              </div>
              <div className="timer-block">
                <span id="seconds">00</span>
                <div className="timer-label">Seconds</div>
              </div>
            </div>
          </div>

          <div className="cta-buttons cta-btns">
            <a href="#affiliate-link" className="btn btn--primary pulse btn--icon">
              <i className="fas fa-wallet"></i> Apply Now
            </a>
            <a href="tel:+9779800000000" className="btn btn--secondary btn--icon">
              <i className="fas fa-phone"></i> Speak to Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
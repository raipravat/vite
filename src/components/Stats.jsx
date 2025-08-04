import React, { useEffect } from "react";

function Stats() {
  useEffect(() => {
    function animateStats() {
      const statNumbers = document.querySelectorAll(".stat-number");

      statNumbers.forEach((statNumber) => {
        if (!statNumber.dataset.animated) {
          const originalText = statNumber.textContent;

          const match = originalText.match(/^([\d.]+)(.*)$/);
          if (!match) return;

          const targetNumber = parseFloat(match[1].replace(/,/g, ""));
          const suffix = match[2] || "";

          let current = 0;
          const increment = targetNumber / 100;
          const isDecimal = originalText.includes(".");

          const timer = setInterval(() => {
            current += increment;

            if (current >= targetNumber) {
              clearInterval(timer);
              statNumber.textContent = originalText;
              statNumber.dataset.animated = true;
            } else {
              let displayNumber;
              if (isDecimal) {
                displayNumber = current.toFixed(1);
              } else {
                displayNumber = Math.floor(current);
              }
              statNumber.textContent =
                displayNumber.toLocaleString("en-IN") + suffix;
            }
          }, 20);
        }
      });
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const statsSection = document.querySelector(".stats");
    if (statsSection) {
      observer.observe(statsSection);
    }

    // Optional: Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="stats">
      <div className="container stats-container">
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Happy Families</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">25 Lakh+</div>
          <div className="stat-label">Paid in Cash Back</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">25%</div>
          <div className="stat-label">Maximum Reward</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">4.8/5</div>
          <div className="stat-label">Customer Rating</div>
        </div>
      </div>
    </section>
  );
}

export default Stats;

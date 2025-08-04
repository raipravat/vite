import React from "react";
import { FaPlay, FaWallet } from "react-icons/fa";

function How() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>
            How To Get <span className="highlight">Your Cash Back</span>
          </h2>
          <p>
            It takes just minutes to secure your family's future and claim your reward
          </p>
        </div>

        <div className="process-timeline">
          <div className="timeline-item benefit-card">
            <div className="timeline-icon">1</div>
            <div className="timeline-content">
              <h3>Apply Through Us</h3>
              <p>Start your application through our special link or call center</p>
              <div className="timeline-time">2 minutes</div>
            </div>
          </div>

          <div className="timeline-arrow">→</div>

          <div className="timeline-item benefit-card">
            <div className="timeline-icon">2</div>
            <div className="timeline-content">
              <h3>Get Approved</h3>
              <p>Complete your application with the insurer and get approved</p>
              <div className="timeline-time">1–3 days</div>
            </div>
          </div>

          <div className="timeline-arrow">→</div>

          <div className="timeline-item benefit-card">
            <div className="timeline-icon">3</div>
            <div className="timeline-content">
              <h3>Receive Cash</h3>
              <p>We send your cash back after policy approval and first payment</p>
              <div className="timeline-time">60–90 days</div>
            </div>
          </div>
        </div>

        <div className="video-explainer">
          <div className="video-container">
            <div className="video-placeholder">
              <FaPlay />
              <p>See how it works in 90 seconds</p>
            </div>
          </div>
          <div className="video-content">
            <h3>Watch Our Simple Process</h3>
            <p>
              See exactly how our cash back program works and how much you could save on
              your life insurance policy.
            </p>
            <a href="#affiliate-link" className="btn btn-primary">
              <FaWallet /> Start Your Application
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default How;

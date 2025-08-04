import React from "react";
import {
  FaRupeeSign,
  FaShieldAlt,
  FaHandHoldingUsd,
  FaClock,
  FaUserTie,
  FaHeadset,
} from "react-icons/fa";

function Benefit() {
  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="section-title">
          <h2>
            Why Choose Our <span className="highlight">Cash Back Program</span>
          </h2>
          <p>
            Get the same great coverage while earning significant cash rewards
            on your policy
          </p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaRupeeSign />
            </div>
            <div className="benefit-content">
              <h3>Substantial Cash Rewards</h3>
              <p>
                Receive up to 25% of your first year's premium back as cash –
                hundreds or even thousands of Rupees you wouldn't get otherwise.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <FaShieldAlt />
            </div>
            <div className="benefit-content">
              <h3>Same Great Coverage</h3>
              <p>
                You get identical policies from top-rated Insurance companies at
                the exact same price as buying direct – just with our exclusive
                cash back.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <FaHandHoldingUsd />
            </div>
            <div className="benefit-content">
              <h3>Multiple Payouts</h3>
              <p>
                Get cash back on up to 3 premium payments – typically 25% on
                first payment, 15% on second, and 10% on third payment.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <FaClock />
            </div>
            <div className="benefit-content">
              <h3>Fast Processing</h3>
              <p>
                Receive your cash back within 60–90 days of policy approval. We
                process payments quickly once your policy is active.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <FaUserTie />
            </div>
            <div className="benefit-content">
              <h3>Expert Advice</h3>
              <p>
                Our licensed insurance advisors help you choose the right policy
                and maximize your cash back benefits.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <FaHeadset />
            </div>
            <div className="benefit-content">
              <h3>Dedicated Support</h3>
              <p>
                24/7 customer service to assist with claims, questions, and
                policy management after you enroll.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefit;

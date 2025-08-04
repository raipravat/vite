import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import img1 from "../assets/testimonial/T1.jpg";
import img2 from "../assets/testimonial/T2.jpg";
import img3 from "../assets/testimonial/T3.webp";

import proof1 from "../assets/proof/p1.jpg";
import proof2 from "../assets/proof/p2.jpg";
import proof3 from "../assets/proof/P3.jpg";
import proof3alt from "../assets/proof/p4.avif";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      image: img1,
      name: "Hari Khadka",
      role: "Businessman",
      text: `"I was skeptical at first, but receiving रु.25,000 back on my रु.100,000 premium was incredible. The process was seamless and I got the exact same policy I would have gotten directly from the Insurance company."`,
      proofImage: proof1,
      amount: "रु.25,000",
      date: "15 Jan 2024",
      rating: 5,
    },
    {
      id: 2,
      image: img2,
      name: "Rita Magar",
      role: "Hotel Owner",
      text: `"As a small business owner, every Rupee counts. The रु.18,500 cash back I received through Merobima helped me reinvest in my company's growth while still getting excellent coverage."`,
      proofImage: proof3alt,
      amount: "रु.18,500",
      date: "5 Feb 2024",
      rating: 5,
    },
    {
      id: 3,
      image: img3,
      name: "Sita Thapa",
      role: "Teacher",
      text: `"I never thought I could get money back on insurance. Merobima made it possible and the service was excellent throughout the entire process. They even helped me compare policies."`,
      proofImage: proof3,
      amount: "रु.12,750",
      date: "22 Mar 2024",
      rating: 4.5,
    },
  ];

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} color="#fbbf24" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#fbbf24" />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} color="#fbbf24" />);
    }
    return stars;
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const startAutoPlay = useCallback(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>
            What Our <span className="highlight">Clients Say</span>
          </h2>
          <p>
            Hear from families who've protected their loved ones and earned cash
            back
          </p>
        </div>

        <div
          className="testimonial-slider-wrapper"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <button className="arrow-btn left" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="testimonial-slider" ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <div className="testimonial-content">
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}'s portrait`}
                      loading="lazy"
                    />
                    <div>
                      <span className="author-name">{testimonial.name}</span>
                      <span className="author-role">{testimonial.role}</span>
                      <div className="author-rating">
                        {renderRating(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-proof">
                    <img
                      src={testimonial.proofImage}
                      alt={`Payment proof of ${testimonial.name}`}
                      loading="lazy"
                    />
                    <span>
                      Received {testimonial.amount} on {testimonial.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow-btn right" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => {
                goToSlide(index);
                stopAutoPlay();
                startAutoPlay();
              }}
            />
          ))}
        </div>

        <div className="payment-proofs">
          <h3>Recent Cash Back Payments to Our Customers:</h3>
          <div className="proof-grid">
            {testimonials.map((proof, index) => (
              <div key={index} className="proof-item">
                <img
                  src={proof.proofImage}
                  alt={`Payment proof for ${proof.name}`}
                  loading="lazy"
                />
                <p>
                  {proof.amount} to {proof.name}
                </p>
              </div>
            ))}
          </div>
          <p className="small-text">
            Actual customer payments from last 30 to 90 days
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

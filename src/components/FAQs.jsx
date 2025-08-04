import React, { useEffect, useRef, useState } from "react";

function FAQs() {
  const [activeQuestion, setActiveQuestion] = useState("answer1");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const containerRef = useRef(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 992);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleQuestion = (targetId) => {
    if (isMobile) {
      setActiveQuestion((prev) => (prev === targetId ? null : targetId));
    } else {
      setActiveQuestion(targetId);
    }
  };

  const faqData = [
    {
      id: "answer1",
      question: "Is this cash back program legitimate?",
      answer: (
        <>
          <p><strong>Yes, completely legitimate.</strong> We've established partnerships with top insurance providers. You pay the standard premium, and we share a portion of our commission with you as cash back.</p>
          <p>We're fully transparent about how the program works and have paid out over रु.25 lakh to our customers.</p>
        </>
      ),
    },
    {
      id: "answer2",
      question: "How much cash back can I expect?",
      answer: (
        <>
          <p>Cash back amounts typically range from <strong>5% to 25%</strong> of your first year's premium, depending on the policy type and provider.</p>
          <p>For example, on a रु.100,000 premium, you could receive रु.25,000 back. Use our calculator above to estimate your potential cash back.</p>
        </>
      ),
    },
    {
      id: "answer3",
      question: "Do I get cash back on subsequent premium payments?",
      answer: (
        <>
          <p><strong>Yes!</strong> We offer cash back on up to three premium payments:</p>
          <ul>
            <li>First payment: 15–25% cash back</li>
            <li>Second payment: 10–15% cash back</li>
            <li>Third payment: 5–10% cash back</li>
          </ul>
        </>
      ),
    },
    {
      id: "answer4",
      question: "When will I receive my cash back?",
      answer: (
        <>
          <p>Cash back payments are processed <strong>60–90 days</strong> after your policy is approved and active. This waiting period helps ensure policy continuity.</p>
          <p>We send payments via bank transfer or check, whichever you prefer.</p>
        </>
      ),
    },
    {
      id: "answer5",
      question: "Are there any program restrictions?",
      answer: (
        <>
          <p>This offer applies exclusively to <strong>new policy applications</strong>. Certain policy types may have varying reward percentages.</p>
          <p>The exact cash back percentage depends on the insurance provider and policy type you choose.</p>
        </>
      ),
    },
    {
      id: "answer6",
      question: "How is the cash back paid out?",
      answer: (
        <>
          <p>We offer multiple payout options for your convenience:</p>
          <ul>
            <li>Direct bank transfer (recommended)</li>
            <li>Check by mail</li>
            <li>Digital wallet (eSewa, Khalti, etc.)</li>
          </ul>
          <p>Processing typically takes 3–5 business days after approval.</p>
        </>
      ),
    },
    {
      id: "answer7",
      question: "Can I still make claims if I get cash back?",
      answer: (
        <>
          <p><strong>Absolutely!</strong> Your policy coverage and claims process remain exactly the same. The cash back comes from our commission, not from your coverage or benefits.</p>
          <p>You have all the same rights and protections as if you bought directly from the insurer.</p>
        </>
      ),
    },
    {
      id: "answer8",
      question: "What if I cancel my policy?",
      answer: (
        <>
          <p>If you cancel your policy within the first 90 days, you may need to return the cash back amount. After 90 days, you keep any cash back already paid.</p>
          <p>Future cash back payments will stop if you cancel or lapse your policy.</p>
        </>
      ),
    },
  ];

  return (
    <section className="faq" id="faq">
      <div className="container" ref={containerRef}>
        <div className="section-title">
          <h2>
            Frequently <span className="highlight">Asked Questions</span>
          </h2>
          <p>Everything you need to know about our cash back program</p>
        </div>

        <div className="faq-container">
          <div className="faq-columns">
            {/* Questions */}
            <div className="faq-questions">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-question ${activeQuestion === faq.id ? "active" : ""}`}
                  onClick={() => toggleQuestion(faq.id)}
                >
                  {faq.question}
                </div>
              ))}
            </div>

            {/* Answers */}
            {!isMobile && (
              <div className="faq-answers">
                {faqData.map((faq) => (
                  <div
                    key={faq.id}
                    className={`faq-answer ${activeQuestion === faq.id ? "active" : ""}`}
                    id={faq.id}
                  >
                    {faq.answer}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile-only answers below questions */}
          {isMobile && (
            <div className="faq-mobile-answers">
              {faqData.map((faq) =>
                activeQuestion === faq.id ? (
                  <div
                    key={faq.id}
                    className="faq-answer mobile-answer active"
                    style={{
                      maxHeight: "1000px",
                      padding: "20px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    {faq.answer}
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FAQs;

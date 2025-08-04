import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaQuestionCircle,
  FaCalculator,
} from "react-icons/fa";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (text) => {
    alert(`${text}\n(This would connect to a live agent in real use.)`);
  };

  return (
    <>
      {/* Chat bubble toggle (visible only on mobile or when closed) */}
      {(!isOpen || isMobile) && (
        <button
          className={`chat-toggle ${isOpen ? "hide" : ""}`}
          onClick={toggleChat}
          aria-label="Open chat"
          title="Open chat"
        >
          <FaComments size={20} />
        </button>
      )}

      {/* Chat widget box */}
      {isOpen && (
        <div className="chat-widget open">
          <div className="chat-header">
            <span>Need help?</span>
            <button
              className="chat-close"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-options">
              <button
                className="chat-option"
                onClick={() => handleOptionClick("Ask a question")}
              >
                <FaQuestionCircle /> Ask a question
              </button>
              <button
                className="chat-option"
                onClick={() => handleOptionClick("Get cash back estimate")}
              >
                <FaCalculator /> Get cash back estimate
              </button>
              <button
                className="chat-option"
                onClick={() => handleOptionClick("Request callback")}
              >
                <FaPhoneAlt /> Request callback
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;

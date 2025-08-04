import React, { useEffect, useState } from "react";

function Scroll2Top() {
  const [visible, setVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    const totalHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Show or hide the button
    setVisible(yOffset > 300);

    // Calculate and set scroll percentage
    const scrolled = (yOffset / totalHeight) * 100;
    setPercentage(Math.round(scrolled));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      id="scrollToTopBtn"
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      title="Go to top"
      aria-label="Scroll to top"
    >
      <span id="scrollPercentage">{percentage}%</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
        />
      </svg>
    </button>
  );
}

export default Scroll2Top;

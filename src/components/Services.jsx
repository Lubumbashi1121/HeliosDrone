import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    // Store the current scroll position
    const scrollPosition = window.scrollY;
    sessionStorage.setItem("key", scrollPosition);

    navigate("/services");
  };

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("key");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem("key"); // Clean up after restoring
    }
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <ul>
          <li>Drone-based crop monitoring</li>
          <li>Pesticide and fertilizer application</li>
          <li>Land surveying and mapping</li>
        </ul>
        <button className="read-more-btn" onClick={handleReadMoreClick}>
          Read More
        </button>
      </div>
    </section>
  );
}

export default Services;
import React, { useEffect } from "react";

function ServicesDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="services-details" className="services-details">
      <div className="container">
        <h2>Services Details</h2>
      </div>
    </section>
  );
}

export default ServicesDetails;

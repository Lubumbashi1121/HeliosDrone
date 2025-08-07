import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section id="services" className="services">  
      <div className="container">
        <div className="service-item">
          <h2>Ipari <br /> szolgáltatásaink</h2>
          <img src="/assets/iparidron.jpg" loading="lazy" alt="Ipari szolgáltatásaink" className="service-image" />
          <Link to="/ipar" className="read-more-btn">
            Tudj meg többet!
          </Link>
        </div>

        <div className="service-item">
          <h2>Mezőgazdasági <br /> szolgáltatásaink</h2>
          <img src="/assets/mezogazdasagidron.jpg" loading="lazy" alt="Mezőgazdasági szolgáltatásaink" className="service-image" />
          <Link to="/mezogazdasag" className="read-more-btn">
            Tudj meg többet!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
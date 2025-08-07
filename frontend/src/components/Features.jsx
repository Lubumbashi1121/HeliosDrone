import React, { useEffect, useRef } from "react";

function Features() {
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("hidden");
          } else {
            entry.target.classList.remove("visible");
            entry.target.classList.add("hidden");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const featureElements = featuresRef.current.querySelectorAll(".feature-item");
    featureElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect(); // Clean up observer
    };
  }, []);

  return (
    <section id="features" className="features">
      <div className="container" ref={featuresRef}>
        <h2>Fő szolgáltatásaink</h2>
        <div className="row">
          <div className="col-md-4 feature-item hidden">
            <img
              src="/assets/drone1.jpg"
              alt="Precision Spraying"
              className="feature-image"
              loading="lazy"
            />
            <h4>Légi permetezés</h4>
            <p>Precíziós növényvédelem drónokkal a mezőgazdaságban.</p>
          </div>
          <div className="col-md-4 feature-item hidden">
            <img
              src="/assets/drone2.jpg"
              alt="Environment Friendly"
              className="feature-image"
              loading="lazy"
            />
            <h4>Növényállapot-elemzés</h4>
            <p>Multispektrális felvételek készítése a növények egészségi állapotának monitorozásához.</p>
          </div>
          <div className="col-md-4 feature-item hidden">
            <img
              src="/assets/drone3.jpg"
              alt="Advanced Technology"
              className="feature-image"
              loading="lazy"
            />
            <h4>Felmérés és térképezés</h4>
            <p>Nagy területek gyors és pontos felmérése ortofotók és 3D modellek készítésével.</p>
          </div>
          <div className="col-md-4 feature-item hidden">
            <img
              src="/assets/drone4.jpg"
              alt="Advanced Technology"
              className="feature-image"
              loading="lazy"
            />
            <h4>Infrastruktúra ellenőrzés</h4>
            <p>Ipari létesítmények, például napelemparkok és elektromos vezetékek rendszeres vizsgálata.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
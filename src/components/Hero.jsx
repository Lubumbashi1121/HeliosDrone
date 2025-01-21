import React from "react";

function App() {
  return (
    <div>
      <section className="hero">
        <div className="hero-video-container">
          <video className="hero-video" autoPlay loop muted playsInline>
            <source src="/assets/dronespray.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
}

export default App;

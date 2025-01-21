import React, { useEffect, useState } from "react";

function Contact() {
  const [bgColor, setBgColor] = useState("rgb(0, 193, 223)");

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      const rect = contactSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate how much of the section is visible
        const sectionHeight = rect.height;
        const visiblePart = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
        const visibilityRatio = visiblePart / sectionHeight;

        // Interpolate between two colors based on the visibility ratio
        const r = Math.round(0 + (255 - 0) * visibilityRatio);
        const g = Math.round(193 + (255 - 193) * visibilityRatio);
        const b = Math.round(223 + (255 - 223) * visibilityRatio);

        setBgColor(`rgb(${r}, ${g}, ${b})`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="contact" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <h2>Contact Us</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4"></textarea>
          </div>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

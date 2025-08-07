import React, { useEffect, useState } from "react";

function Contact() {
  const [bgColor, setBgColor] = useState("black");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch("https://api.heliosdrone.hu/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      alert("Üzenet elküldve!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Hiba történt. Próbáld újra!");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = scrollPosition / maxScroll;
  
      const r = Math.round(245 * (1 - scrollRatio));
      const g = Math.round(244 * (1 - scrollRatio));
      const b = Math.round(188 * (1 - scrollRatio));
  
      const newBgColor = `rgb(${r}, ${g}, ${b})`;
      setBgColor(newBgColor);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="contact" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <h2 className="top">Lépjen kapcsolatba velünk!</h2>
        <div className="content">
          <div className="left-side">
          <div className="qr-wrapper">
            <img src="/assets/qr.jpeg" alt="QR kód" className="qr-img" />
          </div>
            <div>
              <i className="icons fa-solid fa-phone-volume"></i> 
              <a href="tel:+36 20 978 7454" className="nav-link">+36 20 978 7454</a>
            </div>
            <div>
              <i className="icons fa-solid fa-phone-volume"></i> 
              <a href="tel:+36 20 484 4646" className="nav-link">+36 20 500 4017</a>
            </div>
            <div>
              <i className="icons fa-regular fa-envelope"></i> 
              <a href="mailto:info@heliosdrone.hu" className="nav-link">info@heliosdrone.hu</a>
            </div>
          </div>
          <div className="right-side">
            <form onSubmit={handleSubmit}>
              <div>
                <img 
                  src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" 
                  alt="kapcsolat" 
                  className="formenvelope" 
                />
              </div>
              <input 
                type="text" 
                name="name" 
                autoComplete="name given-name" 
                placeholder="Név" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
              <textarea 
                name="message" 
                placeholder="Üzenet" 
                required 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <input type="submit" value="Küldés" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

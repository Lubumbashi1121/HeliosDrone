import React, { useState, useEffect, useRef } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollAction, setScrollAction] = useState("normal");
  const scrollTimeout = useRef(null); // Use ref for consistent timeout behavior
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const menuRef = useRef(null); // Ref for the side menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollAction("shrink");
      } else if (currentScrollY < lastScrollY) {
        setScrollAction("enlarge");
      }

      lastScrollY = currentScrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setScrollAction("normal");
      }, 300); // Increased delay for smoother transitions
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <header className={`py-3 ${scrollAction}`}>
      <nav className="navbar navbar-light">
        <div className="container d-flex justify-content-between align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <a className="navbar-brand" href="">
            <img src="/assets/companypic.jpg" alt="DroneSpray Logo" className="logo" />
          </a>

          <div className="navbar-right">
            {!isMobile && (
              <a href="tel:+1234567890" className="telo">
                +1 (234) 567-890
              </a>
            )}
            <div className="social-icons">
              <a
                href="https://www.instagram.com/samsung"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Samsung Instagram"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/samsung-electronics/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Samsung LinkedIn"
                className="social-icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.facebook.com/Samsung/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Samsung Facebook"
                className="social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={`side-menu ${isMenuOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">
          &times;
        </button>
        <ul className="side-menu-items">
          {isMobile && (
            <li>
              <a href="tel:+1234567890" className="telo">
                +1 (234) 567-890
              </a>
            </li>
          )}
          <li>
            <a href="#features" onClick={handleMenuClick}>
              Features
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleMenuClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={handleMenuClick}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {isMenuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
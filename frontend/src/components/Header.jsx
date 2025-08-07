import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollAction, setScrollAction] = useState("normal");
  const scrollTimeout = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      }, 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
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

  const handleNavigation = (path, scrollToId) => {
    setIsMenuOpen(false);
    navigate(path);
    if (scrollToId) {
      setTimeout(() => {
        const targetElement = document.getElementById(scrollToId);
        if (targetElement) {
          window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
        }
      }, 100); 
    }
  };

  const isMainPage = location.pathname == "/";
  const isIpariPage = location.pathname == "/ipar";
  const isMezogazdasagiPage = location.pathname == "/mezogazdasag";
  const isGallery = location.pathname == "/galeria";

  const getNavbarBackgroundColor = () => {
    if (isIpariPage) return "rgb(10, 20 ,54)";
    if (isMezogazdasagiPage) return "rgb(0,48,27)";
    return "#191919";
  };

  const getLogoSrc = () => {
    if (isIpariPage) return "/assets/iparipic.webp";
    if (isMezogazdasagiPage) return "/assets/mgpic.webp";
    return "/assets/companypic.webp";
  };

  return (
    <>
      <header className={`py-3 ${isMainPage ? scrollAction : ""}`} style={{ backgroundColor: getNavbarBackgroundColor() }}>
        <nav className="navbar navbar-light">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="navbar-left d-flex align-items-center">
            <div className="navbar-links">
            {isMainPage ? (
                  <>
                    {!isMobile ? (
                      <>
                        <a href="" className="nav-link ipar-link" onClick={(e) => { e.preventDefault(); handleNavigation('/ipar'); }}>
                          Ipar
                        </a>
                        <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/mezogazdasag'); }}>
                          Mezőgazdaság
                        </a>
                      </>
                    ) : (
                      <button
                        id="navbar-toggler"
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                      >
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    )}
                  </>
                ): isIpariPage ? (
                  <>
                    {!isMobile ? (
                      <>
                        <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
                          Főoldal
                        </a>
                        <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/mezogazdasag'); }}>
                          Mezőgazdaság
                        </a>
                      </>
                    ) : (
                      <button
                        id="navbar-toggler"
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                      >
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    )}
                  </>
                ) : isMezogazdasagiPage ? (
                  <>
                    {!isMobile ? (
                      <>
                        <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
                          Főoldal
                        </a>
                        <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/ipar'); }}>
                          Ipar
                        </a>
                      </>
                    ) : (
                      <button
                        id="navbar-toggler"
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                      >
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    )}
                  </>
                ) : isGallery ? (
                  <>
                    {!isMobile ? (
                      <>
                        <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/ipar'); }}>
                          Ipar
                        </a>
                        <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/mezogazdasag'); }}>
                          Mezőgazdaság
                        </a>
                      </>
                    ) : (
                      <button
                        id="navbar-toggler"
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                      >
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {!isMobile && (
                      <>
                        <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/ipar'); }}>
                          Ipar
                        </a>
                        <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/mezogazdasag'); }}>
                          Mezőgazdaság
                        </a>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            <a className="navbar-brand" href="">
            <img
              src={getLogoSrc()}
              alt="logó"
              className='logo'
            />
            </a>

            <div className="navbar-right d-flex align-items-center">
            <div className="navbar-links">
              {isGallery ? (
                <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
                  Főoldal
                </a>
              ) : (
                <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/galeria'); }}>
                  Galéria
                </a>
              )}
              <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/', 'contact'); }}>
                Kapcsolat
              </a>
            </div>

              <div className="social-icons">
                <a
                  href="https://www.instagram.com/helios.drone?igsh=NjkwbnAzYnRpa2Ey"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HeliosDrone Instagram"
                  className="social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/heliosdrone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HeliosDrone LinkedIn"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.facebook.com/share/169vFg45qJ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HeliosDrone Facebook"
                  className="social-icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {isMainPage && (
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
                <>
                  <li>
                    <a href="" onClick={(e) => { e.preventDefault(); handleNavigation('/ipar'); }}>
                      Ipar
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={(e) => { e.preventDefault(); handleNavigation('/mezogazdasag'); }}>
                      Mezőgazdaság
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/galeria'); }}>
                     Galéria
                   </a>
                  </li>
                  <li>
                    <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/', 'contact'); }}>
                      Kapcsolat
                    </a>
                  </li>
                </>
              )}
              <li>
              </li>
            </ul>
          </div>
        )}

        {(isIpariPage && isMobile) && (
          <div
            ref={menuRef}
            className={`side-menu ${isMenuOpen ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">
              &times;
            </button>
            <ul className="side-menu-items">
              <li>
                <a href="" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
                  Főoldal
                </a>
              </li>
              <li>
                <a href="" onClick={(e) => { e.preventDefault(); handleNavigation('/mezogazdasag'); }}>
                  Mezőgazdaság
                </a>
              </li>
              <li>
                <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/galeria'); }}>
                  Galéria
                </a>
              </li>
              <li>
                 <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/', 'contact'); }}>
                  Kapcsolat
                 </a>
              </li>
            </ul>
          </div>
        )}

        {(isMezogazdasagiPage && isMobile) && (
          <div
            ref={menuRef}
            className={`side-menu ${isMenuOpen ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">
              &times;
            </button>
            <ul className="side-menu-items">
              <li>
                <a href="" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
                  Főoldal
                </a>
              </li>
              <li>
                <a href="" onClick={(e) => { e.preventDefault(); handleNavigation('/ipar'); }}>
                  Ipar
                </a>
              </li>
              <li>
                <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/galeria'); }}>
                  Galéria
                </a>
              </li>
              <li>
                <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/', 'contact'); }}>
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>
        )}

        {(isGallery && isMobile) && (
          <div
            ref={menuRef}
            className={`side-menu ${isMenuOpen ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">
              &times;
            </button>
            <ul className="side-menu-items">
              <li>
                <a href="" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
                  Főoldal
                </a>
              </li>
              <li>
                <a href="" onClick={(e) => { e.preventDefault(); handleNavigation('/ipar'); }}>
                  Ipar
                </a>
              </li>
              <li>
                <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/mezogazdasag'); }}>
                  Mezőgazdaság
                </a>
              </li>
              <li>
                 <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/', 'contact'); }}>
                  Kapcsolat
                 </a>
              </li>
            </ul>
          </div>
        )}

        {isMenuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
      </header>
    </>
  );
}

export default Header;
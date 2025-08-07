import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
      <a href="/adatkezelesi.pdf" target="_blank" rel="noopener noreferrer">
        Adatkezelési tájékoztató
      </a>
        <span>|</span>
        <a href="/impresszum">Impresszum</a>
      </div>
      <div className="footer-text">
        <p>A HeliosDrone Kft. rendelkezik a Nébih hivatalos növényvédelmi drónpilóta nyilvántartásba bejegyzett drónpilótával.</p>
        <p>Copyright © 2024 HeliosDrone Kft. | Minden jog fenntartva. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

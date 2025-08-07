import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Contact from "./components/Contact";
import IpariAloldal from "./components/IpariAloldal";
import MezogazdasagiAloldal from "./components/MezogazdasagiAloldal";
import GaleriaAloldal from "./components/GaleriaAloldal";
import Footer from "./components/Footer";
import Impresszum from "./components/Impresszum";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Only render Header if not on /impresszum or /adatkezelesi */}
      {location.pathname !== "/impresszum" && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Services />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/ipar" element={<IpariAloldal />} />
        <Route path="/mezogazdasag" element={<MezogazdasagiAloldal />} />
        <Route path="/galeria" element={<GaleriaAloldal />} />
        <Route path="/impresszum" element={<Impresszum />} />
      </Routes>
    </>
  );
}

export default App;

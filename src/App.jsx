import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ServicesDetails from "./components/ServicesDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />  
            <Services />
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/services" element={<ServicesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
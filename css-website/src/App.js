import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<About />} />
          <Route path="/resources" element={<Services />} />
          <Route path="/members" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

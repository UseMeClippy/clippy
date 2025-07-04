import React from "react";
import "./Home.css"; // Create this CSS file separately for styling
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Roadmap = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
<div className="social-icons">
  <a href="https://twitter.com/usemecoin" target="_blank" rel="noopener noreferrer">
    <FaXTwitter size={40} />
  </a>
</div>
      <nav className="navbar">
        <ul>
          <Link to="/">USE ME</Link>
          <Link to="/tokenomics">TOKENOMICS</Link>
          <Link to="/roadmap">ROADMAP</Link>
          <a href="#community">COMMUNITY</a>
        </ul>
      </nav>

      {/* Main Banner Section */}
      <section className="banner">
        <div className="left-banner">
          <img src="/roadmap.png" alt="Clippy saying use me" className="clippy-image" />
        </div>
      </section>


      {/* Footer Text Box */}
      <section className="footer-section">
        <div className="text-box">
          <h3>Clippy has a masterplan, and he will show you very soon.</h3>
          <p>Be early. Be degen. Be rich. 🚀</p>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;

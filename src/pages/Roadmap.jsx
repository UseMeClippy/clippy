import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Roadmap = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Social icons */}
      <div className="social-icons">
        <a
          href="https://twitter.com/usemecoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={30} />
        </a>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>USE ME</Link></li>
          <li><Link to="/tokenomics" onClick={closeMenu}>TOKENOMICS</Link></li>
          <li><Link to="/roadmap" onClick={closeMenu}>ROADMAP</Link></li>
          <li><a href="#community" onClick={closeMenu}>COMMUNITY</a></li>
        </ul>
      </nav>

      {/* Main Banner Section */}
      <section className="banner fade-in-section">
        <div className="left-banner">
          <img
            src="/roadmap.png"
            alt="Clippy roadmap"
            className="clippy-image"
          />
        </div>
      </section>

      {/* Footer Text Box */}
      <section className="footer-section fade-in-section">
        <div className="text-box">
          <h3>Clippy has a masterplan, and he will show you very soon.</h3>
          <p>Be early. Be degen. Be rich. 🚀</p>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;

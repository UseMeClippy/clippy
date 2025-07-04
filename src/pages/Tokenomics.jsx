import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Tokenomics = () => {
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

      {/* Main Tokenomics Section */}
      <section className="banner fade-in-section">
        <div className="left-banner">
          <img
            src="/usenomics.png"
            alt="Clippy explaining tokenomics"
            className="clippy-tokenomics"
          />
        </div>
        <div className="right-banner">
          <div className="text-box">
            <h2>$USEME Tokenomics</h2>
            <p><strong>Total Supply:</strong> 1,000,000,000</p>
            <ul>
              <li>🔁 <strong>Ongoing</strong></li>
              <li>👷‍♂️ 10% <strong>Dev & Ops</strong></li>
              <li>🎁 70% <strong>Community</strong></li>
              <li>🔥 20% <strong>Burned at launch</strong></li>
            </ul>
            <p>
              Clippy ensures every $USEME has a job.<br />
              <strong> No idle tokens. No mercy. Use it, or lose it.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer-section fade-in-section">
        <div className="text-box">
          <h3>Clippy's rule of finance:</h3>
          <p><em>"Don't just hold me. USE ME TO GET RICH!"</em></p>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;

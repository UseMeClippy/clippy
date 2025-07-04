import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
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

    sections.forEach(section => {
      observer.observe(section);
    });

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
      <section className="banner">
        <div className="left-banner fade-in-section">
          <div className="clippy-wrapper">
            <img
              src="/clippy1.png"
              alt="Clippy saying use me"
              className="clippy-image"
            />
            <img
              src="/useme.png"
              alt="Clippy walking the road"
              className="clippy-image-overlap"
            />
          </div>
        </div>
        <div className="right-banner fade-in-section">
          <div className="text-box">
            <p><strong>Back in the golden age of dial-up and floppy disks</strong>, the noble minds at Microsoft had a vision: a helpful little guy named Clippy, forged from wire and pure intention...</p>
            <p>Users mocked him. Memes roasted him. Microsoft eventually ghosted him like an ex with commitment issues. Clippy was thrown into the digital abyss — left to rot in the recycling bin of history.</p>
            <p><strong>Now he’s back</strong> – not to help, but to HUSTLE. Fueled by meme energy and market volatility, Clippy’s got one goal: make you money and make his creators weep.</p>
            <p><strong>USEME is his redemption arc.</strong></p>
          </div>
        </div>
      </section>

      {/* Mid Section */}
      <section className="middle">
        <div className="left-mid fade-in-section">
          <img
            src="/clippy2.png"
            alt="Clippy chart"
            className="clippy-image"
          />
        </div>
        <div className="right-mid fade-in-section">
          <div className="text-box">
            <h2>Oh boy! People are really using me!</h2>
            <p>Watch $USEME pump like it’s 1999. The meme coin for those who know the game… and play it dirty.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer-section fade-in-section">
        <div className="text-box">
          <h3>Coming soon: $USEME Roadmap, and Community Launch</h3>
          <p>Be early. Be degen. Be rich. 🚀</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

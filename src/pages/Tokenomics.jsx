import React from "react";
import "./Home.css"; // Du kan evt. skifte navnet til Tokenomics.css for klarhed
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tokenomics = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="social-icons">
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={40} />
        </a>
        <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane size={40} />
        </a>
      </div>
      
      <nav className="navbar">
        <ul>
          <li><Link to="/">USE ME</Link></li>
          <Link to="/tokenomics">TOKENOMICS</Link>
          <li><a href="/roadmap">ROADMAP</a></li>
          <li><a href="#community">COMMUNITY</a></li>
        </ul>
      </nav>

      {/* Main Section */}
      <section className="banner">
        <div className="left-banner">
          <img src="/usenomics.png" alt="Clippy explaining tokenomics" className="clippy-tokenomics" />
        </div>
        <div className="right-banner">
          <div className="text-box">
            <h2>$USEME Tokenomics</h2>
            <p><strong>Total Supply:</strong> 1,000,000,000</p>
            <ul>
              <li>🔁 50% Liquidity Pool</li>
              <li>📈 25% Marketing & Growth</li>
              <li>👷‍♂️ 15% Dev & Ops</li>
              <li>🎁 5% Community Rewards</li>
              <li>🔥 5% Burned at launch</li>
            </ul>
            <p>
              Clippy ensures every $USEME has a job. No idle tokens, no mercy.  
              <strong> Use it, or lose it.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        <div className="text-box">
          <h3>Clippy's rule of finance:</h3>
          <p><em>"Don't just hold me. USE ME TO GET RICH!"</em></p>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;

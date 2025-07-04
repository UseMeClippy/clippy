import React from "react";
import "./Home.css"; // Create this CSS file separately for styling
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
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
  <div className="clippy-wrapper">
    <img src="/clippy1.png" alt="Clippy saying use me" className="clippy-image" />
    <img src="/useme.png" alt="Clippy walking the road" className="clippy-image-overlap" />
  </div>
</div>
  <div className="right-banner">
    <div className="text-box">
      <p>
        <strong>Back in the golden age of dial-up and floppy disks</strong>, the noble minds at Microsoft had a vision: a helpful little guy named Clippy, forged from wire and pure intention...
      </p>
      <p>
        Users mocked him. Memes roasted him. Microsoft eventually ghosted him like an ex with commitment issues. Clippy was thrown into the digital abyss — left to rot in the recycling bin of history.
      </p>
      <p>
        <strong>Now he’s back</strong> – not to help, but to HUSTLE. Fueled by meme energy and market volatility, Clippy’s got one goal: make you money and make his creators weep.
      </p>
      <p><strong>USEME is his redemption arc.</strong></p>
    </div>
  </div>
</section>

      {/* Mid Section */}
<section className="middle">
  <div className="right-mid">
    <div className="text-box">
      <h2>Oh boy! People are really using me!</h2>
      <p>Watch $USEME pump like it’s 1999. The meme coin for those who know the game… and play it dirty.</p>
    </div>
  </div>
  <div className="left-mid">
    <img src="/clippy2.png" alt="Clippy chart" className="clippy-image" />
  </div>
</section>

      {/* Footer Text Box */}
      <section className="footer-section">
        <div className="text-box">
          <h3>Coming soon: $USEME Roadmap, and Community Launch</h3>
          <p>Be early. Be degen. Be rich. 🚀</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

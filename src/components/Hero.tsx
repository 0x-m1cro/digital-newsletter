import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Stay Ahead in the LLM Revolution</h1>
        <p className="hero-subtitle">
          A curated monthly digest of the most important LLM developments and research highlights
        </p>
        <p className="hero-description">
          I'm building <strong>Datasette</strong>, <strong>LLM</strong>, and <strong>sqlite-utils</strong> - 
          an ecosystem of tools for exploring, analyzing, and publishing data.
        </p>
        <div className="hero-cta">
          <a href="#subscribe" className="cta-button primary">
            Subscribe Now
          </a>
          <a href="#projects" className="cta-button secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

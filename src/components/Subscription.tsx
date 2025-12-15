import React from 'react';
import './Subscription.css';

const Subscription: React.FC = () => {
  return (
    <section id="subscribe" className="subscription">
      <div className="subscription-container">
        <h2 className="section-title">Choose Your Sponsorship Tier</h2>
        <p className="section-subtitle">
          Support the development of open source data tools and get exclusive newsletter access
        </p>

        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="card-header">
              <h3 className="tier-name">Supporter</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">10</span>
                <span className="period">/month</span>
              </div>
            </div>
            <ul className="features">
              <li>✓ Monthly LLM digest newsletter</li>
              <li>✓ Curated research highlights</li>
              <li>✓ 10-minute monthly updates</li>
              <li>✓ Support open source development</li>
            </ul>
            <button className="subscribe-button">Subscribe Now</button>
          </div>

          <div className="pricing-card featured">
            <div className="badge">Most Popular</div>
            <div className="card-header">
              <h3 className="tier-name">Enthusiast</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">25</span>
                <span className="period">/month</span>
              </div>
            </div>
            <ul className="features">
              <li>✓ All Supporter benefits</li>
              <li>✓ Early access to new features</li>
              <li>✓ Priority support</li>
              <li>✓ Exclusive community access</li>
            </ul>
            <button className="subscribe-button">Subscribe Now</button>
          </div>

          <div className="pricing-card">
            <div className="card-header">
              <h3 className="tier-name">Professional</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">50</span>
                <span className="period">/month</span>
              </div>
            </div>
            <ul className="features">
              <li>✓ All Enthusiast benefits</li>
              <li>✓ Technical deep dives</li>
              <li>✓ Private consultation</li>
              <li>✓ Recognition in projects</li>
            </ul>
            <button className="subscribe-button">Subscribe Now</button>
          </div>
        </div>

        <div className="newsletter-info">
          <h3>What You'll Get</h3>
          <p>
            <strong>$10/month and up sponsors</strong> get a short, curated email digest of the month's 
            most important LLM developments and highlights from my research. If you want to stay on top 
            of what's going on in the world of LLMs but don't want to spend more than 10 minutes reading 
            about it, this newsletter is for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscription;

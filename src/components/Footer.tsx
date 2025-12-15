import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <p>
              Supporting the development of open source data tools and providing 
              curated LLM insights to our community.
            </p>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://datasette.io/" target="_blank" rel="noopener noreferrer">Datasette</a></li>
              <li><a href="https://llm.datasette.io/" target="_blank" rel="noopener noreferrer">LLM</a></li>
              <li><a href="https://sqlite-utils.datasette.io/" target="_blank" rel="noopener noreferrer">sqlite-utils</a></li>
              <li><a href="#subscribe">Subscribe</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Digital Newsletter. Supporting open source data tools.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

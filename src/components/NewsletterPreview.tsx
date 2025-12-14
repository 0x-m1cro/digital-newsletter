import React from 'react';
import './NewsletterPreview.css';

const NewsletterPreview: React.FC = () => {
  const newsletters = [
    { month: 'May 2025', url: '#', highlight: 'GPT-5 Announcement & Multimodal Advances' },
    { month: 'June 2025', url: '#', highlight: 'Open Source LLM Breakthroughs' },
    { month: 'July 2025', url: '#', highlight: 'Enterprise AI Integration Trends' },
    { month: 'August 2025', url: '#', highlight: 'Context Window Innovations' },
    { month: 'September 2025', url: '#', highlight: 'AI Safety & Alignment Progress' },
  ];

  return (
    <section className="newsletter-preview">
      <div className="preview-container">
        <h2 className="section-title">Example Issues</h2>
        <p className="section-subtitle">
          See what subscribers are reading each month
        </p>

        <div className="newsletter-grid">
          {newsletters.map((newsletter, index) => (
            <div key={index} className="newsletter-card">
              <div className="newsletter-icon">📧</div>
              <h3 className="newsletter-month">{newsletter.month}</h3>
              <p className="newsletter-highlight">{newsletter.highlight}</p>
              <a href={newsletter.url} className="read-more">
                Read Sample →
              </a>
            </div>
          ))}
        </div>

        <div className="testimonial">
          <blockquote>
            "The perfect way to stay informed about LLM developments without the noise. 
            Each issue is concise, insightful, and worth every minute."
          </blockquote>
          <cite>— Tech Leader & Subscriber</cite>
        </div>
      </div>
    </section>
  );
};

export default NewsletterPreview;

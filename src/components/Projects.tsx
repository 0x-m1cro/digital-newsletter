import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'Datasette',
      description: 'An open source multi-tool for exploring and publishing data. Instantly publish data to the web with a JSON API.',
      icon: '🗄️',
      link: 'https://datasette.io/',
      features: [
        'Interactive data exploration',
        'Automatic JSON API',
        'Rich plugin ecosystem',
        'SQL query interface'
      ]
    },
    {
      name: 'LLM',
      description: 'A CLI utility and Python library for interacting with Large Language Models, both via remote APIs and models that can be installed and run locally.',
      icon: '🤖',
      link: 'https://llm.datasette.io/',
      features: [
        'Multiple LLM providers',
        'Local model support',
        'Plugin architecture',
        'Conversation history'
      ]
    },
    {
      name: 'sqlite-utils',
      description: 'Python CLI utility and library for manipulating SQLite databases. Create tables, insert data, and run queries with simple commands.',
      icon: '🔧',
      link: 'https://sqlite-utils.datasette.io/',
      features: [
        'Easy data import/export',
        'Schema management',
        'Full-text search',
        'Python API & CLI'
      ]
    }
  ];

  const plugins = [
    { name: 'datasette-graphql', description: 'GraphQL API for Datasette' },
    { name: 'datasette-cluster-map', description: 'Interactive cluster maps' },
    { name: 'datasette-auth', description: 'Authentication plugins' },
    { name: 'datasette-publish', description: 'Publishing tools' }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects Your Sponsorship Supports</h2>
        <p className="section-subtitle">
          Your support helps maintain and develop these open source tools
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Explore {project.name} →
              </a>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <div className="info-section">
            <h3>📝 Blog & Newsletter</h3>
            <p>
              Comprehensive coverage of developments in the world of LLMs and open source data tooling. 
              Weekly-ish updates with deep technical insights.
            </p>
          </div>

          <div className="info-section">
            <h3>🔌 Datasette Plugins</h3>
            <div className="plugin-list">
              {plugins.map((plugin, idx) => (
                <div key={idx} className="plugin-item">
                  <strong>{plugin.name}</strong> - {plugin.description}
                </div>
              ))}
              <div className="plugin-item">
                <em>...and dozens more!</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

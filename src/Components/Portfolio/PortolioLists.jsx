import './PortfolioCommon.css';
import { useState, useEffect } from 'react';

export const PortfolioLists = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch('Database/portfolio.json') // Fetch the portfolio JSON data
      .then((response) => response.json())
      .then((data) => setPortfolioData(data))
      .catch((error) => console.error('Error fetching portfolio data:', error));
  }, []);

  if (!portfolioData) return null; // Don't render anything if data is not available

  const { heading, description, projects } = portfolioData;

  return (
    <section className="projects-list">
      <div className="section-header">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.alt} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

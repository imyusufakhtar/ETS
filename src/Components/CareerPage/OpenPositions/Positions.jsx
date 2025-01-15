import './Positions.css';
import { useState, useEffect } from 'react';

export const Positions = () => {
  const [positionsData, setPositionsData] = useState(null);

  useEffect(() => {
    fetch('Database/Career/openPositions.json')
      .then((response) => response.json())
      .then((data) => setPositionsData(data))
      .catch((error) => console.error('Error fetching positions data:', error));
  }, []);

  if (!positionsData) return null; // Don't render anything if data is not available

  const { heading, positions } = positionsData;

  return (
    <div className="career-section">
      <h2 className="section-title">{heading}</h2>
      <div className="positions-container">
        {positions.map((position, index) => (
          <div className="position-card" key={index}>
            <h3>{position.title}</h3>
            <p>{position.description}</p>
            <p>If you're passionate about technology and want to be part of a growing company, send your resume to <a href={`mailto:${position.email}`}>{position.email}</a></p>
            <a href={`mailto:${position.email}`} className="apply-btn">Apply Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

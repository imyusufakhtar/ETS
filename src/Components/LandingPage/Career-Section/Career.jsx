import './Careers.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Career = () => {
  const [careerData, setCareerData] = useState(null);

  useEffect(() => {
    fetch('Database/Career/landingPage.json') 
      .then((response) => response.json())
      .then((data) => setCareerData(data))
      .catch((error) => console.error('Error fetching career data:', error));
  }, []);

  if (!careerData) return null; // Don't render anything if data is not available

  const { heading, description, contactText, email, buttonText, buttonLink } = careerData;

  return (
    <section className="career">
      <div className="career-container">
        <h2>{heading}</h2>
        <p>{description}</p>
        <p>
          {contactText} <a href={`mailto:${email}`}>{email}</a>
        </p>
        <div className="career-wrapper">
          <Link to={buttonLink} className="career-btn">{buttonText}</Link>
        </div>
      </div>
    </section>
  );
};

import './About.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('Database/about.json') 
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error('Error fetching about data:', error));
  }, []);

  // Only render the content once aboutData is available
  if (!aboutData) return null;

  const { image, heading, paragraphs, links } = aboutData;

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-img">
          <img src={image.src} alt={image.alt} />
        </div>
        <div className="about-content">
          <h2>{heading}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="about-links">
            {links.map((link, index) => (
              <Link to={link.to} className="btn-link" key={index}>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

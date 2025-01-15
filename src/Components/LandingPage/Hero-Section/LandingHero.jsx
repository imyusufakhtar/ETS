import './LandingHero.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../../../Loader';

export const LandingHero = () => {
  const [heroData, setHeroData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Ensure loader stays for 1 seconds

    fetch('Database/Hero/landingHero.json')
      .then((response) => response.json())
      .then((data) => setHeroData(data))
      .catch((error) => console.error('Error fetching landing hero data:', error));
  }, []);

  if (isLoading) {
    return <Loader/>
  }

  if (!heroData) return null;

  const { heading, description, cta_buttons } = heroData;

  return (
    <section className="Landing-hero">
      <div className="Landing-hero-content">
        <h1>{heading}</h1>
        <p>{description}</p>
        <div className="Landing-cta-buttons">
          {cta_buttons.map((button, index) => (
            <Link key={index} to={button.link} className={button.class}>
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

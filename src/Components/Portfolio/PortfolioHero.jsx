import { useState, useEffect } from 'react';
import { Loader } from '../../Loader';

export const PortfolioHero = () => {
  const [heroData, setHeroData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 700); // Ensure loader stays for 0.7 seconds

    fetch('Database/Hero/portfolioHero.json')
      .then((response) => response.json())
      .then((data) => setHeroData(data))
      .catch((error) => console.error('Error fetching Portfolio Hero data:', error));
  }, []);

  if (isLoading) {
    return <Loader/>
  }

  if (!heroData) return null; // Don't render anything if data is not available

  const { heading, description } = heroData;

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

import './Common.css';
import { useState, useEffect } from 'react';

export const ServicesLists = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    fetch('Database/services.json')
      .then((response) => response.json())
      .then((data) => setServicesData(data))
      .catch((error) => console.error('Error fetching services data:', error));
  }, []);

  if (!servicesData) return null; 

  const { heading, description, services } = servicesData;

  return (
    <section className="services">
      <h2>{heading}</h2>
      <p className="services-desc">{description}</p>
      <div className="services-grid" >
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.image} alt={service.alt} className="service-img" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

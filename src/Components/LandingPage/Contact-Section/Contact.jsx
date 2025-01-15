import './Contact.css';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    fetch('Database/contact.json') 
      .then((response) => response.json())
      .then((data) => setContactData(data))
      .catch((error) => console.error('Error fetching contact data:', error));
  }, []);

  if (!contactData) return null; // Don't render anything if data is not available

  const { heading, description, contactDetails } = contactData;

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>{heading}</h2>
          <p>{description}</p>
          <ul>
            <li><strong>Email:</strong> <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></li>
            <li><strong>Phone:</strong> {contactDetails.phone}</li>
            <li><strong>Address:</strong> {contactDetails.address}</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

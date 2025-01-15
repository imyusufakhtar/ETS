import { useEffect, useState } from 'react';
import './Values.css';

export const Values = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('Database/values.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch values');
        }
        return response.json();
      })
      .then((data) => setValues(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="values">
      {values.map((value, index) => (
        <div className={value.className} key={index}>
          <h3>{value.content.heading}</h3>
          <p>{value.content.paragraph}</p>
        </div>
      ))}
    </section>
  );
};

import { useState } from 'react';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Handle changes to form input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate form data
    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.message) {
            setError('All fields are required.');
            return false;
        }
        
        // Email validation (simple regex)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(formData.email)) {
            setError('Please enter a valid email address.');
            return false;
        }

        setError('');
        return true;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form before submitting
        if (!validateForm()) return;

        // Placeholder for your form submission logic (e.g., sending data to an API or server)
        console.log('Form data:', formData);
        
        // Simulate a successful submission
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <div className="contact-form">
            <h3>Send Us a Message</h3>
            {success && <p className="success-message">Your message has been sent successfully!</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    aria-label="Your Name"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    aria-label="Your Email"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                    aria-label="Your Message"
                ></textarea>
                <button type="submit" className="cta-btn">
                    Send Message
                </button>
            </form>
        </div>
    );
};

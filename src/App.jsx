import './App.css';
import './Header.css';
import './Hero.css';
import './Services.css';
import './Footer.css';

import { Header } from './Header';
import { Footer } from './Footer';
import { Landing } from './Components/LandingPage/Landing';
import { AboutMain } from './Components/AboutPage/AboutMain';
import { ServicesMain } from './Components/ServicesPage/ServicesMain';
import { PortfolioMain } from './Components/Portfolio/PortfolioMain';
import { CareerMain } from './Components/CareerPage/CareerMain';
import { ContactMain } from './Components/ContactPage/ContactMain';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/services" element={<ServicesMain />} />
        <Route path="/portfolio" element={<PortfolioMain />} />
        <Route path="/career" element={<CareerMain />} />
        <Route path="/contact" element={<ContactMain />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

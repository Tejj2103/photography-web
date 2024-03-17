import React from 'react';
import "./sass/main.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/Navigation/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/ContactUs/Contact';
import Films from './pages/Films/Films';
import Photography from './pages/Photography/Photography';
import Footer from './components/Footer/Footer';
import Testimonials from './pages/Testimonials/Testimonials';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/films' element={<Films />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

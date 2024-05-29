import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Services } from '../src/components/index'; // Importez le composant Services depuis son emplacement correct
import Nosrealisations from '../src/components/Nosrealisations'; //
import ContactPage from '../src/components/ContactPage';
import Article1 from '../src/components/Article1';
import Article2 from '../src/components/Article2';
import Article3 from '../src/components/Article3';
import Blog from '../src/components/Blog';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route   path="/services" element={<Services />} /> 
        <Route path="/nosrealisations" element={<Nosrealisations />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/Article1" element={<Article1 />} />
        <Route path="/Article2" element={<Article2 />} />
        <Route  path="/Article3" element={<Article3 />} />
        <Route path="/Blog" element={<Blog />} />
        </Routes>  
        </Router>
  );
}

export default App;

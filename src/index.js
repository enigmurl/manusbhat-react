/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Academic from './routes/Academic';
import Contact from './routes/Contact';
import Extracurriculars from './routes/Extracurriculars';
import Home from './routes/Home';
import Skills from './routes/Skills';
import Work from './routes/Work';

import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="work" element={<Work />} />
      <Route path="extracurriculars" element={<Extracurriculars />} />
      <Route path="academic" element={<Academic />} />
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
</BrowserRouter>
);
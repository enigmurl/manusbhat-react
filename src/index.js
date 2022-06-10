/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Academics from './routes/academics';
import Contact from './routes/contact';
import Extracurriculars from './routes/extracurriculars';
import Home from './routes/index';
import Skills from './routes/skills';
import Work from './routes/work';

import './css/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="index.html" element={<Home />} />
      <Route path="/" element={<Home />} />

      <Route path="work.html" element={<Work />} />
      <Route path="extracurriculars.html" element={<Extracurriculars />} />
      <Route path="academics.html" element={<Academics />} />
      <Route path="skills.html" element={<Skills />} />
      <Route path="contact.html" element={<Contact />} />
    </Routes>
</BrowserRouter>
);
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
      <Route path="/" element={<Home />} />

      <Route path="work" element={<Work />} />
      <Route path="extracurriculars" element={<Extracurriculars />} />
      <Route path="academics" element={<Academics />} />
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
</BrowserRouter>
);
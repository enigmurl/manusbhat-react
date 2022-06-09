/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Academics from './routes/Academics';
import Contact from './routes/Contact';
import Extracurriculars from './routes/Extracurriculars';
import Home from './routes/Home';
import Skills from './routes/Skills';
import Work from './routes/Work';

import './css/globals.css';
import Compiler from './react-compiler/compiler';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Compiler>
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
</Compiler>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './components/App/App';
import Blog from './components/Blog/Blog'
import reportWebVitals from './reportWebVitals';
import Post from './components/Blog/Post';
import Sobre from './components/Sobre/Sobre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/post" element={<Post />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

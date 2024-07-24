import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './Comonent/Home';
import About from './Comonent/About';

const App = () => (
  <div>
    <Helmet>
      <title>Default Title</title>
      <meta name="description" content="Default description" />
    </Helmet>
    <Routes>
    <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/" element={<Home/>} />
    
    </Routes>

  </div>
);

export default App;

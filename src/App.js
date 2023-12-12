import React from 'react';
import './index.css';
import Navbar from './component/Navbar';
import Section from './component/Section';
import Content from './component/content';
import Focus from './component/main-focus';
import Project from './component/our-project';


function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <Section />
      <Content />
      <Focus />
      <Project />
    </React.StrictMode>
  );
}

export default App;

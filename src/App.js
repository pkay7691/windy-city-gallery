import React from 'react';
import ThreeScene from './components/ThreeScene';
import './App.css';


const App = () => {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <h1>3D Walk-around Experience</h1>
      <ThreeScene />
    </div>
  );
};

export default App;

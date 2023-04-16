import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './logo-2.png'
import { Canvas } from '@react-three/fiber';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='header'>
      <img src={logo} alt="image" className='logo'/>
    </div>
    <Canvas>
      <App />
    </Canvas>
  </React.StrictMode>
);

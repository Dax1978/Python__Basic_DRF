import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


// import { ContextAuthProvider } from "./context/ContextAuth";
import { Page } from './pages/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>
);

reportWebVitals();
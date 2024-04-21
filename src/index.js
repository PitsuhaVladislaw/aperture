import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './pages/Header';
import Footer from './pages/Footer';
import MainPage from './pages/Main';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <MainPage />
    <Footer />
  </React.StrictMode>
);
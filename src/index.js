import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './pages/Header';
import Footer from './pages/Footer';
import MainPage from './pages/Main';
import NavMenu from './components/NavMenu';
import './style/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavMenu />
    <Header />
    <MainPage />
    <Footer />
  </React.StrictMode>
);
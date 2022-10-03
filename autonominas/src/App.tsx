import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '';
import Footer from '';
import Home from '';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}> {/* descola o footer do navbar */}
        <Routes> {/* Antigo Switch */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </ BrowserRouter >
  );
}

export default App;

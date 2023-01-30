import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Basket from './components/Basket/Basket';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import OneCard from './components/OneCard/OneCard';
import Category from './components/Category/Category';

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:categoryPath" element={<Category />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<OneCard />} />

      </Routes>
    </Container>
  );
}

export default App;

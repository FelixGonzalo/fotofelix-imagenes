import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.scss';
import ImageRepository from './pages/admin/ImageRepository';
import Layout from './pages/admin/Layout';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin/" element={<Layout />} >
          <Route index element={<div>Administración</div>} />
          <Route path="repositorio" element={<ImageRepository />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

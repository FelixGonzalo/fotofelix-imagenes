import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './styles/global.scss';
import Home from './pages/home';
import Layout from './pages/admin/Layout';
import ImageRepository from './pages/admin/ImageRepository';
import CategoryDashboard from './pages/admin/CategoryDashboard';
import CustomerDashboard from './pages/admin/CustomerDashboard';
import CustomerImageRepositoryFinder from './pages/admin/CustomerImageRepositoryFinder';
import CustomerImageRepository from './pages/admin/CustomerImageRepository';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin/" element={<Layout />} >
          {/* <Route index element={<CustomerImageRepositoryFinder />} /> */}
          <Route path="buscador-de-repositorios" element={<CustomerImageRepositoryFinder />} />
          <Route path="repositorio-de-imagenes-del-cliente/:customerId" element={<CustomerImageRepository />} />
          <Route path="dashboard-de-categorias" element={<CategoryDashboard />} />
          {/* <Route path="repositorio" element={<ImageRepository />} /> */}
          {/* <Route path="dashboard-de-clientes" element={<CustomerDashboard />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

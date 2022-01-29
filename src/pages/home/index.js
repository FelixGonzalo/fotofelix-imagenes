import React from 'react'
import { Link } from "react-router-dom";
import './Home.scss'
import logoFotoFelix from '../../assets/fotofelix_logo.png'

const Home = () => {
  return (
    <main className="wrapper Home">
      <img src={logoFotoFelix} alt="logo de Foto Felix" className="Home_logo" width="150px"/>
      <h1 className="Home_title">Repositorio de imágenes</h1>
      <Link to="/admin/buscador-de-repositorios" className="btn-default">Iniciar sesión</Link>
    </main>
  )
}

export default Home

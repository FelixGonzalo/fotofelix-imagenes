import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Header.scss'
import logo from '../../../assets/fotofelix_logo.png';

const Header = () => {

  let navigate = useNavigate();

  const handleSwitchMenu = () => {
    const Header_menu = document.getElementById('Header_menu')
    Header_menu.style.display = Header_menu.style.display === 'none' ? 'block' : 'none'; //
  }

  const handleCloseAllMenu = () => {
    document.getElementById('Header_menu').style.display ='none';
  }

  const handleLogout = () => {
    localStorage.removeItem('accesToken');
    document.getElementById('Header_menu').style.display ='none';
    navigate("/");
  }

  React.useEffect(() => {
    const accessToken = localStorage.getItem('accesToken')
    if (!accessToken) {
      navigate("/");
    }
  }, [])

  return (
    <header className="Header">
      <div className="Header_top">
        <div className="Header_logo">
          <img src={logo} alt="logo" width="50px"/>
        </div>
        <button type="button" className="Header_top_btn-menu" onClick={handleSwitchMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <nav id="Header_menu" className="Header_menu" style={{display: "none"}}>
        <ul>
          <li>
            <Link to="/admin/buscador-de-repositorios" className="Header_menu_link" onClick={handleCloseAllMenu}>Repositorio de imágenes</Link>
          </li>
          <li>
            <Link to="/admin/dashboard-de-categorias" className="Header_menu_link" onClick={handleCloseAllMenu}>Editar categorías</Link>
          </li>
          <li className="btn-logout">
            <button className="Header_menu_link btn-default" onClick={handleLogout}>Cerrar Sesión</button>
            {/* <Link to="/admin/dashboard-de-categorias" className="Header_menu_link" onClick={handleCloseAllMenu}>Editar categorías</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

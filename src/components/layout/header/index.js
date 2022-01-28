import React from 'react'
import { Link } from "react-router-dom";
import './Header.scss'
import logo from '../../../assets/fotofelix_logo.png';

const Header = () => {

  const handleSwitchMenu = () => {
    const Header_menu = document.getElementById('Header_menu')
    Header_menu.style.display = Header_menu.style.display === 'none' ? 'block' : 'none'; //
  }

  const handleSwitchSubMenu = () => {
    const Header_menu = document.getElementById('Header_submenu_admin')
    Header_menu.style.display = Header_menu.style.display === 'none' ? 'flex' : 'none'; //
  }

  const handleCloseAllMenu = () => {
    document.getElementById('Header_menu').style.display ='none';
    document.getElementById('Header_submenu_admin').style.display ='none';
  }

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
      <nav id="Header_menu" className="Header_menu">
        <ul>
          <li>
            <Link to="/" className="Header_menu_link desktop" onClick={handleCloseAllMenu}>Inicio</Link>
          </li>
          <li className="Header_menu_submenu">
            <button
              type="button"
              className="Header_menu_submenu_btn"
              onClick={handleSwitchSubMenu}>
                Admin <i className="fas fa-caret-down"></i>
            </button>
            <ul id="Header_submenu_admin">
              <li>
                <Link to="/admin/repositorio" className="Header_menu_link" onClick={handleCloseAllMenu}>Repositorio</Link>
              </li>
              <li>
                <Link to="/admin/dashboard-de-clientes" className="Header_menu_link" onClick={handleCloseAllMenu}>Editar clientes</Link>
              </li>
              <li>
                <Link to="/admin/dashboard-de-categorias" className="Header_menu_link" onClick={handleCloseAllMenu}>Editar categorías</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

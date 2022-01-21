import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/admin/">Admin</Link> |{" "}
        <Link to="/admin/repositorio">Repositorio</Link>
      </nav>
    </header>
  )
}

export default Header
